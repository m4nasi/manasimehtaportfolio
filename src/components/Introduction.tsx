import React from 'react';
// import { FaCode, FaUser, FaLightbulb, FaTools } from 'react-icons/fa';
// import { MdOutlineDesignServices } from 'react-icons/md';

const Introduction = () => {
  return (
    <div>
      <div className="p-8 sm:p-10 h-full flex flex-col">
        {/* Header with Teal Gradient */}
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl mr-4">
            {/* <FaUser className="text-teal-600 text-2xl" /> */}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">
            About Me
          </h2>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            I'm a <span className="font-semibold text-teal-600">passionate full-stack developer</span> with expertise in 
            React, TypeScript, and Python. I specialize in building performant, accessible web applications 
            with intuitive user experiences that solve real-world problems.
          </p> */}
          <p className="text-lg text-gray-700 leading-relaxed">
  I'm a <span className="font-semibold text-teal-600">full-stack developer and ML enthusiast</span> proficient in Python and Java, with a solid foundation in React and TypeScript. My goal is to build intelligent, performant web applications that prioritize seamless and intuitive user experiences.
</p>
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start">
            <div className="bg-teal-50 p-3 rounded-lg mr-4">
              {/* <FaCode className="text-teal-600 text-xl" /> */}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Full-Stack Expertise</h3>
              <p className="text-gray-600 text-sm">
                2 years building scalable applications from database to UI
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-teal-50 p-3 rounded-lg mr-4">
              {/* <MdOutlineDesignServices className="text-teal-600 text-xl" /> */}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">UX Focused</h3>
              <p className="text-gray-600 text-sm">
                Creating intuitive interfaces with accessibility in mind
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-teal-50 p-3 rounded-lg mr-4">
              {/* <FaLightbulb className="text-teal-600 text-xl" /> */}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Problem Solver</h3>
              <p className="text-gray-600 text-sm">
                Passionate about finding elegant solutions to complex challenges
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-teal-50 p-3 rounded-lg mr-4">
              {/* <FaTools className="text-teal-600 text-xl" /> */}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Continuous Learner</h3>
              <p className="text-gray-600 text-sm">
                Always exploring new technologies and best practices
              </p>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-gray-600 italic">
            "When I'm not coding, you'll find me taking photographs, hiking in the mountains, 
            or playing a good game of Chess."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;