// src/components/WhatsAppIcon.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons
import './WhatsAppIcon.css'; // Import the updated styles

const WhatsAppIcon = () => {
  // Create a pre-filled message for WhatsApp
  const message = "Hi! I would like to know more about your services. Please provide more details.";
  
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  return (
    <a 
      href={`https://wa.me/7077835119?text=${encodedMessage}`} // Pre-fill message
      className="whatsapp-icon" // Icon container
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="whatsapp-icon-container"> {/* Container for the icon */}
        <FaWhatsapp />
      </div>
      <span className="whatsapp-text">Need Help?</span> {/* Updated text */}
    </a>
  );
};

export default WhatsAppIcon;
