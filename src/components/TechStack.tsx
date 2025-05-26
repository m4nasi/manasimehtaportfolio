import React from 'react';
const getSkillIcon = (skillName: string) => {
  const normalizedName = skillName.toLowerCase();
  switch (normalizedName) {
    case 'python': return { icon: '🐍', color: 'text-purple-700 bg-purple-100' };
    case 'typescript': return { icon: '🟦', color: 'text-purple-700 bg-purple-100' };
    case 'javascript': return { icon: '⚡', color: 'text-purple-700 bg-purple-100' };
    case 'react': return { icon: '⚛️', color: 'text-cyan-500 bg-cyan-100' };
    case 'vite': return { icon: '🚀', color: 'text-cyan-500 bg-cyan-100' };
    case 'tailwindcss': return { icon: '🌬️', color: 'text-cyan-500 bg-cyan-100' };
    case 'postgresql': return { icon: '🐘', color: 'text-blue-700 bg-blue-100' };
    case 'mysql': return { icon: '🐬', color: 'text-blue-700 bg-blue-100' };
    case 'django':
    case 'flask': return { icon: '✨', color: 'text-blue-700 bg-blue-100' };
    case 'mlops': return { icon: '🤖', color: 'text-indigo-500 bg-indigo-100' };
    case 'git': return { icon: '🌳', color: 'text-indigo-500 bg-indigo-100' };
    case 'ci/cd': return { icon: '🔄', color: 'text-indigo-500 bg-indigo-100' };
    case 'docker': return { icon: '🐳', color: 'text-blue-800 bg-blue-100' };
    case 'java': return { icon: '☕', color: 'text-purple-700 bg-purple-100' };
    case 'c#': return { icon: '💻', color: 'text-purple-700 bg-purple-100' };
    case 'c': return { icon: '⚡', color: 'text-purple-700 bg-purple-100' };
    case 'sql': return { icon: '📊', color: 'text-purple-700 bg-purple-100' };
    default: return { icon: '💡', color: 'text-gray-500 bg-gray-100' };
  }
};

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C", "SQL"],
    },
    {
      category: "Frontend",
      icon: "✨",
      skills: ["React", "Vite", "TailwindCSS"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Flask", "PostgreSQL", "MySQL"],
    },
    {
      category: "ML & Data Science",
      icon: "📊",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"],
    },
    {
      category: "DevOps & Cloud",
      icon: "☁️",
      skills: ["MLOps", "Git", "CI/CD", "Docker"],
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-teal-600 text-2xl">🛠️</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 text-transparent">
          Tech Stack
        </h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
    Here's a snapshot of the technologies I wield to build robust, scalable, and intelligent applications.
    I'm always keen to explore new tools and deepen my expertise.
  </p>

      {/* Dynamic List */}
      <div className="space-y-6">
        {techCategories.map((categoryData, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
              <span className="text-xl mr-2">{categoryData.icon}</span>
              {categoryData.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryData.skills.map((skill, skillIndex) => {
                const { icon, color } = getSkillIcon(skill); 
                return (
                  <div
                    key={skillIndex}
                    className={`flex items-center p-2 rounded-lg transition-all duration-200
                                ${color} hover:shadow-md hover:scale-[1.02]`}
                  >
                    <span className="text-xl mr-2">{icon}</span> 
                    <span className="text-sm font-medium text-gray-800">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;