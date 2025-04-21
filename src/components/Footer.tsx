import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-900 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="p-4 rounded-full bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="text-primary-400" size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white flex items-center mb-4"
          >
            <span className="text-primary-500 mr-1">&lt;</span>
            <span className="heading-gradient">Pragg</span>
            <span className="text-primary-500 ml-1">/&gt;</span>
          </a>
          
          <p className="text-gray-400 mb-6 text-center max-w-md">
            Building innovative solutions at the intersection of AI, IoT, and software development.
          </p>
          
          <div className="flex space-x-6 mb-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="w-full h-px bg-dark-700 my-6" />
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pragnyan Satapathy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;