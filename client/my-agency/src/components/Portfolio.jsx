import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that helps users manage tasks efficiently.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project1',
    bgColor: 'bg-blue-200',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform with a user-friendly interface.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project2',
    bgColor: 'bg-green-200',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile app that connects people with similar interests.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project3',
    bgColor: 'bg-yellow-200',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A fitness tracking app that helps users stay healthy.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project4',
    bgColor: 'bg-pink-200',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile app that connects people with similar interests.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project3',
    bgColor: 'bg-yellow-200',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A fitness tracking app that helps users stay healthy.',
    imageUrl: 'https://via.placeholder.com/300x200',
    projectUrl: 'https://example.com/project4',
    bgColor: 'bg-pink-200',
  },
];

const Portfolio = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-4xl font-extrabold text-center text-black mb-12">
        My Portfolio
      </h2>
      <div className="flex overflow-x-auto hide-scrollbar">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`flex-shrink-0 w-72 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mr-4 ${project.bgColor}`}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
