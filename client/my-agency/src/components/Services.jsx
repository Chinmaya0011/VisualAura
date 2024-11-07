import React, { useState } from 'react';
import {
  FaDesktop, FaSearch, FaBullhorn, FaMobileAlt, FaUsers, FaChartLine, FaCloud, FaFileAlt, FaChartPie,
  FaComments, FaHandsHelping, FaCog, FaTools, FaSignInAlt, FaClipboardList, FaMoneyBillAlt, FaAngleDown,
  FaAngleUp, FaWordpress, FaShoppingCart, FaClipboard
} from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaDesktop className="text-white text-5xl mb-4" />,
    title: 'Web Design',
    description: 'Creating beautiful and user-friendly websites tailored to your brand and audience.',
    bgColor: 'bg-gradient-to-br from-teal-500 to-blue-600',
  },
  {
    id: 2,
    icon: <FaTools className="text-white text-5xl mb-4" />,
    title: 'Web Development',
    description: 'Building fully functional, custom websites with optimized performance and speed.',
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    id: 3,
    icon: <FaWordpress className="text-white text-5xl mb-4" />,
    title: 'WordPress Development',
    description: 'Building custom WordPress websites with beautiful designs and advanced functionality.',
    bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
  },
  {
    id: 4,
    icon: <FaSearch className="text-white text-5xl mb-4" />,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines to attract more organic traffic.',
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    id: 5,
    icon: <FaBullhorn className="text-white text-5xl mb-4" />,
    title: 'Digital Marketing',
    description: 'Crafting strategic marketing campaigns that reach your target audience effectively.',
    bgColor: 'bg-gradient-to-br from-orange-500 to-yellow-600',
  },
  {
    id: 6,
    icon: <FaMobileAlt className="text-white text-5xl mb-4" />,
    title: 'App Development',
    description: 'Building responsive and functional mobile applications for all platforms.',
    bgColor: 'bg-gradient-to-br from-red-500 to-teal-600',
  },
  {
    id: 7,
    icon: <FaUsers className="text-white text-5xl mb-4" />,
    title: 'User Experience Design',
    description: 'Enhancing user satisfaction by improving usability and accessibility.',
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    id: 8,
    icon: <FaChartLine className="text-white text-5xl mb-4" />,
    title: 'Analytics & Reporting',
    description: 'Providing insights and data analysis to optimize your business strategy.',
    bgColor: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
  {
    id: 9,
    icon: <FaFileAlt className="text-white text-5xl mb-4" />,
    title: 'Content Creation',
    description: 'Producing high-quality content that resonates with your audience.',
    bgColor: 'bg-gradient-to-br from-green-600 to-blue-700',
  },
  {
    id: 10,
    icon: <FaChartPie className="text-white text-5xl mb-4" />,
    title: 'Market Research',
    description: 'Conducting thorough research to understand market trends and customer behavior.',
    bgColor: 'bg-gradient-to-br from-yellow-600 to-orange-700',
  },
  {
    id: 11,
    icon: <FaComments className="text-white text-5xl mb-4" />,
    title: 'AI Chatbot',
    description: 'Developing intelligent chatbots that enhance customer interactions and automate responses.',
    bgColor: 'bg-gradient-to-br from-purple-700 to-pink-700',
  },
  {
    id: 12,
    icon: <FaCog className="text-white text-5xl mb-4" />,
    title: 'AI-based Software Development',
    description: 'Creating software solutions powered by AI to optimize processes and enhance efficiency.',
    bgColor: 'bg-gradient-to-br from-green-500 to-yellow-600',
  },
  {
    id: 13,
    icon: <FaShoppingCart className="text-white text-5xl mb-4" />,
    title: 'E-commerce Development',
    description: 'Building online stores with secure payment systems and user-friendly interfaces.',
    bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
  },
  {
    id: 14,
    icon: <FaClipboard className="text-white text-5xl mb-4" />,
    title: 'Custom CMS Development',
    description: 'Building custom Content Management Systems tailored to your business needs.',
    bgColor: 'bg-gradient-to-br from-teal-600 to-blue-700',
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 px-6">
        {servicesData.slice(0, showAll ? servicesData.length : 8).map((service) => (
          <div
            key={service.id}
            className={`rounded-lg border border-gray-300 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg ${service.bgColor} text-gray-100`}
          >
            <div className="rounded-full p-4 inline-block mb-4 bg-white bg-opacity-30 shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
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

export default Services;
