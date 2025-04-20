import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
  details: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'SignSpeak-AI',
      description: 'AI-powered sign language interpreter for real-time communication',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['Python', 'TensorFlow', 'OpenCV','Pandas','CNN-LSTM', 'Flask','Text-to-Speech (TTS)'],
      details: 'A user-friendly mobile and web application designed to empower hearing-impaired individuals by supporting multiple sign languages. The platform offers real-time gesture recognition using Convolutional Neural Networks (CNNs), Long Short-Term Memory networks (LSTMs), and OpenCV for accurate detection and interpretation of sign language. Recognized gestures are instantly converted into text or speech, enabling seamless communication.\n Future enhancements include voice-to-sign translation and expanded multilingual support, ensuring inclusivity and accessibility for diverse users.'
    },
    {
      id: 2,
      title: 'AI-Based Smart Traffic Management System',
      description: 'Intelligent traffic monitoring and optimization using computer vision',
      image: 'src/components/images/traffic.jpeg',
      tech: ['Python', 'PyTorch', 'YOLO', 'Raspberry Pi', 'IoT'],
      details: 'This AI-powered traffic management system utilizes computer vision and IoT technologies to create a smarter, more efficient traffic flow in urban environments. The system analyzes real-time video feeds from traffic cameras to detect vehicles, pedestrians, and road conditions.\n\nUsing a combination of YOLO (You Only Look Once) object detection and custom-trained models, the system can accurately identify traffic density, predict congestion, and dynamically adjust traffic signal timings to optimize flow. The hardware implementation uses Raspberry Pi devices at traffic intersections, connected to a central server that coordinates the network-wide response.'
    },
    {
      id: 3,
      title: 'CareCast – AI Based Disease Prediction System',
      description: 'Predictive healthcare analytics system for early disease detection',
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      details: 'CareCast is an innovative healthcare application that leverages AI and machine learning to predict potential health risks and diseases based on user-provided data. The system analyzes various health parameters, medical history, lifestyle factors, and demographic information to generate personalized health risk assessments.\n\nThe machine learning backend employs an ensemble of models including random forests, gradient boosting, and neural networks to achieve high accuracy in risk prediction across multiple disease categories.'
    },
    {
      id: 4,
      title: 'Real Time Queue Detection and Management System',
      description: 'A real-time system for detecting, managing and optimizing queues.',
      image: './src/components/images/queue.jpeg',
      tech: ['Python', 'Scikit-learn','YOLO', 'React', 'Node.js', 'MongoDB','Pandas','Seaborn'],
      details: 'This system utilizes the YOLO (You Only Look Once) object detection model to identify and count individuals in real-time camera feeds, optimizing queue management in public spaces and minimizing wait times. The solution features an intuitive web interface that displays real-time data on queue lengths and wait times, enabling authorities and service providers to make informed decisions.\n\n Designed to address challenges like occlusion and varying lighting conditions, the system ensures accurate detection and scalable performance across environments such as transportation hubs and government offices, enhancing operational efficiency even in high-traffic areas.',
      link: 'https://ijsrem.com/download/real-time-queue-detection-and-management-system-using-yolo-object-detection/'
    }
  ];

  const toggleProjectDetails = (project: Project | null) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the recent projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-8px]"
            >
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-12">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleProjectDetails(project)}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => toggleProjectDetails(null)}
            ></div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl">
              <button 
                onClick={() => toggleProjectDetails(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div 
                className="h-56 mb-6 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              ></div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
                {selectedProject.details}
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Source
                  </a>
                )}
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;