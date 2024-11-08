import React, { useState } from 'react';
import { FaShareAlt, FaCheck, FaSpinner } from 'react-icons/fa';

const ShareBlogButton = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(<FaShareAlt />);

  const handleShare = () => {
    const currentUrl = window.location.href;

    setIcon(<FaSpinner className="animate-spin text-white" />); // Add animation and color change to spinner
    setLoading(true);

    setTimeout(() => {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          setCopied(true);
          setIcon(<FaCheck className="text-white" />); // Set check icon with color change

          setTimeout(() => {
            setCopied(false);
            setIcon(<FaShareAlt className="text-white" />); // Reset to share icon
            setLoading(false);
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          setLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition duration-300 flex items-center justify-center gap-3"
      >
        {/* Display text when URL is copied */}
        {copied && (
          <span className="absolute bottom-14 text-xs text-white font-semibold bg-black py-1 px-3 rounded-lg opacity-90 transition duration-300 transform translate-y-2">
            Copied URL
          </span>
        )}

        {/* Display the icon based on state */}
        <span className="mr-3">{icon}</span>

        {/* Add a text label */}
        {!loading && !copied && (
          <span className="text-white text-sm font-medium">Share Blog</span>
        )}
        {loading && !copied && (
          <span className="text-white text-sm font-medium">Sharing...</span>
        )}
      </button>
    </div>
  );
};

export default ShareBlogButton;
