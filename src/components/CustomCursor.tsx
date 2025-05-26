import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false); // State to detect if hovering over clickable elements

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define common clickable HTML tags and check computed cursor style
      const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LI']; // Added LI for list items often being clickable
      
      let foundClickable = false;
      let currentElement: HTMLElement | null = target;
      // Traverse up the DOM tree to see if any parent is clickable
      while (currentElement && currentElement !== document.body) {
        if (clickableTags.includes(currentElement.tagName) || window.getComputedStyle(currentElement).cursor === 'pointer') {
          foundClickable = true;
          break;
        }
        currentElement = currentElement.parentElement;
      }
      setIsPointer(foundClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    // This is now a single div for the green circle cursor
    <div
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-100 ease-out z-[10000]
                  ${isPointer ? 'w-5 h-5 bg-green-400 scale-125' : 'w-3 h-3 bg-green-600'}`} // Adjusted sizes and green shades
      style={{ transform: `translate(${position.x}px, ${position.y}px) ${isPointer ? 'scale(1.25)' : 'scale(1)'}` }}
    ></div>
  );
};

export default CustomCursor;