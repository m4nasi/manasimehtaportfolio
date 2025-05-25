import React from 'react';
import profilePhoto from '../assets/profile.jpg'; // Ensure this path is correct

const AboutMe: React.FC = () => {
  return (
    // This div defines the padding and base height/flex behavior for the entire AboutMe section
    // within its bento box cell.
    <div className="p-8 sm:p-10 h-full flex flex-col">
      {/* Main Content Grid: Photo Column (left) and Text/Key Points Column (right) */}
      {/* On large screens (lg), it's 2 columns. On smaller screens, it stacks. */}
      {/* items-stretch ensures both columns in the grid try to match height. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 flex-grow items-stretch"> {/* 1fr for photo, 2fr for content */}

        {/* Photo Column - Takes full height of its grid cell */}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-teal-200">
            <img
              src={profilePhoto}
              alt="Manasi's Profile"
              className="absolute inset-0 w-full h-full object-cover object-top" // Image fills its container
            />
            {/* Optional: Add a subtle gradient overlay on the image for effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Content Column - Holds introduction, key points, and personal touch */}
        <div className="flex flex-col h-full justify-between"> {/* justify-between to push personal touch to bottom */}
          <div> {/* Wrapper for intro text and key points */}
            {/* Header - Stays at the top, separate from the main photo/content grid */}
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-teal-100 to-purple-100 p-3 rounded-xl mr-4 flex-shrink-0">
                {/* Placeholder for icon, uncomment if using react-icons */}
                {/* <FaGraduationCap className="text-teal-600 text-2xl" /> */}
                <span className="text-teal-600 text-2xl">👤</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">
                About Me
              </h2>
            </div>
            {/* Introduction Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hello! I'm a passionate developer who thrives on creating both intelligent systems and intuitive user experiences. Proficient in Python and Java for robust backend and machine learning solutions, I also leverage modern frontend technologies like React and TypeScript to build beautiful and functional web applications. My curiosity drives me to constantly explore new frameworks, contribute to open-source, and share knowledge, all to enhance my craft and solve real-world problems.
            </p>

            {/* Key Points Grid - Now on the right of the main text within this column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              {/* Key Point 1: Problem Solver */}
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-3 flex-shrink-0">
                  {/* Placeholder for Icon */}
                  <span className="text-teal-600 text-xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Problem Solver</h3>
                  <p className="text-gray-600 text-sm">
                    Passionate about finding elegant solutions to complex challenges.
                  </p>
                </div>
              </div>

              {/* Key Point 2: Continuous Learner */}
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-3 flex-shrink-0">
                  {/* Placeholder for Icon */}
                  <span className="text-teal-600 text-xl">📚</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Continuous Learner</h3>
                  <p className="text-gray-600 text-sm">
                    Always exploring new technologies and best practices.
                  </p>
                </div>
              </div>

              {/* Key Point 3: Full-Stack Capability */}
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-3 flex-shrink-0">
                  {/* Placeholder for Icon */}
                  <span className="text-teal-600 text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Full-Stack Capability</h3>
                  <p className="text-gray-600 text-sm">
                    Building scalable applications from robust backends to engaging UIs.
                  </p>
                </div>
              </div>

              {/* Key Point 4: UX Focused */}
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-3 flex-shrink-0">
                  {/* Placeholder for Icon */}
                  <span className="text-teal-600 text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">UX Focused</h3>
                  <p className="text-gray-600 text-sm">
                    Crafting intuitive interfaces with accessibility in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Touch - Pushed to the bottom of the content column */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-gray-600 italic text-base">
              "When I'm not coding, you'll find me taking photographs, hiking in the mountains, or playing a good game of Chess."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;