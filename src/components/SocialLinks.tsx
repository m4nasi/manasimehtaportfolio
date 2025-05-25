import React from 'react';

// --- Placeholder for your SVG imports ---
// In a real project, you'd import these. Example:
// import { ReactComponent as GitHubLogo } from './assets/github-logo.svg';
// import { ReactComponent as LinkedInLogo } from './assets/linkedin-logo.svg';

// For demonstration, using inline SVG.
// Replace the 'svg' content with your actual logo data.

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <h2 className="text-4xl font-extrabold text-teal-700 mb-10"> */}
      <h2 className="mb-10 text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">
        Connect with Me
      </h2>
      <ul className="flex space-x-12"> {/* Increased spacing for logos */}
        <li>
          <a
            href="https://github.com/m4nasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group
                       text-gray-700 hover:text-teal-600 transition-transform transform hover:scale-110 duration-200
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="GitHub Profile"
          >
            {/* GitHub Logo (replace with your actual SVG or img) */}
            {/* Note: GitHub logo is usually dark, so we'll make it dark gray and lighten/teal it on hover */}
            <svg
              className="w-15 h-15 fill-current text-gray-700 group-hover:text-teal-600 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.294-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-xl font-semibold mt-3 group-hover:text-teal-700 transition-colors duration-200">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/manasi-mehta11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group
                       text-gray-700 hover:text-teal-600 transition-transform transform hover:scale-110 duration-200
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="LinkedIn Profile"
          >
            {/* LinkedIn Logo (replace with your actual SVG or img) */}
            {/* Note: LinkedIn's official color is blue, but we're adapting to teal/white */}
            <svg
              className="w-15 h-15 fill-current text-gray-700 group-hover:text-teal-600 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-xl font-semibold mt-3 group-hover:text-teal-700 transition-colors duration-200">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;