import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Full-Stack Developer", "Software Engineer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0]}
            </span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="inline-block transition-all duration-500">
              {titles[currentTitle]}
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {portfolioData.about.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch <ArrowRight size={20} />
            </a>
            
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:text-blue-400 hover:scale-110 hover:rotate-3 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:text-blue-400 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;