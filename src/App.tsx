import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoBox from './components/BentoBox';
import NotFoundPage from './components/NotFoundPage';
import Loader from './components/Loader';
// import CustomCursor from './components/CustomCursor'; // Import CustomCursor

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 2000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      {isLoading && <Loader />}

      {/* Apply 'cursor-none' to hide the default cursor on the entire body */}
      {/* Also ensure the main content is conditionally rendered and transitions */}
      <div className={`${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}>
        {/* <CustomCursor /> Render your custom cursor here */}
        <Router>
          <Routes>
            <Route path="/" element={<BentoBox />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;