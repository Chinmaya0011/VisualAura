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
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 px-8">
      <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide drop-shadow-lg">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-xs p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:bg-opacity-100"
          >
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-indigo-400 shadow-md"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            {/* Member Name */}
            <h3 className="text-2xl font-semibold text-center text-gray-900 mt-2 tracking-wide">
              {member.name}
            </h3>

            {/* Member Role */}
            <p className="text-center text-indigo-600 font-medium text-lg mt-1">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-center text-gray-700 mt-4 leading-relaxed">
              {member.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
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
