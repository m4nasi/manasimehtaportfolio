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
      const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LI']; // Added LI as list items are often clickable
    //   const hasPointerCursor = window.getComputedStyle(target).cursor === 'pointer';

      // Check if the target itself or any of its parents are clickable
      let currentElement: HTMLElement | null = target;
      let foundClickable = false;
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring/Halo */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-150 ease-out z-[9999]
                    ${isPointer ? 'w-10 h-10 border-2 border-cyan-400 opacity-90 scale-125' : 'w-5 h-5 border-2 border-teal-300 opacity-70'}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px) ${isPointer ? 'scale(1.25)' : 'scale(1)'}` }}
      ></div>
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-150 ease-out z-[10000]
                    ${isPointer ? 'w-2 h-2 bg-teal-300' : 'w-1 h-1 bg-cyan-500'}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </>
  );
};

export default CustomCursor;