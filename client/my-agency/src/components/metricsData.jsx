import React, { useState, useEffect, useRef } from 'react';

const TeamMetrics = () => {
  const [counts, setCounts] = useState({
    teamMembers: 0,
    deliveryRate: 0,
    customerSatisfaction: 0,
    projectsCompleted: 0,
    onTimeDelivery: 0,
    yearsOfExperience: 0,
    happyClients: 0,
    supportHours: 0,
    technologiesUsed: 0,
    awardWinningProjects: 0,
  });

  const metricsData = [
    { title: 'Team Members', value: 10, icon: '👥' },
    { title: 'Delivery Rate', value: 100, icon: '✅' },
    { title: 'Customer Satisfaction', value: 99, icon: '😊' },
    { title: 'Projects Completed', value: 20, icon: '📈' },
    { title: 'On-Time Delivery', value: 100, icon: '⏰' },
    { title: 'Years of Experience', value: 5, icon: '🛠️' },
    { title: 'Happy Clients', value: 150, icon: '🎉' },
    { title: 'Support Hours', value: 24, icon: '🕒' },
    { title: 'Technologies Used', value: 15, icon: '💻' },
    { title: 'Award-Winning Projects', value: 3, icon: '🏆' },
  ];

  // Using useRef to ensure the counting only starts once
  const isCountingRef = useRef(false);

  // Count-up logic for each metric (3 seconds duration)
  useEffect(() => {
    // Return early if counting has already happened
    if (isCountingRef.current) return;

    isCountingRef.current = true; // Mark counting as started

    const duration = 3000; // Duration in milliseconds (3 seconds)

    const incrementCount = (metricName, targetValue) => {
      let currentCount = 0;
      const incrementStep = targetValue / (duration / 50); // Calculate the increment step
      const intervalId = setInterval(() => {
        currentCount += incrementStep; // Increment by the calculated step
        if (currentCount >= targetValue) {
          currentCount = targetValue; // Ensure it doesn't exceed the target value
          clearInterval(intervalId); // Stop the interval once the target is reached
        }
        setCounts((prevCounts) => ({
          ...prevCounts,
          [metricName]: Math.round(currentCount), // Update the count (rounded)
        }));
      }, 50); // Update every 50 milliseconds
    };

    // Start counting for each metric
    metricsData.forEach((metric, index) => {
      const metricName = Object.keys(counts)[index];
      incrementCount(metricName, metric.value);
    });
  }, [counts]); // Add `counts` in dependency array to ensure effect triggers after count is updated

  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Team & Performance</h2>
      <div className="flex overflow-x-auto gap-4 px-4 md:px-6 hide-scrollbar">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-full shadow-sm p-4 w-32 h-32 flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-md hover:border-t-4 hover:border-blue-600 border-t-4 border-transparent"
          >
            <div className="text-2xl mb-2 text-blue-600 transition-colors duration-300 hover:text-blue-800">
              {metric.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {counts[Object.keys(counts)[index]]}+
            </h3>
            <p className="text-xs font-medium text-gray-600">{metric.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMetrics;
