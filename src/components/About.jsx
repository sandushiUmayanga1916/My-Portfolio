import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/50 !mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* Left Column - Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-500 flex items-center flex-wrap">
                <User className="inline mr-2 flex-shrink-0" size={24} />
                <span className="break-words">Professional Journey</span>
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {portfolioData.about.description}
              </p>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Currently pursuing my final year in Software Engineering at APIIT while working as an Associate Software Engineer. I specialize in creating scalable, maintainable software systems that deliver exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-primary-500">
                <Zap size={18} className="flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Always learning, always growing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Highlights */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {portfolioData.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-lg p-3 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4"
                  whileHover={{ 
                    scale: window.innerWidth >= 768 ? 1.02 : 1.01, 
                    x: window.innerWidth >= 768 ? 10 : 5 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex-shrink-0 mt-2 sm:mt-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="glass-effect rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Optional: Mobile-specific additional content */}
        <motion.div
          className="mt-8 sm:mt-12 lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary-500">Quick Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 text-xs">Technologies</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">100%</div>
                <div className="text-gray-400 text-xs">Commitment</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-xs">Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;