import React from 'react'
import { motion } from 'framer-motion';
import { Briefcase, Star } from 'lucide-react';
import portfolioData from '../data/portfolioData';


const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                    <Briefcase className="text-primary-500" size={24} />
                    {exp.title}
                  </h3>
                  <p className="text-primary-500 font-medium text-lg">{exp.company}</p>
                </div>
                <div className="text-gray-400 mt-2 lg:mt-0">
                  <span className="bg-dark-700 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{exp.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-primary-500 mb-3">Key Achievements:</h4>
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="text-yellow-500 mt-1" size={16} />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience