import React from 'react';
import Particles from 'react-tsparticles';
import AboutMe from './AboutMe';
import SocialLinks from './SocialLinks';
import Experience from './Experience';
import Education from './Education';
import TechStack from './TechStack';
import Projects from './Projects';
import Leadership from './Leadership';
import CurrentlyLearning from './CurrentlyLearning';

const BentoBox: React.FC = () => {
  return (
    <div className="relative">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#f0f4f8", // Light background color
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse", // Particles move away on click
              },
              onHover: {
                enable: true,
                mode: "grab", // Particles connect to the cursor on hover
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00FFFF", "#20B2AA", "#66CDAA", "#06B6D4"], // Blue-green palette
            },
            links: {
              color: "#99f6e4",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5, // Increased speed for continuous movement
              direction: "none", // Particles move in random directions
              random: true,
              straight: false, // Particles do not move in straight lines
              outModes: {
                default: "out", // Particles reappear when they leave the canvas
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // Increased particle count for a denser effect
            },
            opacity: {
              value: 0.6, // Slightly more opaque particles
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 }, // Increased size range for variation
            },
          },
          detectRetina: true,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 relative overflow-hidden">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
              Hey, I'm <span className="bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">Manasi!</span>
            </h1>
            <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-4 mt-4 animate-fade-in-up animation-delay-500">
              👩🏽‍💻Computer Science Graduate | 🖥️ Software Engineer | ⌨️ Java and AI Enthusiast
            </span>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
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
              <div className="p-6 sm:p-10">
                <Leadership />
              </div>
            </div>

            <div className="lg:col-span-1 h-full grid gap-6">
              {/* Currently Learning */}
              <div id="currently-learning-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 sm:p-10 h-full flex flex-col">
                  <CurrentlyLearning />
                </div>
              </div>

              {/* Tech Stack */}
              <div id="tech-stack-section" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 sm:p-10 h-full flex flex-col">
                  <TechStack />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white lg:col-span-3 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;