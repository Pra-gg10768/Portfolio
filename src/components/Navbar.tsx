import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white flex items-center"
          >
            <span className="text-primary-500 mr-1">&lt;</span>
            <span className="heading-gradient">Pragg</span>
            <span className="text-primary-500 ml-1">/&gt;</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-dark-700 text-gray-300 hover:text-primary-400 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-dark-700 text-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={toggleNavbar}
              className="text-gray-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;