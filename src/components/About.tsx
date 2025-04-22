import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Cpu, Brain, MessageSquare, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  const interests = [
    { icon: <Brain size={24} />, title: 'AI & ML', description: 'Passionate about machine learning algorithms and artificial intelligence applications.' },
    { icon: <Cpu size={24} />, title: 'IoT', description: 'Experienced in combining IoT with AI for innovative smart systems.' },
    { icon: <Code size={24} />, title: 'Web Dev', description: 'Creating responsive and interactive web applications with modern frameworks.' },
    { icon: <Database size={24} />, title: 'Robotics', description: 'Building and programming robots for automation and problem-solving.' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="heading-gradient">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              An Enthusiastic Computer Science student with a strong interest in AI, Machine Learning, IoT, 
              Web Development and Robotics. Experienced in combining AI with IoT, developing computer vision 
              solutions, and working on embedded systems. Passionate about learning and contributing to 
              innovative projects.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="glass rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-full bg-primary-500/20 text-primary-400">
                    {interest.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                    <p className="text-gray-400">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex-1 max-w-sm">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="glass rounded-xl p-6 relative overflow-hidden">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-primary-400">Computer Science</h4>
                  <p className="text-gray-400">Bachelor's Degree</p>
                  <p className="text-sm text-gray-500">2021 - 2025</p>
                </div>
                <p className="text-gray-300">
                  Focused on AI, Machine Learning, and Software Development with multiple research projects.
                </p>
              </div>
            </div>
            
            <div className="flex-1 max-w-sm">
              <h3 className="text-2xl font-semibold mb-4">Connect</h3>
              <div className="glass rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Feel free to connect with me on professional networks:
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Pra-gg10768" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="https://linkedin.com/in/Pragnyan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors">
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a href="mailto:pragnyansatapathy@gmail.com" className="p-3 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors">
                    <MessageSquare size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;