import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white animate-bounce">VisualAura</h1>
        <p className="text-xl text-white mt-4">Loading, please wait...</p>
        <div className="mt-4">
          <div className="loader"></div>
        </div>
      </div>
      <style jsx>{`
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .loader {
          margin: 20px auto;
          border: 8px solid rgba(255, 255, 255, 0.3);
          border-top: 8px solid white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        /* Additional styles */
        .loader {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .animate-bounce {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
       
        
      `}</style>
    </div>
  );
};

export default Loading;
