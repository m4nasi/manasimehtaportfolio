import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for routing

const NotFoundPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-center px-4 overflow-hidden">
      {/* Subtle Background Animation/Texture (Optional) */}
      {/* You'll need to add the @keyframes `bg-pan` to your global CSS (e.g., src/index.css) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-bg-pan"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto py-16">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 animate-pulse">
          404
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Oops! Page Not Found.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          It seems you've ventured into uncharted digital territory. The page you're looking for might have been moved, deleted, or never existed. Don't worry, we'll get you back on track!
        </p>
        <Link
          to="/" // Link back to your homepage
          className="inline-flex items-center px-8 py-3 rounded-full text-lg font-medium text-white
                     bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600
                     transition-all duration-300 transform hover:scale-105 shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-75"
        >
          Go Back Home
          <span className="ml-2 text-xl" role="img" aria-label="home emoji">🏠</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;