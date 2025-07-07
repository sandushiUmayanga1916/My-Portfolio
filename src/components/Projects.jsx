import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Award, ChevronDown, ExternalLink, Github } from 'lucide-react';

import portfolioData from '../data/portfolioData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Full-Stack', 'AI/ML', 'Web Development'];
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter);

  const nextProject = React.useCallback(() => {
    setActiveProject((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects.length, nextProject]);

  const currentProject = filteredProjects[activeProject];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setActiveProject(0);
                }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${activeProject}`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="text-primary-500" size={24} />
                    <span className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm">
                      {currentProject?.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {currentProject?.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {currentProject?.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-500 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject?.technologies.map((tech, index) => (
                        <span key={index} className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-500 mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {currentProject?.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Award className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {currentProject?.github && (
                      <motion.a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {currentProject?.demo && (
                      <motion.a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative">
                  <div className="glass-effect rounded-xl overflow-hidden">
                    {currentProject?.images && currentProject.images.length > 0 ? (
                      <motion.img
                        src={currentProject.images[0]}
                        alt={currentProject.title}
                        className="w-full h-80 object-cover"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback placeholder */}
                    <div 
                      className="w-full h-80 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center"
                      style={{ display: currentProject?.images && currentProject.images.length > 0 ? 'none' : 'flex' }}
                    >
                      <div className="text-center">
                        <Code size={48} className="text-white mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {currentProject?.title}
                        </h4>
                        <p className="text-white/80">Project #{activeProject + 1}</p>
                      </div>
                    </div>
                    
                    {/* Overlay with project info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white text-sm">Duration: {currentProject?.duration}</p>
                            <p className="text-white text-sm">Team: {currentProject?.team}</p>
                          </div>
                          <div className="flex gap-2">
                            {currentProject?.github && (
                              <a
                                href={currentProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <Github size={16} className="text-white" />
                              </a>
                            )}
                            {currentProject?.demo && (
                              <a
                                href={currentProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <ExternalLink size={16} className="text-white" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-primary-500/20 transition-colors"
          >
            <ChevronDown className="rotate-90" size={24} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-primary-500/20 transition-colors"
          >
            <ChevronDown className="-rotate-90" size={24} />
          </button>
          
          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;