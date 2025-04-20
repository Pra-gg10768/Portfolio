import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-transparent opacity-20 animate-wave-background" />

      <div className="container relative mx-auto px-4 py-12 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2 mb-6">
            {['AI', 'ML', 'IoT', 'Web', 'Robotics'].map((tech, i) => (
              <span
                key={tech}
                className="inline-block px-3 py-1 mr-2 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'fadeIn 0.5s ease-in-out forwards',
                  opacity: 0,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600">Pragnyan Satapathy</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8 typewriter">
            Technology Enthusiast & Computer Science Student
          </p>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8">
            An enthusiastic developer with a strong interest in AI, Machine Learning, IoT, Web Development, and Robotics.
          </p>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://github.com/Pra-gg10768"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/pragnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pragnyansatapathy@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>

      <style>{`
        @keyframes wave {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-wave-background {
          animation: wave 5s ease-in-out infinite;
        }

        .typewriter {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid;
          width: 0;
          animation: typing 3s steps(30) 1s forwards, blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
