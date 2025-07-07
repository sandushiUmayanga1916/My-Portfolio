import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-400 hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
