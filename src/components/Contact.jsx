import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, ArrowRight } from 'lucide-react';

const portfolioData = {
  personal: {
    email: "sandushiumayanga1916@gmail.com",
    phone: "+94 70 172 5432",
    github: "https://github.com/sandushiUmayanga1916",
    linkedin: "https://linkedin.com/in/sandushi-dissanayake",
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (formspreeResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark-800/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email"
                className="block"
              >
                <motion.div className="glass-effect rounded-xl p-6 flex items-center gap-4" whileHover={{ scale: 1.02, x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">{portfolioData.personal.email}</p>
                  </div>
                </motion.div>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call phone"
                className="block"
              >
                <motion.div className="glass-effect rounded-xl p-6 flex items-center gap-4" whileHover={{ scale: 1.02, x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">{portfolioData.personal.phone}</p>
                  </div>
                </motion.div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub"
                className="block"
              >
                <motion.div className="glass-effect rounded-xl p-6 flex items-center gap-4" whileHover={{ scale: 1.02, x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-gray-400">@sandushiUmayanga1916</p>
                  </div>
                </motion.div>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                className="block"
              >
                <motion.div className="glass-effect rounded-xl p-6 flex items-center gap-4" whileHover={{ scale: 1.02, x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.07v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-gray-400">sandushi-dissanayake</p>
                  </div>
                </motion.div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 disabled:opacity-50"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
