import React from 'react';
import { RobotCanvas } from '.';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ experienceRef }) => {
  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="hero-section">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#"><FontAwesomeIcon icon={faTerminal} /><span className="neon">PRAGG</span></a>
        </div>
        <ul className="navbar-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="content-container">
        <div className="text-container">
          <p>Hello, I am </p>
          <h1>Pragyan Satapathy</h1>
          <p>and I am a,</p>
          <div id="app">
            <Typewriter
              options={{
                strings: [
                  'Web Developer',
                  'Programmer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="button-container">
            <a className="btn-glitch-fill" onClick={scrollToExperience}>
              <span className="text">// Dive in</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
            </a>
          </div>
        </div>
        <div className="canvas-container">
          <RobotCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
