import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiFirebase, SiGoogleanalytics, SiRedux, SiNextdotjs, SiTypescript, SiDjango, SiPostgresql, SiFlutter } from 'react-icons/si';
import { GrWordpress } from 'react-icons/gr';
import { DiJqueryLogo, DiRuby, DiPhp } from 'react-icons/di';

const technologies = [
  { icon: <FaReact className="text-blue-600" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiExpress className="text-black" />, name: 'Express' },
  { icon: <SiVite className="text-orange-500" />, name: 'Vite' },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'TailwindCSS' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <GrWordpress className="text-blue-800" />, name: 'WordPress' },
  { icon: <DiJqueryLogo className="text-blue-500" />, name: 'jQuery' },
  { icon: <SiRedux className="text-purple-600" />, name: 'Redux' },
  { icon: <SiNextdotjs className="text-black" />, name: 'Next.js' },
  { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript' },
  { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
  { icon: <FaAws className="text-orange-600" />, name: 'AWS' },
  { icon: <SiGoogleanalytics className="text-green-500" />, name: 'Google Analytics' },
  { icon: <SiDjango className="text-green-700" />, name: 'Django' },
  { icon: <SiPostgresql className="text-blue-600" />, name: 'PostgreSQL' },
  { icon: <SiFlutter className="text-blue-400" />, name: 'Flutter' },
  { icon: <DiRuby className="text-red-600" />, name: 'Ruby' },
  { icon: <DiPhp className="text-blue-700" />, name: 'PHP' },
];

const TechnologiesUsed = () => {
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  // Function to toggle between showing 12 and all technologies
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Technologies We Use
      </h2>

      {/* Grid of technologies */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {(showAll ? technologies : technologies.slice(0, 12)).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-base font-medium text-gray-700">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      <div className="text-center mt-6">
        <button
          onClick={toggleShowAll}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
