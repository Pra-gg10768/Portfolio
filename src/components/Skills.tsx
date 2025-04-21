import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C#', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'Java', level: 90 },
      ],
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP', level: 75 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Spring', level: 80 },
        { name: 'HTML/CSS/JS', level: 90 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'IoT & Robotics',
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Raspberry Pi', level: 80 },
        { name: 'Sensor Integration', level: 75 },
        { name: 'IOT Platforms', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-900 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="heading-gradient">Skills</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A showcase of my technical abilities across various domains of computer science and engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 heading-gradient">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: inView ? `${skill.level}%` : 0 }}
                          transition={{ duration: 1, delay: 0.2 * skillIndex }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills & Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Flask','SQL', 'Keras', 'Scikit-learn', 'OpenCV',
                  'Git/Version Control', 'VS Code', 'Android Studio', 'PyCharm',
                  'Pandas', 'NumPy', 'Matplotlib', 'CI/CD'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center rounded-lg bg-dark-700 text-gray-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;