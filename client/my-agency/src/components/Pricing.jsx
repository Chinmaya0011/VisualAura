import React from 'react';

const Pricing = () => {
  const pricingData = [
    {
      service: 'Web Design',
      price: '₹15,000',
      startingPrice: '₹9,999',
      description: 'Creating beautiful and user-friendly websites tailored to your brand and audience.',
      features: [
        'Custom Design',
        'Responsive Layout',
        'User-Friendly Navigation',
        'SEO Optimized',
        '1 Year Maintenance',
      ],
    },
    {
      service: 'SEO Optimization',
      price: '₹10,000',
      startingPrice: '₹5,999',
      description: 'Improving your website’s visibility on search engines to attract more organic traffic.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Monthly Reporting',
        'Backlink Strategy',
      ],
    },
    {
      service: 'Digital Marketing',
      price: '₹12,000',
      startingPrice: '₹6,999',
      description: 'Crafting strategic marketing campaigns that reach your target audience effectively.',
      features: [
        'Social Media Strategy',
        'Content Marketing',
        'Email Campaigns',
        'Ad Management',
        'Performance Analytics',
      ],
    },
    {
      service: 'App Development',
      price: '₹25,000',
      startingPrice: '₹15,000',
      description: 'Building responsive and functional mobile applications for all platforms.',
      features: [
        'iOS and Android Development',
        'User-Centric Design',
        'API Integration',
        'Testing and QA',
        '1 Year Support',
      ],
    },
    {
      service: 'User Experience Design',
      price: '₹10,000',
      startingPrice: '₹4,999',
      description: 'Enhancing user satisfaction by improving usability and accessibility.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
        'Feedback Iteration',
      ],
    },
    {
      service: 'Analytics & Reporting',
      price: '₹8,000',
      startingPrice: '₹3,999',
      description: 'Providing insights and data analysis to optimize your business strategy.',
      features: [
        'Data Tracking Setup',
        'Monthly Performance Reports',
        'Goal Tracking',
        'User Behavior Analysis',
        'Recommendation Reports',
      ],
    },
    {
      service: 'Content Creation',
      price: '₹5,000',
      startingPrice: '₹2,999',
      description: 'Producing high-quality content that resonates with your audience.',
      features: [
        'Blog Posts',
        'Social Media Content',
        'SEO-Focused Articles',
        'Editing and Proofreading',
        'Content Strategy Development',
      ],
    },
    {
      service: 'Market Research',
      price: '₹7,000',
      startingPrice: '₹4,000',
      description: 'Conducting thorough research to understand market trends and customer behavior.',
      features: [
        'Competitor Analysis',
        'Customer Surveys',
        'Market Trend Reports',
        'Focus Groups',
        'Data Analysis',
      ],
    },
    {
      service: 'AI Chatbot',
      price: '₹20,000',
      startingPrice: '₹12,000',
      description: 'Developing intelligent chatbots that enhance customer interactions and automate responses.',
      features: [
        '24/7 Availability',
        'Multi-Platform Integration',
        'Natural Language Processing',
        'Customizable Responses',
        'Performance Metrics',
      ],
    },
    {
      service: 'AI-based Software Development',
      price: '₹30,000',
      startingPrice: '₹18,000',
      description: 'Creating software solutions powered by AI to optimize processes and enhance efficiency.',
      features: [
        'AI Model Development',
        'Data Analysis and Predictions',
        'Custom Software Solutions',
        'Testing and Iteration',
        'Ongoing Support',
      ],
    },
    {
      service: 'E-commerce Development',
      price: '₹25,000',
      startingPrice: '₹15,000',
      description: 'Building online stores with secure payment systems and user-friendly interfaces.',
      features: [
        'Custom E-commerce Solutions',
        'Secure Payment Integration',
        'User-Friendly Checkout',
        'Inventory Management',
        'SEO Optimization',
      ],
    },
    {
      service: 'Lead Generation',
      price: '₹10,000',
      startingPrice: '₹5,000',
      description: 'Creating strategies to attract and convert potential customers.',
      features: [
        'Target Audience Identification',
        'Landing Page Development',
        'Email Campaigns',
        'CRM Integration',
        'Performance Tracking',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Pricing</h2>
      <div className="overflow-hidden px-4 md:px-8">
        <div className="flex space-x-8 pb-4 overflow-x-auto">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg p-6 w-72 h-[500px] flex-shrink-0 transition-transform transform hover:shadow-lg border-l-8 border-blue-500 overflow-hidden"
            >
              {/* Service Title */}
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 text-center h-10">
                {item.service}
              </h3>

              {/* Price */}
               <p className="text-lg font-medium text-gray-500 mb-2">
                <p className="text-3xl font-bold text-orange-500 mb-1">
                {item.startingPrice}
              </p>
              </p>
              <span className="line-through text-red-500">{item.price}</span>

            

              {/* Description */}
              <p className="mb-4 text-gray-600 h-20 overflow-hidden">
                {item.description}
              </p>

              {/* Features List */}
              <h4 className="text-lg font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-6 text-left max-h-32 overflow-y-auto">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">{feature}</li>
                ))}
              </ul>

              {/* Choose Plan Button */}
              <div className="flex justify-center">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 w-full">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
