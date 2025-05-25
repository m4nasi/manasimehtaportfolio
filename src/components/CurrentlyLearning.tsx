// src/components/CurrentlyLearning.tsx
import React from 'react';

const CurrentlyLearning: React.FC = () => {
  const learningItems = [
    { name: "Generative AI (LLMs)", icon: "🧠" },
    { name: "Optical Character Recognition (OCR)", icon: "🦀" },
    { name: "React Native", icon: "☸️" },
    { name: "App Development", icon: "📐" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-pink-600 text-2xl">📚</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-transparent">
          What I'm Learning
        </h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">As a lifelong learner, I'm always exploring new technologies and concepts to expand my skill set and stay ahead in the ever-evolving tech landscape. Here are some of the exciting areas I'm currently diving into, ranging from cutting-edge AI advancements to mobile app development.</p>

      <ul className="space-y-3 flex-grow">
        {learningItems.map((item, index) => (
          <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-pink-200">
            <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
            <span className="text-lg font-medium text-gray-800">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentlyLearning;