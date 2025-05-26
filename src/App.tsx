import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoBox from './components/BentoBox';
import NotFoundPage from './components/NotFoundPage';
import Loader from './components/Loader';
import PhotographyStudioBento from './components/PhotographyStudioBento';
import ChessGameFull from './components/ChessGameBento';
import Particles from 'react-tsparticles';
// import CustomCursor from './components/CustomCursor';

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
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent", // Transparent background to blend with the page
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
              speed: 0.5,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Loader */}
      {isLoading && <Loader />}

      {/* Main Content */}
      <div
        className={`${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-opacity duration-500 relative z-10`}
        
      >
        {/* <CustomCursor /> */}
        <Router>
          <Routes>
            <Route path="/" element={<BentoBox />} />
            <Route path="/studio" element={<PhotographyStudioBento />} />
            <Route path="/chess" element={<ChessGameFull />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;