import React from 'react';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 93 },
        { name: 'Java', level: 90 },
        { name: 'C#', level: 83 },
        { name: 'C', level: 75 },
        { name: 'OOPS', level: 95 },
        
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP', level: 75 },
        { name: 'Data Analysis', level: 90 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Spring', level: 73 },
        { name: 'HTML/CSS/JS', level: 90 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      title: 'IoT & Embedded Systems',
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Raspberry Pi', level: 80 },
        { name: 'Sensors Integration', level: 75 },
        { name: 'Embedded C', level: 70 },
        { name: 'IoT Platforms', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired throughout my journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `growSkill 1.5s ease-out forwards`,
                          animationDelay: `${catIndex * 0.3 + skillIndex * 0.1}s`,
                          transform: 'scaleX(0)',
                          transformOrigin: 'left' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Other Skills & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Flask','SQL', 'Keras', 'Scikit-learn', 'OpenCV',
              'REST APIs','Agile', 'Jupyter', 'VS Code', 'Android Studio', 'PyCharm',
              'Pandas', 'NumPy', 'Matplotlib', 'CI/CD'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes growSkill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;