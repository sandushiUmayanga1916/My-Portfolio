import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Brand with enhanced styling */}
            <div className="flex-shrink-0 group">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                Sandushi Dissanayake
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              
              {/* Enhanced Resume Download Button */}
              <a
                href="/files/SANDUSHI DISSANAYAKE.pdf"
                download
                className="ml-6 relative px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map(({ label, href }, index) => (
                  <button
                    key={label}
                    onClick={() => handleNavClick(href)}
                    className="w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{label}</span>
                      <ChevronDown size={18} className="transform -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile Resume Button */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <a
                  href="/files/SANDUSHI DISSANAYAKE.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;