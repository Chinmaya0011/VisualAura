import React, { useState } from 'react';
import serviceData from '../assets/services.json'; // Importing service data from JSON
import {
  FaDesktop, FaSearch, FaBullhorn, FaMobileAlt, FaUsers, FaChartLine, FaCloud, FaFileAlt, FaChartPie,
  FaComments, FaHandsHelping, FaCog, FaTools, FaSignInAlt, FaClipboardList, FaMoneyBillAlt, FaAngleDown,
  FaAngleUp, FaWordpress, FaShoppingCart, FaClipboard
} from 'react-icons/fa';

// Map string to React icon components
const iconMap = {
  FaDesktop: <FaDesktop />,
  FaSearch: <FaSearch />,
  FaBullhorn: <FaBullhorn />,
  FaMobileAlt: <FaMobileAlt />,
  FaUsers: <FaUsers />,
  FaChartLine: <FaChartLine />,
  FaCloud: <FaCloud />,
  FaFileAlt: <FaFileAlt />,
  FaChartPie: <FaChartPie />,
  FaComments: <FaComments />,
  FaHandsHelping: <FaHandsHelping />,
  FaCog: <FaCog />,
  FaTools: <FaTools />,
  FaSignInAlt: <FaSignInAlt />,
  FaClipboardList: <FaClipboardList />,
  FaMoneyBillAlt: <FaMoneyBillAlt />,
  FaAngleDown: <FaAngleDown />,
  FaAngleUp: <FaAngleUp />,
  FaWordpress: <FaWordpress />,
  FaShoppingCart: <FaShoppingCart />,
  FaClipboard: <FaClipboard />,
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Use a single background color for all services and add 3D shadow effects
  const services = serviceData.map((service, index) => ({
    id: index + 1,
    icon: iconMap[service.icon] || <FaDesktop />, // Dynamically get the icon from the map
    title: service.title,
    description: service.description,
    bgColor: 'bg-gray-800', // Single background color (dark gray)
    iconColor: `text-${['red', 'green', 'blue', 'yellow', 'purple'][index % 5]}-500`, // Different icon colors
  }));

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 px-6">
        {services.slice(0, showAll ? services.length : 8).map((service) => (
          <div
            key={service.id}
            className={`rounded-lg border border-gray-300 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg ${service.bgColor} text-gray-100`}
          >
            <div className="rounded-full p-6 inline-block mb-4 bg-white bg-opacity-30 shadow-xl">
              {/* Increase the icon size with 'text-4xl' or 'text-5xl' */}
              <div className={`text-4xl ${service.iconColor}`}>{service.icon}</div>
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
