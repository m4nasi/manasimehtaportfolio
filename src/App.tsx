import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoBox from './components/BentoBox';
import NotFoundPage from './components/NotFoundPage';
import Loader from './components/Loader';
import PhotographyStudioBento from './components/PhotographyStudioBento';
import ChessGameFull from './components/ChessGameBento'; // Assuming this is the full chess game component
import Particles from 'react-tsparticles';
// import CustomCursor from './components/CustomCursor'; // Keep commented if not used

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // If you uncomment CommandPalette later, you'll need to re-add isPaletteOpen state and its setter here.
  // const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const minimumLoadTime = 2000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    // If you uncomment CommandPalette later, you'll need its keyboard listener here:
    // const handleKeyDown = (event: KeyboardEvent) => { /* ... */ };
    // window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      // If you uncomment CommandPalette, ensure you clean up its listener:
      // window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    // Outer wrapper for the entire application, providing the positioning context for Particles
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Particles Background - positioned absolutely to fill the screen, behind all content */}
      <Particles
        className="absolute inset-0 z-0" // Stretches across the entire screen, with a low z-index
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent", // This is key! It allows the underlying HTML/body background to show through.
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
                  opacity: 1, // Make connections more visible during grab
                },
              },
              bubble: { // Keeping default bubble config, though not active for hover here
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 8,
              },
              push: { // Keeping default push config
                quantity: 4,
              },
              repulse: { // Configuration for repulse mode
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // Using colors from your blue-green palette for the particles themselves
              value: ["#00FFFF", "#20B2AA", "#66CDAA", "#06B6D4"],
            },
            links: {
              color: "#99f6e4",
              distance: 150, // How far particles link to each other
              enable: true,
              opacity: 0.3, // Subtle opacity for passive lines
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.5, // Slow, gentle movement
              outModes: {
                default: "bounce",
              },
              random: false,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800, // Density of particles
              },
              value: 80, // Total number of particles
            },
            opacity: {
              value: 0.5, // Subtle opacity for particles
            },
            shape: {
              type: "circle", // Simple circular particles
            },
            size: {
              value: { min: 1, max: 3 }, // Small varying sizes
            },
          },
          detectRetina: true,
        }}
      />

      {/* Loader component - appears above the particles */}
      {isLoading && <Loader />}

      {/* Main content of your application (BentoBox, Routes, etc.) */}
      {/* This div must be positioned relative and have a higher z-index to appear above particles. */}
      {/* The 'pt-16' ensures content starts below the fixed RetroNavBar. */}
      {/* 'cursor-none' should be here if CustomCursor is uncommented. */}
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
      {/* If you uncomment CommandPalette, also uncomment its state and listener in useEffect */}
      {/* {!isLoading && isPaletteOpen && <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />} */}
    </div>
  );
};

export default App;