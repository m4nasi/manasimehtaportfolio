import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const RetroNavBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-300 border-b-2 border-purple-500 font-mono text-gray-800 shadow-md p-2 flex items-center justify-between px-4">
       {/* System (Clock)*/}
      <div className="flex-shrink-0 bg-purple-400 text-sm px-3 py-1
                      border-t-2 border-l-2 border-purple-500 border-r-2 border-b-2 border-white
                      shadow-inner rounded-md">
        {formatTime(time)}
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center flex-grow space-x-4 ml-4 mr-4">
        <Link
            to="about-me-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            About
        </Link>
        <Link
            to="experience-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Experience
        </Link>
        <Link
            to="education-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Education
        </Link>
        <Link
            to="projects-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Projects
        </Link>
        <Link
            to="leadership-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Leadership
        </Link>
        <Link
            to="tech-stack-section"
            smooth={true}
            duration={500}
            className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-blue-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Tech Stack
        </Link>
        </div>
        
        <div className="flex-shrink-0 bg-pink-400 text-sm px-1 py-1
                border-t-2 border-l-2 border-purple-500 border-r-2 border-b-2 border-white
                shadow-inner rounded-md">
  <ul className="flex justify-center space-x-4">
    <li>
      <a
        href="https://www.instagram.com/m4nasi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-pink-500 transition-colors duration-200
                   px-2 py-1 rounded-sm
                   hover:bg-pink-100"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-lg" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/m4nasi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-blue-400 transition-colors duration-200
                   px-2 py-1 rounded-sm
                   hover:bg-blue-100"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-lg" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/m4nasi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-900 transition-colors duration-200
                   px-2 py-1 rounded-sm
                   hover:bg-gray-300"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} className="text-lg" />
      </a>
    </li>
    <li>
      <a
        href="https://linkedin.com/in/m4nasi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-blue-600 transition-colors duration-200
                    px-2 py-1 rounded-sm
                   hover:bg-blue-200"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
      </a>
    </li>
  </ul>
</div>
    </nav>
  );
};

export default RetroNavBar;