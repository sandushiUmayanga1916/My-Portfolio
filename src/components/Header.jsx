import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Download Resume', href: 'public/files/Sandushi Dissanayake.pdf', download: true }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Sandushi Dissanayake
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map(({ label, href, download }) => (
              <a
                key={label}
                href={href}
                download={download}
                className={`${
                  download
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300'
                    : 'text-gray-300 hover:text-white transition-colors duration-200 hover:-translate-y-0.5 transform'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            {navItems.map(({ label, href, download }) => (
              <a
                key={label}
                href={href}
                download={download}
                className={`block py-2 ${
                  download
                    ? 'bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors'
                    : 'text-gray-300 hover:text-white transition-colors'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
