import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="heading-gradient">Touch</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Feel free to reach out for collaborations, project inquiries, or just to say hello!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="p-4 bg-primary-500/20 border border-primary-500/30 rounded-lg text-center">
                  <p className="text-primary-400 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-lg flex items-center justify-center transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="text-primary-400 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">Email</p>
                      <a href="mailto:pragnyansatapathy@gmail.com" className="text-primary-400 hover:underline">
                        pragnyansatapathy@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-primary-400 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-white">Bengaluru, Karnataka, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-primary-400 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <a href="tel:+917829465164" className="text-white hover:text-primary-400">
                        +91-7829465164
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/Pra-gg10768" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-lg bg-dark-700 hover:bg-primary-600 transition-colors group"
                  >
                    <Github size={24} className="text-gray-400 group-hover:text-white" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/pragnyan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-lg bg-dark-700 hover:bg-blue-600 transition-colors group"
                  >
                    <Linkedin size={24} className="text-gray-400 group-hover:text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/praag._.yaan/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-lg bg-dark-700 hover:bg-blue-600 transition-colors group"
                  >
                    <Instagram size={24} className="text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;