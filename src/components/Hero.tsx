import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RobotModel from './3d/RobotModel';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4"
            >
              <span className="px-4 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400 font-mono">
                Technology Enthusiast
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="heading-gradient">Pragnyan Satapathy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              An enthusiastic Computer Science student with a passion for AI, Machine Learning, IoT, 
              Web Development, and Robotics.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-primary-600 text-primary-400 hover:text-white hover:bg-primary-600/20 rounded-md transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 h-[400px] md:h-[500px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <RobotModel position={[0, -1, 0]} />
              </Suspense>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to Explore</span>
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1 
          }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
        >
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: 8 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.5 
            }}
            className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;