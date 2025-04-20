import React from 'react';
import {
  Cpu,
  Globe,
  Database,
  Code,
  BrainCircuit,
  Server,
} from 'lucide-react';

const features = [
  { icon: <BrainCircuit size={20} />, text: 'Artificial Intelligence' },
  { icon: <Database size={20} />, text: 'Machine Learning' },
  { icon: <Cpu size={20} />, text: 'Internet of Things (IoT)' },
  { icon: <Code size={20} />, text: 'Web Development' },
  { icon: <Server size={20} />, text: 'Embedded Systems' },
  { icon: <Globe size={20} />, text: 'Computer Vision' },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know a bit about who I am and what drives my passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 text-gray-800 dark:text-gray-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              A Curious Mind in a World of Innovation
            </h3>

            <p>
              I'm a driven Computer Science student passionate about exploring cutting-edge technologies
              and using them to solve real-world problems. My work lies at the intersection of software,
              hardware, and human impact.
            </p>
            <p>
              From AI models and IoT devices to full-stack applications and robotics, I thrive on blending
              disciplines to create intelligent and interactive systems.
            </p>
            <p>
              I believe learning never stops, and I’m constantly pushing the limits of what I can build,
              understand, and contribute to.
            </p>

            {/* Tech stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/40 dark:bg-gray-700/50 p-3 rounded-lg shadow backdrop-blur-md hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-blue-500">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visuals */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
              ></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl border-4 border-white dark:border-gray-700 overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
              ></div>
            </div>

            <div className="absolute -top-6 -left-6 px-4 py-3 bg-blue-600 text-white text-sm rounded-xl shadow-lg w-40 text-center font-semibold">
              Tech Explorer 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
