import React from 'react';
import AboutMe from './AboutMe';
// import SocialLinks from './SocialLinks';
import Experience from './Experience';
import Education from './Education';
import TechStack from './TechStack';
import Projects from './Projects';
import Leadership from './Leadership';
import CurrentlyLearning from './CurrentlyLearning';
import RetroNavBar from './RetroNavBar';
import Achievements from './Achievements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const BentoBox: React.FC = () => {
  return (
    <div className="relative">
      <RetroNavBar />

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 relative overflow-hidden">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-up font-cute">
              Hey, I'm <span className="bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">Manasi!</span>
            </h1>
            <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-4 mt-4 animate-fade-in-up animation-delay-500">
              👩🏽‍💻Computer Science Graduate | 🖥️ Software Engineer | ⌨️ Java and AI Enthusiast | 🇬🇧 England
            </span>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              Crafting digital experiences with clean code and creative solutions
            </p>
          </div>

          {/* Bento Grid */}
          <div id="about-me-section" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* About Me Section */}
            <div className="bg-white lg:col-span-3 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <AboutMe />
              </div>
            </div>

            {/* Experience Section */}
            <div id="experience-section" className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-10">
                <Experience />
              </div>
            </div>

            {/* Education Section */}
            <div id="education-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <div className="space-y-4 flex-grow">
                  <Education />
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects-section" className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-10">
                <Projects />
              </div>
            </div>

            {/* Leadership Section */}
            <div id="leadership-section" className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-10">
                <Leadership />
              </div>
            </div>

            {/* Combined Tech Stack & Currently Learning (1 Column, 2 Boxes) */}
            <div id="currently-section" className="lg:col-span-1 grid gap-6">
              {/* Currently Learning Box */}
              <div id="currently-learning-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 sm:p-10 flex flex-col">
                  <CurrentlyLearning />
                </div>
              </div>
              
              {/* Currently Learning Box */}
              <div id="currently-learning-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 sm:p-10 flex flex-col">
                  <Achievements />
                </div>
              </div>

              {/* Tech Stack Box */}
              <div id="tech-stack-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 sm:p-10 flex flex-col">
                  <TechStack />
                </div>
              </div>
            </div>

            {/* If you add PhotographyStudioBento and ChessGameBento later, uncomment them here */}
            {/* <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <PhotographyStudioBento />
              </div>
            </div> */}

            {/* <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <ChessGameBento />
              </div>
            </div> */}
          </div>

          {/* --- Creative Footer --- */}
          <footer className="mt-6 pt-8 pb-6 text-center 
                             bg-gradient-to-r from-blue-100 to-teal-100 
                             animate-fade-in-up animation-delay-1500 relative overflow-hidden rounded-xl" // Added rounded-xl and overflow-hidden
          >
            <div className="relative z-10">
                <p className="text-gray-800 text-2xl font-bold mb-4">Let's Connect and Build Something Amazing!</p>
                {/* Social Media Icons */}
                <ul className="flex justify-center space-x-6 mt-4 mb-6">
                    <li>
                      <a
                        href="https://www.instagram.com/m4nasi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-pink-500 transition-colors duration-200 transform hover:scale-125"
                        aria-label="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/m4nasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-400 transition-colors duration-200 transform hover:scale-125"
                        aria-label="Twitter"
                      >
                        <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/m4nasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 transform hover:scale-125"
                        aria-label="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/m4nasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 transform hover:scale-125"
                        aria-label="LinkedIn"
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                      </a>
                    </li>
                </ul>

                <p className="text-gray-600 text-sm mb-2">
                  &copy; {new Date().getFullYear()} Manasi. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Crafted with <span className="text-red-500">❤️</span>
                </p>
            </div>
          </footer>
        </div> 
      </div> 
    </div>
  );
};

export default BentoBox;