'use client';

import React from 'react';
import AboutMe from './AboutMe';
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

import { motion } from 'framer-motion';

// Framer Motion variants
const fadeUpBox = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

const BentoBox: React.FC = () => {
  return (
    <div className="relative">
      <RetroNavBar />

      <div className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

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

            {/* About Me */}
            <motion.div 
              className="bg-white lg:col-span-3 rounded-3xl shadow-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBox}
              custom={0.1}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <AboutMe />
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBox}
              custom={0.2}
              whileHover={{ scale: 1.02 }}
              id="experience-section"
            >
              <div className="p-6 sm:p-10">
                <Experience />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBox}
              custom={0.3}
              whileHover={{ scale: 1.02 }}
              id="education-section"
            >
              <div className="p-8 sm:p-10 h-full flex flex-col">
                <Education />
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div 
              className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBox}
              custom={0.4}
              whileHover={{ scale: 1.02 }}
              id="projects-section"
            >
              <div className="p-6 sm:p-10">
                <Projects />
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBox}
              custom={0.5}
              whileHover={{ scale: 1.02 }}
              id="leadership-section"
            >
              <div className="p-6 sm:p-10">
                <Leadership />
              </div>
            </motion.div>

            {/* Side Column */}
            <motion.div 
              className="lg:col-span-1 grid gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                variants={fadeUpBox}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8 sm:p-10 flex flex-col">
                  <CurrentlyLearning />
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                variants={fadeUpBox}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8 sm:p-10 flex flex-col">
                  <Achievements />
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                variants={fadeUpBox}
                whileHover={{ scale: 1.02 }}
                id='tech-stack-section'
              >
                <div className="p-8 sm:p-10 flex flex-col">
                  <TechStack />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="mt-6 pt-8 pb-6 text-center 
                             bg-gradient-to-r from-blue-100 to-teal-100 
                             animate-fade-in-up animation-delay-1500 relative overflow-hidden rounded-xl">
            <div className="relative z-10">
              <p className="text-gray-800 text-2xl font-bold mb-4">Let's Connect and Build Something Amazing!</p>
              <ul className="flex justify-center space-x-6 mt-4 mb-6">
                <li>
                  <a href="https://www.instagram.com/m4nasi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 transform hover:scale-125" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/m4nasi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition-colors duration-200 transform hover:scale-125" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/m4nasi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 transform hover:scale-125" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/m4nasi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 transform hover:scale-125" aria-label="LinkedIn">
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
