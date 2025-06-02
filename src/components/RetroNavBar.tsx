import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import hamburger and close icons

const RetroNavBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-300 border-b-2 border-purple-500 font-mono text-gray-800 shadow-md p-2 flex items-center justify-between px-4">
      {/* System (Clock) */}
      <div className="flex-shrink-0 bg-purple-400 text-sm px-3 py-1
                      border-t-2 border-l-2 border-purple-500 border-r-2 border-b-2 border-white
                      shadow-inner rounded-md">
        {formatTime(time)}
      </div>

      {/* Hamburger Icon for Mobile (only visible on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded-md">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Main Navigation Links and Mobile-Only Social Media (hidden on desktop) */}
      {/* This whole block collapses into hamburger menu on mobile */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'}
        md:flex md:flex-grow md:justify-center md:space-x-4
        absolute md:static top-full left-0 w-full md:w-auto
        bg-teal-300 md:bg-transparent
        flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 py-2 md:py-0
        border-t-2 border-purple-500 md:border-none mt-2 md:mt-0
      `}>
        {/* Navigation Links */}
        <Link
          to="about-me-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="experience-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="education-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Education
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="leadership-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Leadership
        </Link>
        <Link
          to="tech-stack-section"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="px-3 py-1 text-sm transition-colors duration-100 ease-in-out
                    hover:bg-fuchsia-600 hover:text-white rounded-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Tech Stack
        </Link>

        {/* Social Media Links for Mobile (visible only inside open mobile menu) */}
        <div className="md:hidden flex-shrink-0 bg-pink-400 text-sm px-1 py-1 mt-4
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
      </div>

      {/* Social Media Links for Desktop (only visible on large screens, aligned to the right) */}
      <div className="hidden md:flex flex-shrink-0 bg-pink-400 text-sm px-1 py-1 ml-4
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