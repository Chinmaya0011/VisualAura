import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    description: 'Leading the company with innovation and passion.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Expert in software development and cloud solutions.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director',
    description: 'Driving growth through creative strategies.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-xl transform hover:scale-105 hover:rotate-3d transition-all duration-500 hover:shadow-2xl hover:bg-opacity-90"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-xl transform transition-all duration-300"
              />
            </div>

            {/* Member Name */}
            <h3 className="text-xl font-semibold text-center text-gray-900 mt-2">
              {member.name}
            </h3>

            {/* Member Role */}
            <p className="text-center text-gray-600 text-lg mt-1">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-center text-gray-500 mt-4">{member.description}</p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black transition duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
