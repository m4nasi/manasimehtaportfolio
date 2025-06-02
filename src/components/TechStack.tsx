import React from 'react';
import { motion } from 'framer-motion';

const getSkillData = (skillName: string) => {
  const normalizedName = skillName.toLowerCase().replace(/\s+/g, '').replace(/#/g, 'sharp');
  const deviconName = {
    'ci/cd': 'githubactions',
    // 'mlops': 'amazonwebservices', // or another appropriate icon
    'tailwindcss': 'tailwindcss',
    'scikit-learn': 'scikitlearn',
    'pytorch': 'pytorch',
    'tensorflow': 'tensorflow',
    'numpy': 'numpy',
    'pandas': 'pandas',
    'opencv': 'opencv',
    'plotly': 'd3js', // closest alternative
    'raspberrypi': 'raspberrypi',
  }[normalizedName] || normalizedName;

  const colors = {
    python: 'from-purple-100 to-purple-200 border-purple-300',
    typescript: 'from-blue-100 to-blue-200 border-blue-300',
    javascript: 'from-yellow-100 to-yellow-200 border-yellow-300',
    react: 'from-cyan-100 to-cyan-200 border-cyan-300',
    vite: 'from-indigo-100 to-indigo-200 border-indigo-300',
    tailwindcss: 'from-teal-100 to-teal-200 border-teal-300',
    postgresql: 'from-blue-100 to-blue-200 border-blue-300',
    mysql: 'from-blue-100 to-blue-200 border-blue-300',
    flask: 'from-emerald-100 to-emerald-200 border-emerald-300',
    django: 'from-emerald-100 to-emerald-200 border-emerald-300',
    git: 'from-orange-100 to-orange-200 border-orange-300',
    cicd: 'from-sky-100 to-sky-200 border-sky-300',
    docker: 'from-blue-100 to-blue-200 border-blue-300',
    java: 'from-red-100 to-red-200 border-red-300',
    csharp: 'from-violet-100 to-violet-200 border-violet-300',
    c: 'from-blue-100 to-blue-200 border-blue-300',
    scikitlearn: 'from-orange-100 to-orange-200 border-orange-300',
    tensorflow: 'from-orange-100 to-orange-200 border-orange-300',
    pytorch: 'from-red-100 to-red-200 border-red-300',
    pandas: 'from-red-100 to-red-200 border-red-300',
    numpy: 'from-blue-100 to-blue-200 border-blue-300',
    r: 'from-blue-100 to-blue-200 border-blue-300',
    perl: 'from-purple-100 to-purple-200 border-purple-300',
    haskell: 'from-purple-100 to-purple-200 border-purple-300',
    html5: 'from-orange-100 to-orange-200 border-orange-300',
    css3: 'from-blue-100 to-blue-200 border-blue-300',
    bootstrap: 'from-purple-100 to-purple-200 border-purple-300',
    php: 'from-indigo-100 to-indigo-200 border-indigo-300',
    nodejs: 'from-green-100 to-green-200 border-green-300',
    spring: 'from-green-100 to-green-200 border-green-300',
    mongodb: 'from-green-100 to-green-200 border-green-300',
    supabase: 'from-green-100 to-green-200 border-green-300',
    gradle: 'from-blue-100 to-blue-200 border-blue-300',
    maven: 'from-red-100 to-red-200 border-red-300',
    jekyll: 'from-red-100 to-red-200 border-red-300',
    hugo: 'from-blue-100 to-blue-200 border-blue-300',
    vercel: 'from-gray-100 to-gray-200 border-gray-300',
    netlify: 'from-green-100 to-green-200 border-green-300',
    jenkins: 'from-red-100 to-red-200 border-red-300',
    putty: 'from-gray-100 to-gray-200 border-gray-300',
    gcc: 'from-gray-100 to-gray-200 border-gray-300',
    opencv: 'from-green-100 to-green-200 border-green-300',
    d3js: 'from-blue-100 to-blue-200 border-blue-300',
    jest: 'from-red-100 to-red-200 border-red-300',
    cypressio: 'from-gray-100 to-gray-200 border-gray-300',
    canva: 'from-teal-100 to-teal-200 border-teal-300',
    raspberrypi: 'from-red-100 to-red-200 border-red-300',
    githubactions: 'from-gray-100 to-gray-200 border-gray-300',
    amazonwebservices: 'from-orange-100 to-orange-200 border-orange-300',
  } as const;

  type DeviconName = keyof typeof colors;

  const color = colors[deviconName as DeviconName] || 'from-gray-100 to-gray-200 border-gray-300';

  return {
  iconUrl: deviconName === 'jest'
    ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg'
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-original.svg`,
  color: color || 'from-gray-100 to-gray-200 border-gray-300'
};

};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: "Languages",
      icon: "💻",
      skills: [
        "Python", "TypeScript", "JavaScript", "Java", "C#", "C",
        "R", "Perl", "Haskell"
      ],
    },
    {
      category: "Frontend",
      icon: "✨",
      skills: [
        "React", "Vite", "TailwindCSS", "HTML5", "CSS3", "Bootstrap"
      ],
    },
    {
      category: "Backend & Databases",
      icon: "⚙️",
      skills: [
        "Flask", "MySQL", "NodeJS", "Spring",
        "Supabase", "PHP"
      ],
    },
    {
      category: "ML & Data Science",
      icon: "📊",
      skills: [
        "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy",
        "OpenCV", "Plotly"
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "☁️",
      skills: [ "Git", "Gradle", "Maven",
        "Jekyll", "Hugo", "Vercel", "Netlify", "Jenkins",
        "Putty", "GCC", "Jest", "CypressIO", "Canva", "RaspberryPi"
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header with animation */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex items-center mb-8"
      >
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-xl mr-4 flex-shrink-0 shadow-sm">
          <span className="text-teal-600 text-2xl">🛠️</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 text-transparent">
          Tech Stack
        </h2>
      </motion.div>

      {/* <motion.p 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
        className="text-gray-700 leading-relaxed mb-8 max-w-3xl"
      >
        Here's a comprehensive collection of technologies I've worked with to build robust, scalable, and intelligent applications.
        I'm always expanding my toolkit and deepening my expertise.
      </motion.p> */}

      {/* Categories with staggered animations */}
      <div className="space-y-8">
        {techCategories.map((categoryData, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
          >
            {/* <h5 className="font-semibold text-xl text-gray-900 mb-4 flex items-center">
              <span className="text-0.5xl mr-1">{categoryData.icon}</span>
              {categoryData.category}
            </h5> */}
            <div className="flex flex-wrap gap-3">
              {categoryData.skills.map((skill, skillIndex) => {
                const { iconUrl, color } = getSkillData(skill); 
                return (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center px-4 py-2 rounded-xl border bg-gradient-to-r ${color} 
                              shadow-sm hover:shadow-md transition-all duration-200`}
                  >
                    <img 
                      src={iconUrl} 
                      alt={skill}
                      className="h-5 w-5 mr-2 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-800">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;