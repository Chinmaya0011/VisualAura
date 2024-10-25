import React, { useState } from 'react';
import { FaCode, FaSearch, FaBullhorn, FaMobileAlt, FaUsers, FaChartLine, FaShieldAlt, FaCloud, FaFileAlt, FaChartPie, FaComments, FaHandsHelping, FaCog, FaTools, FaSignInAlt, FaClipboardList, FaMoneyBillAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaCode className="text-white text-5xl mb-4" />,
    title: 'Web Design',
    description: 'Creating beautiful and user-friendly websites tailored to your brand and audience.',
    bgColor: 'bg-gradient-to-br from-green-400 to-blue-500',
  },
  {
    id: 2,
    icon: <FaSearch className="text-white text-5xl mb-4" />,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines to attract more organic traffic.',
    bgColor: 'bg-gradient-to-br from-purple-400 to-pink-500',
  },
  {
    id: 3,
    icon: <FaBullhorn className="text-white text-5xl mb-4" />,
    title: 'Digital Marketing',
    description: 'Crafting strategic marketing campaigns that reach your target audience effectively.',
    bgColor: 'bg-gradient-to-br from-orange-400 to-yellow-500',
  },
  {
    id: 4,
    icon: <FaMobileAlt className="text-white text-5xl mb-4" />,
    title: 'App Development',
    description: 'Building responsive and functional mobile applications for all platforms.',
    bgColor: 'bg-gradient-to-br from-red-400 to-teal-500',
  },
  {
    id: 5,
    icon: <FaUsers className="text-white text-5xl mb-4" />,
    title: 'User Experience Design',
    description: 'Enhancing user satisfaction by improving usability and accessibility.',
    bgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500',
  },
  {
    id: 6,
    icon: <FaChartLine className="text-white text-5xl mb-4" />,
    title: 'Analytics & Reporting',
    description: 'Providing insights and data analysis to optimize your business strategy.',
    bgColor: 'bg-gradient-to-br from-teal-400 to-green-500',
  },
  {
    id: 7,
    icon: <FaShieldAlt className="text-white text-5xl mb-4" />,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with robust security measures and audits.',
    bgColor: 'bg-gradient-to-br from-red-500 to-yellow-600',
  },
  {
    id: 8,
    icon: <FaCloud className="text-white text-5xl mb-4" />,
    title: 'Cloud Solutions',
    description: 'Implementing cloud services for better scalability and performance.',
    bgColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
  {
    id: 9,
    icon: <FaFileAlt className="text-white text-5xl mb-4" />,
    title: 'Content Creation',
    description: 'Producing high-quality content that resonates with your audience.',
    bgColor: 'bg-gradient-to-br from-green-500 to-blue-600',
  },
  {
    id: 10,
    icon: <FaChartPie className="text-white text-5xl mb-4" />,
    title: 'Market Research',
    description: 'Conducting thorough research to understand market trends and customer behavior.',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-600',
  },
  {
    id: 11,
    icon: <FaComments className="text-white text-5xl mb-4" />,
    title: 'Customer Support',
    description: 'Providing exceptional support to enhance customer satisfaction.',
    bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
  },
  {
    id: 12,
    icon: <FaHandsHelping className="text-white text-5xl mb-4" />,
    title: 'Consulting Services',
    description: 'Offering expert advice to help you achieve your business goals.',
    bgColor: 'bg-gradient-to-br from-red-400 to-teal-600',
  },
  {
    id: 13,
    icon: <FaCog className="text-white text-5xl mb-4" />,
    title: 'Technical Support',
    description: 'Assisting with technical issues to ensure smooth operations.',
    bgColor: 'bg-gradient-to-br from-green-400 to-yellow-500',
  },
  {
    id: 14,
    icon: <FaTools className="text-white text-5xl mb-4" />,
    title: 'Software Maintenance',
    description: 'Regular updates and fixes to keep your software running efficiently.',
    bgColor: 'bg-gradient-to-br from-purple-400 to-indigo-500',
  },
  {
    id: 15,
    icon: <FaSignInAlt className="text-white text-5xl mb-4" />,
    title: 'E-commerce Development',
    description: 'Building online stores with secure payment systems and user-friendly interfaces.',
    bgColor: 'bg-gradient-to-br from-orange-400 to-red-500',
  },
  {
    id: 16,
    icon: <FaClipboardList className="text-white text-5xl mb-4" />,
    title: 'Lead Generation',
    description: 'Creating strategies to attract and convert potential customers.',
    bgColor: 'bg-gradient-to-br from-teal-400 to-blue-500',
  },
  {
    id: 17,
    icon: <FaMoneyBillAlt className="text-white text-5xl mb-4" />,
    title: 'Financial Consulting',
    description: 'Advising on financial strategies to optimize business profitability.',
    bgColor: 'bg-gradient-to-br from-green-500 to-yellow-600',
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-gray-50 p-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.slice(0, showAll ? servicesData.length : 8).map((service) => (
          <div
            key={service.id}
            className={`rounded-lg border border-gray-300 p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl shadow-lg ${service.bgColor} text-gray-100`}
          >
            <div className="rounded-full p-4 inline-block mb-4 bg-white bg-opacity-20">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleShowAll}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          {showAll ? (
            <>
              <FaAngleUp className="mr-2" /> Show Less
            </>
          ) : (
            <>
              <FaAngleDown className="mr-2" /> Show All
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Services;
