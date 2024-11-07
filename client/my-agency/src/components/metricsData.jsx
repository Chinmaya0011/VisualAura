import React, { useState, useEffect, useRef } from 'react';

const TeamMetrics = () => {
  const [showAll, setShowAll] = useState(false);
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

  const metricsToShow = showAll ? metricsData : metricsData.slice(0, 5);

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
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Team & Performance</h2>
      <div className="flex flex-wrap justify-center space-x-4 px-4 md:px-8">
        {metricsToShow.map((metric, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 m-4 w-60 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-500`}
          >
            <div className="text-6xl mb-4 text-blue-600 transition-colors duration-300 hover:text-blue-800">
              {metric.icon}
            </div>
            <h3 className="text-4xl font-semibold text-gray-800 mb-2">
              {counts[Object.keys(counts)[index]]}+
            </h3>
            <p className="text-lg font-medium text-gray-600">{metric.title}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 text-blue-600 font-semibold text-lg"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default TeamMetrics;
