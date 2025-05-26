import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoBox from './components/BentoBox';
import NotFoundPage from './components/NotFoundPage';
import Loader from './components/Loader';
import PhotographyStudioBento from './components/PhotographyStudioBento';
import ChessGameFull from './components/ChessGameBento'; // Assuming this is the full chess game component
// import CustomCursor from './components/CustomCursor'; // Keep commented if not used

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 2000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    // Outer wrapper for the entire application, providing the positioning context for Particles
    <div className="relative min-h-screen w-screen overflow-hidden">
      {isLoading && <Loader />}
      <div className={`${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500 relative z-10 pt-16`}>
        {/* Render Custom Cursor if you want it (needs 'cursor-none' on parent) */}
        {/* <CustomCursor /> */} 
        
        <Router>
          <Routes>
            <Route path="/" element={<BentoBox />} />
            {/* Dedicated 3D Studio Page (using the full interactive version here) */}
            <Route path="/studio" element={<PhotographyStudioBento />} /> 
            {/* Dedicated Full Chess Game Page (using the full interactive version here) */}
            <Route path="/chess" element={<ChessGameFull />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>

      {/* Command Palette - appears on top of everything else */}
      {/* {!isLoading && isPaletteOpen && <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />} */}
    </div>
  );
};

export default App;