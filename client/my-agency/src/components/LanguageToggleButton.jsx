import React from 'react';
import { IoMdSwap } from 'react-icons/io'; // Make sure this import is included at the top
import Draggable from 'react-draggable'; // Import Draggable from react-draggable

const LanguageToggleButton = ({ language, toggleLanguage }) => {
  return (
    <Draggable
      defaultPosition={{ x: 10, y: 10 }} // Initial position of the button
      bounds="body" // Allows the button to move within the body (entire page)
    >
      <div
        className="z-10 cursor-move" // Add the cursor style to indicate drag action
        style={{
          position: 'absolute', // Absolute positioning for free movement
          padding: '0', // Remove padding to avoid interference with positioning
        }}
      >
        <button
          onClick={toggleLanguage}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: adding a subtle shadow effect
            zIndex: 10, // Ensures the button stays on top during dragging
          }}
        >
          {language === 'english' ? 'English' : 'Hinglish'}
          <IoMdSwap className="ml-2 inline-block transform rotate-90" />
        </button>
      </div>
    </Draggable>
  );
};

export default LanguageToggleButton;
