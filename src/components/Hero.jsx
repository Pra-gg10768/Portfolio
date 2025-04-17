import React from 'react';
import { RobotCanvas } from '.';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from './useScrollAnimation'; // Ensure correct path

const Hero = ({ scrollContainer }) => {
  useScrollAnimation(); // Apply the scroll animation hook

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hero" className="hero-section">
      <nav className="navbar">
        <div className="navbar-brand">
          <FontAwesomeIcon icon={faTerminal} /><span className="neon">PRAGG</span>
        </div>
        <ul className="navbar-nav">
          <li><a href="#hero" onClick={() => handleScrollTo('hero')}>Home</a></li>
          <li><a href="#about" onClick={() => handleScrollTo('about')}>About</a></li>
          <li><a href="#experience" onClick={() => handleScrollTo('experience')}>Experience</a></li>
          <li><a href="#portfolio" onClick={() => handleScrollTo('portfolio')}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleScrollTo('contact')}>Contact</a></li>
        </ul>
      </nav>
      <div className="content-container">
        <div className="text-container">
          <p>Hello, I am </p>
          <h1>Pragyan Satapathy</h1>
          <p>and I am a</p>
          <div id="app">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Programmer', 'Data Analyst'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="button-container">
            <a className="btn-glitch-fill" href="#about" onClick={() => handleScrollTo('about')}>
              <span className="text">// Dive in</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
            </a>
          </div>
        </div>
        <div className="canvas-container">
          <RobotCanvas scrollContainer={scrollContainer} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
