import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary-500">
                <User className="inline mr-2" size={28} />
                Professional Journey
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {portfolioData.about.description}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently pursuing my final year in Software Engineering at APIIT while working as a Junior Web Developer. 
                I specialize in creating scalable, maintainable software systems that deliver exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-primary-500">
                <Zap size={20} />
                <span className="font-semibold">Always learning, always growing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {portfolioData.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-lg p-4 flex items-center gap-4"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-lg p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="glass-effect rounded-lg p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;