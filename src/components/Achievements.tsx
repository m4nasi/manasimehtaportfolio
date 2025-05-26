import React from 'react';
// If you're using react-icons, you could import specific icons like:
// import { FaTrophy, FaCertificate, FaAward, FaStar } from 'react-icons/fa';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string; // Emoji or path to an icon component
  link?: string; // Optional link to verify achievement (e.g., certificate URL, hackathon page)
}

const Achievements: React.FC = () => {
  const achievementData: Achievement[] = [
    {
      id: 1,
      title: "Hackathon Winner: HackNotts 2022 - J'Eviter",
      description: "Secured first place outperforming 50 teams by developing an image recognition AI using TensorFlow and Python in Jupyter Notebooks, within a strict 24-hour timeframe. Attained an accuracy rate of 92% in identifying food items and determine their compatibility with allergies.",
      icon: "🏆", // Trophy emoji
      link: "#" // Replace with actual hackathon link if available
    },
    {
      id: 2,
      title: "4th Place: HackNotts 2024 - GeoGuessrAI",
      description: "Developed an AI-powered GeoGuessr utilising advanced Computer Vision (CV) techniques to accurately identify global locations from Google Street View imagery. Engineered an end-to-end ML pipeline involving data acquisition, object recognition (YOLO/SSD), scene classification (CNNs), and OCR for robust geographical inference. Demonstrated expertise in Python, TensorFlow/PyTorch, and large-scale data processing, building a complex system that translates visual cues into precise location predictions.",
      icon: "🏅", // Medal emoji
      link: "#" // Replace with actual certification link
    },
    {
      id: 3,
      title: "Academic Excellence",
      description: "Recognized for outstanding academic performance in my first year at the University of Nottingham, demonstrating exceptional academic performance and a strong foundation in Computer Science.",
      icon: "✨", // Sparkles emoji
    },
    // {
    //   id: 4,
    //   title: "Top 10% Contributor: Open Source Project",
    //   description: "Acknowledged for significant and consistent contributions to a widely used open-source library.",
    //   icon: "🌟", // Star emoji
    //   link: "#" // Replace with actual GitHub repo or contribution link
    // },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-orange-600 text-2xl">🏅</span> {/* Medal emoji for header */}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 text-transparent">
          Achievements
        </h2>
      </div>

      {/* Achievements List */}
      <ul className="space-y-4 flex-grow">
        {achievementData.map((item) => (
          <li key={item.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-orange-200">
            <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="block cursor-pointer"> {/* Make the whole card clickable */}
              <div className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;