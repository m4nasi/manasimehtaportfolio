import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Used for navigating within your React app

interface CommandItem {
  id: string; // Unique identifier for the command
  name: string; // Display name of the command
  action: () => void; // Function to execute when the command is selected
  keywords?: string[]; // Optional: for more flexible searching (e.g., 'about', 'bio' for 'About Me')
  icon?: string; // Optional: Emoji or icon for visual flair
}

const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState(''); // State for the search input
  const [selectedIndex, setSelectedIndex] = useState(0); // State for keyboard navigation selection
  const inputRef = useRef<HTMLInputElement>(null); // Ref to focus the input field
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  // Define your list of commands/actions here.
  // The 'action' typically scrolls to a section or navigates to a route.
  const allCommands: CommandItem[] = [
    { id: 'home', name: 'Go to Home', action: () => { navigate('/'); onClose(); }, icon: '🏠' },
    { id: 'about', name: 'About Me', action: () => {
        // Scroll to the About Me section. IMPORTANT: Add an ID to your About Me section in BentoBox.tsx
        const el = document.getElementById('about-me-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '👤' },
    { id: 'experience', name: 'View Experience', action: () => {
        const el = document.getElementById('experience-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '💼' },
    { id: 'education', name: 'See Education', action: () => {
        const el = document.getElementById('education-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '🎓' },
    { id: 'projects', name: 'View Projects', action: () => {
        const el = document.getElementById('projects-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '🚀' },
    { id: 'tech-stack', name: 'See Tech Stack', action: () => {
        const el = document.getElementById('tech-stack-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '🛠️' },
    { id: 'contact', name: 'Contact Me', action: () => {
        const el = document.getElementById('contact-section');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/'); }
        onClose();
    }, icon: '📧' },
    {
      id: 'download-cv',
      name: 'Download CV',
      action: () => {
        window.open('/path/to/your/cv.pdf', '_blank'); // IMPORTANT: Replace with actual path to your CV
        onClose();
      },
      icon: '📄',
      keywords: ['resume', 'cv', 'download']
    },
    // Add more commands here as needed!
    // Example: { id: 'blog', name: 'Read Blog', action: () => navigate('/blog'), icon: '✍️' },
  ];

  // Filter commands based on the user's query
  const filteredCommands = query
    ? allCommands.filter(cmd =>
        cmd.name.toLowerCase().includes(query.toLowerCase()) ||
        (cmd.keywords && cmd.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())))
      )
    : allCommands;

  // Effect to manage focus and body scroll when palette opens/closes
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus(); // Focus the input when palette opens
      setQuery(''); // Reset query
      setSelectedIndex(0); // Reset selection
      document.body.style.overflow = 'hidden'; // Prevent main page scrolling while palette is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling when palette closes
    }
    // Cleanup function to ensure scrolling is restored if component unmounts while open
    return () => {
        document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault(); // Prevent page scroll
      setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent page scroll
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action(); // Execute selected command
      }
    } else if (e.key === 'Escape') {
      onClose(); // Close palette on Escape key
    }
  };

  // Handle click on a command item
  const handleItemClick = (action: () => void) => {
    action(); // Execute action
  };

  // Don't render the component if it's not open
  if (!isOpen) return null;

  return (
    // Overlay: Fixed, semi-transparent background, closes on click outside
    <div className="fixed inset-0 z-[9990] bg-black bg-opacity-70 flex items-start justify-center p-4 pt-[10vh]" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
        onClick={e => e.stopPropagation()} // Prevent clicks inside the palette from closing it
      >
        {/* Search Input Area */}
        <div className="flex items-center border-b border-gray-200 p-4">
          <span className="text-xl text-gray-500 mr-3">⌘K</span> {/* Visual cue for the shortcut */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            className="flex-grow bg-transparent outline-none text-lg text-gray-800 placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* List of Filtered Commands */}
        <ul className="max-h-[60vh] overflow-y-auto custom-scrollbar"> {/* Add custom-scrollbar for styling */}
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <li
                key={cmd.id}
                // Styling for selected item vs. non-selected
                className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150
                            ${index === selectedIndex ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-50 text-gray-700'}`}
                onClick={() => handleItemClick(cmd.action)}
              >
                {cmd.icon && <span className="mr-3 text-xl">{cmd.icon}</span>}
                <span className="font-medium">{cmd.name}</span>
              </li>
            ))
          ) : (
            <li className="px-4 py-8 text-center text-gray-500">No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;