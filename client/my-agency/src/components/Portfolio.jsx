import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that helps users manage tasks efficiently.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project1',
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform with a user-friendly interface.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project2',
    bgColor: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile app that connects people with similar interests.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project3',
    bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A fitness tracking app that helps users stay healthy.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project4',
    bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A social media platform for content creators to share and monetize their work.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project5',
    bgColor: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A recipe-sharing app with community-driven features.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project6',
    bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600',
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="p-8 bg-gray-100 h-auto">
    <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {displayedProjects.map((project) => (
        <div
          key={project.id}
          className={`relative group overflow-hidden rounded-xl shadow-xl transition-transform duration-300 ${project.bgColor} h-auto`}
        >
          {/* Image Section */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-700 transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  
    {/* Show More / Less Button with a custom color and background */}
    <div className="text-center mt-8">
      <button
        onClick={toggleShowMore}
 className="px-6 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition-colors duration-200 shadow-md"
>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  </div>
  
  );
};

export default Portfolio;
