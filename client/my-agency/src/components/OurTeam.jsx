import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    description: 'Leading the company with innovation and passion.',
    imageUrl: '(link unavailable)',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Expert in software development and cloud solutions.',
    imageUrl: '(link unavailable)',
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director',
    description: 'Driving growth through creative strategies.',
    imageUrl: '(link unavailable)',
  },
];

const OurTeam = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-xs p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-indigo-300 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-2">
              {member.name}
            </h3>
            <p className="text-center text-indigo-600 font-medium">{member.role}</p>
            <p className="text-center text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
