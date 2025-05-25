import React from 'react';

const Loader: React.FC = () => {
  return (
    // Fixed full-screen overlay with a high z-index to cover everything
    // Uses your background gradient and transitions out smoothly
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 transition-opacity duration-700">
      <div className="flex flex-col items-center">
        {/* Modern Spinner: Teal border, transparent top, spins */}
        <div className="w-20 h-20 border-4 border-t-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading Text with Pulse Animation */}
        <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          Loading Portfolio...
        </p>
        
        {/* Optional: Add your name/logo here for a personal touch */}
        {/* <h1 className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-700">Manasi</h1> */}
      </div>
    </div>
  );
};

export default Loader;