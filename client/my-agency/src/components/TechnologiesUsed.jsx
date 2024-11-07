import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiFirebase, SiGoogleanalytics, SiRedux, SiNextdotjs, SiTypescript, SiDjango, SiPostgresql, SiFlutter } from 'react-icons/si';
import { GrWordpress } from 'react-icons/gr';
import { DiJqueryLogo, DiRuby, DiPhp } from 'react-icons/di';

const technologies = [
  { icon: <FaReact className="text-blue-500" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  { icon: <SiExpress className="text-gray-800" />, name: 'Express' },
  { icon: <SiVite className="text-orange-400" />, name: 'Vite' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'TailwindCSS' },
  { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-400" />, name: 'CSS3' },
  { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
  { icon: <GrWordpress className="text-blue-600" />, name: 'WordPress' },
  { icon: <DiJqueryLogo className="text-blue-400" />, name: 'jQuery' },
  { icon: <SiRedux className="text-purple-500" />, name: 'Redux' },
  { icon: <SiNextdotjs className="text-black" />, name: 'Next.js' },
  { icon: <SiTypescript className="text-blue-400" />, name: 'TypeScript' },
  { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
  { icon: <FaAws className="text-orange-500" />, name: 'AWS' },
  { icon: <SiGoogleanalytics className="text-green-400" />, name: 'Google Analytics' },
  { icon: <SiDjango className="text-green-600" />, name: 'Django' },
  { icon: <SiPostgresql className="text-blue-400" />, name: 'PostgreSQL' },
  { icon: <SiFlutter className="text-blue-300" />, name: 'Flutter' },
  { icon: <DiRuby className="text-red-500" />, name: 'Ruby' },
  { icon: <DiPhp className="text-blue-600" />, name: 'PHP' },
];

const TechnologiesUsed = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
        Our Technology Stack
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {(showAll ? technologies : technologies.slice(0, 12)).map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-md p-4 flex flex-col items-center justify-center shadow-md transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            style={{
              perspective: '400px',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
              transform: 'rotateY(0deg) rotateX(0deg)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateX(8deg) rotateY(8deg) translateY(-3px)';
              e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0px 3px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={toggleShowAll}
          className="px-6 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition-colors duration-200 shadow-md"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
