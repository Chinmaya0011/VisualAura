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
    <section className="py-24 bg-gradient-to-r from-indigo-100 via-blue-50 to-blue-100 text-center">
    <h2 className="text-5xl font-extrabold mb-16 text-gray-800 tracking-wider uppercase">
      Our Pricing Plans
    </h2>
  
    <div className="overflow-hidden px-6 md:px-20 lg:px-32">
      <div className="flex space-x-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-10 w-80 h-[600px] flex-shrink-0 transition-transform duration-500  hover:shadow-2xl border-l-[6px] border-blue-500 relative snap-center"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-green-500 text-white text-sm px-3 py-1 rounded-bl-lg shadow-md">
              Save {Math.round(((parseInt(item.price.replace('₹', '')) - parseInt(item.startingPrice.replace('₹', ''))) / parseInt(item.price.replace('₹', ''))) * 100)}%
            </div>
  
            {/* Service Title */}
            <h3 className="text-2xl font-bold mb-4 text-blue-700 text-center tracking-wide">
              {item.service}
            </h3>
  
            {/* Price */}
            <div className="flex justify-center items-baseline mb-4">
              <p className="text-4xl font-extrabold text-orange-500 mr-2">
                {item.startingPrice}
              </p>
              <span className="line-through text-red-500 text-lg">
                {item.price}
              </span>
            </div>
  
            {/* Description */}
            <p className="mb-8 text-gray-600 h-24 overflow-hidden text-center">
              {item.description}
            </p>
  
            {/* Features List */}
            <h4 className="text-lg font-semibold mb-3 text-blue-600">
              Features:
            </h4>
            <ul className="list-disc list-inside mb-6 text-left max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-700 leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
  
            {/* Choose Plan Button */}
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-3 px-8 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 w-full shadow-lg hover:shadow-xl">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Pricing;
