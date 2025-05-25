import React from 'react';
import AboutMe from './AboutMe';
import SocialLinks from './SocialLinks';
import Experience from './Experience';
import Education from './Education';
// import Introduction from './Introduction';
import TechStack from './TechStack';
import Projects from './Projects';
import Leadership from './Leadership';
import CurrentlyLearning from './CurrentlyLearning'
// import { FaUser, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const BentoBox: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}  
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hey, I'm <span className="bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">Manasi!</span>
          </h1>
          <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-4 mt-4">
            👩🏽‍💻Computer Science Graduate | 🖥️ Software Engineer | ⌨️ Java and AI Enthusiast
          </span>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting digital experiences with clean code and creative solutions
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick About */}
          <div className="bg-white lg:col-span-3 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 h-full flex flex-col">
              <AboutMe />
            </div>
          </div>

          {/* About Me - Full Width
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10">
              <Introduction />
            </div>
          </div> */}

          {/* Experience */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 sm:p-10">
              <Experience />
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10 h-full flex flex-col">
              <div className="space-y-4 flex-grow">
                <Education />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 sm:p-10">
              <Projects />
            </div>
          </div>

          {/* Leadership */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="pt-6 px-6 pb-4 sm:pt-10 sm:px-10 sm:pb-6">
              <Leadership />
            </div>
          </div>
          
          <div className="lg:col-span-1 h-full grid gap-6"> {/* The 'gap-6' controls space BETWEEN the two boxes */}
            {/* Currently Learning Box - Second row in this column */}
            <div id="currently-learning-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <CurrentlyLearning />
              </div>
            </div>
            
            {/* Tech Stack Box - First row in this column */}
            <div id="tech-stack-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <TechStack />
              </div>
            </div>
          </div>

          {/* Social Links - Full Width */}
          <div className="bg-white lg:col-span-3 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;