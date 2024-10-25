import React from 'react';

const TeamMetrics = () => {
  const metricsData = [
    { title: 'Team Members', value: '10+', icon: '👥' },
    { title: 'Delivery Rate', value: '100%', icon: '✅' },
    { title: 'Customer Satisfaction', value: '99%', icon: '😊' },
    { title: 'Projects Completed', value: '20+', icon: '📈' },
    { title: 'On-Time Delivery', value: '100%', icon: '⏰' },
    { title: 'Years of Experience', value: '5+', icon: '🛠️' },
    { title: 'Happy Clients', value: '150+', icon: '🎉' },
    { title: 'Support Hours', value: '24/7', icon: '🕒' },
    { title: 'Technologies Used', value: '15+', icon: '💻' },
    { title: 'Award-Winning Projects', value: '3+', icon: '🏆' },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Team & Performance</h2>
    <div className="flex flex-wrap justify-center space-x-4 px-4 md:px-8">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`bg-white shadow-lg rounded-lg p-6 m-4 w-60 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-500`}
        >
          <div className="text-6xl mb-4 text-blue-600 transition-colors duration-300 hover:text-blue-800">{metric.icon}</div>
          <h3 className="text-4xl font-semibold text-gray-800 mb-2">{metric.value}</h3>
          <p className="text-lg font-medium text-gray-600">{metric.title}</p>
        </div>
      ))}
    </div>
  </section>
  

  );
};

export default TeamMetrics;
