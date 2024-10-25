import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiGoogleanalytics } from 'react-icons/si';
import { GrWordpress } from 'react-icons/gr'; // WordPress icon
import { DiJqueryLogo } from 'react-icons/di'; // jQuery icon
import { SiRedux } from 'react-icons/si'; // Redux icon
import { SiNextdotjs } from 'react-icons/si'; // Next.js icon
import { SiTypescript } from 'react-icons/si'; // TypeScript icon
import { SiDjango } from 'react-icons/si'; // Django icon
import { SiPostgresql } from 'react-icons/si'; // PostgreSQL icon
import { SiFlutter } from 'react-icons/si'; // Flutter icon
import { DiRuby } from 'react-icons/di'; // Ruby icon
import { DiPhp } from 'react-icons/di'; // PHP icon

const technologies = [
  { icon: <FaReact className="text-blue-600" /> },
  { icon: <FaNodeJs className="text-green-600" /> },
  { icon: <SiExpress className="text: #000000" /> },
  { icon: <SiVite className="text-orange-600" /> },
  { icon: <SiTailwindcss className="text-cyan-400" /> },
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-500" /> },
  { icon: <GrWordpress className="text-blue-800" /> }, // WordPress icon
  { icon: <DiJqueryLogo className="text-blue-600" /> }, // jQuery icon
  { icon: <SiRedux className="text-purple-600" /> }, // Redux icon
  { icon: <SiNextdotjs className="text-black" /> }, // Next.js icon
  { icon: <SiTypescript className="text-blue-600" /> }, // TypeScript icon
  { icon: <SiFirebase className="text-yellow-500" /> },
  { icon: <FaAws className="text-orange-600" /> },
  { icon: <SiGoogleanalytics className="text-green-500" /> },
  { icon: <SiDjango className="text-green-700" /> }, // Django icon
  { icon: <SiPostgresql className="text-blue-600" /> }, // PostgreSQL icon
  { icon: <SiFlutter className="text-blue-400" /> }, // Flutter icon
  { icon: <DiRuby className="text-red-600" /> }, // Ruby icon
  { icon: <DiPhp className="text-blue-700" /> }, // PHP icon
];

const TechnologiesUsed = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Technologies We Use</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((item, index) => (
          <div key={index} className="flex justify-center items-center h-12 w-12 lg:h-32 lg:w-32 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 p-4">
            <div className="text-3xl lg:text-5xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesUsed;
