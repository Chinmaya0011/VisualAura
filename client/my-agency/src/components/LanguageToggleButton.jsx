import React, { useRef } from 'react';
import { IoMdSwap } from 'react-icons/io'; // Import the icon
import Draggable from 'react-draggable'; // Import Draggable

const LanguageToggleButton = ({ language, toggleLanguage }) => {
  const draggableRef = useRef(null); // Create a ref for the draggable element

  const handleTouchStart = (e) => {
    e.stopPropagation(); // Prevent default touch behavior
    toggleLanguage(); // Call the toggle language function
  };

  return (
    <Draggable
      nodeRef={draggableRef} // Pass the ref here to avoid findDOMNode
      defaultPosition={{ x: 10, y: 10 }} // Initial position of the button
      bounds="body" // Ensures the button stays within the body
    >
      <div
        ref={draggableRef} // Attach the ref to the draggable div
        className="z-10 cursor-move" // Add the cursor style for drag action
        style={{
          position: 'absolute', // Absolute positioning for free movement
          padding: '0', // Remove padding
        }}
      >
        <button
          onClick={toggleLanguage} // Handle click for desktop
          onTouchStart={handleTouchStart} // Handle touch events for mobile
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
            zIndex: 9999, // Ensure it stays on top during dragging
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
