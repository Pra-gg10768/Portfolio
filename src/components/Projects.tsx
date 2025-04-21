import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Eye, MessageSquare, Brain, Activity } from 'lucide-react';

const Projects: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      title: 'SignSpeak-AI',
      description: 'A user-friendly web application designed to empower hearing-impaired individuals by supporting multiple sign languages. The platform offers real-time gesture recognition using Convolutional Neural Networks (CNNs), Long Short-Term Memory networks (LSTMs), and OpenCV for accurate detection and interpretation of sign language. Recognized gestures are instantly converted into text or speech, enabling seamless communication.\n Future enhancements include voice-to-sign translation and expanded multilingual support, ensuring inclusivity and accessibility for diverse users.',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'TensorFlow', 'OpenCV','Pandas','CNN-LSTM', 'Flask','Text-to-Speech (TTS)'],
      icon: <Eye size={24} />,
      github: "https://github.com/Pra-gg10768/SignSpeak-AI"
    },
    {
      title: 'Real Time Queue Detection and Management System',
      description: 'This system utilizes the YOLO (You Only Look Once) object detection model to identify and count individuals in real-time camera feeds, optimizing queue management in public spaces and minimizing wait times. The solution features an intuitive web interface that displays real-time data on queue lengths and wait times, enabling authorities and service providers to make informed decisions.\n\n Designed to address challenges like occlusion and varying lighting conditions, the system ensures accurate detection and scalable performance across environments such as transportation hubs and government offices, enhancing operational efficiency even in high-traffic areas.',
      image: '/images/queue.jpeg',
      tags: ['Python', 'Scikit-learn','YOLO', 'React', 'Node.js', 'MongoDB','Pandas','Seaborn'],
      icon: <Eye size={24} />,
      website: "https://ijsrem.com/download/real-time-queue-detection-and-management-system-using-yolo-object-detection/"
    },
    {
      title: 'CareCast – AI Disease Prediction',
      description: 'Machine learning-based system for early disease prediction using patient symptoms and medical history, providing preventative healthcare recommendations.',
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['scikit-learn', 'joblib', 'Axios', 'Python','Seaborn','Pandas', 'Flask', 'React.js','Tailwind CSS','Render'],
      icon: <Brain size={24} />,
      github: "https://github.com/Pra-gg10768/CareCast_Predictions",
      demo: "https://care-cast-predictions.vercel.app/"
    },
    {
      title: 'AI-Based Smart Traffic Management',
      description: 'Intelligent traffic management system using computer vision and deep learning to optimize traffic flow and reduce congestion in urban areas.',
      image: '/images/traffic.jpeg',
      tags: ['Python', 'PyTorch', 'YOLO', 'Raspberry Pi', 'IoT'],
      icon: <Activity size={24} />  
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative">
      {/* Background elements */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="heading-gradient">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore some of my recent projects that showcase my skills in AI, Machine Learning, and software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-primary-500/80 text-white z-10">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary-900/50 text-primary-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 flex items-center gap-1 text-sm"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}

                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-400 hover:text-accent-300 flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Publication</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-md transition-all"
            >
              <MessageSquare size={20} className="mr-2" />
              <span>Get in Touch for Collaborations</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
