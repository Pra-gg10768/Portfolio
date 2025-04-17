import React from 'react';
import RobotCanvas1 from './Robot1.jsx'; // Adjust the path if necessary

function About() {
    return (
        <div id="about" className="about-section">
            <div className="about-content">
                <div className="about-model">
                    <RobotCanvas1 />
                </div>
                <div className="about-text">
                    <h1 className="section-title">About Me</h1>
                    <p className="section-description">
                        Hello! I am Pragyan Satapathy, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong background in programming and software development, I enjoy bringing ideas to life in the browser.
                    </p>
                    <p className="section-description">
                        My journey in the tech world started with a fascination for how things work, leading me to explore various programming languages and technologies. Today, I specialize in developing applications using the MERN stack and continuously strive to learn and grow in this ever-evolving field.
                    </p>
                    <div className="button-container">
                        <a className="btn-glitch-fill" href="/Pragnyan Resume.pdf">
                            <span className="text">// Get CV</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
