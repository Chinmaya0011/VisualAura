import React from 'react';

const teamMembers = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'John Doe',
    role: 'CTO',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-gray-900 text-3xl font-semibold tracking-tight sm:text-4xl">Meet Our Leadership</h2>
          <p className="mt-6 text-lg text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={member.imageUrl} alt={member.name} />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-indigo-600">{member.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
