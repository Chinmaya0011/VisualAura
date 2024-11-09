import React from 'react';
import pricingData from '../assets/pricing.json'; // Import the JSON data

const Pricing = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-wide uppercase">
        Our Pricing Plans
      </h2>

      <div className="overflow-hidden px-4 md:px-12 lg:px-24">
        <div className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 w-72 h-[500px] flex-shrink-0 transition-transform duration-300 hover:shadow-2xl border-l-[4px] border-blue-500 relative snap-center"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg shadow-md">
                Save {Math.round(((parseInt(item.price.replace('₹', '')) - parseInt(item.startingPrice.replace('₹', ''))) / parseInt(item.price.replace('₹', ''))) * 100)}%
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-3 text-blue-700 text-center tracking-wide">
                {item.service}
              </h3>

              {/* Price */}
              <div className="flex justify-center items-baseline mb-4">
                <p className="text-3xl font-extrabold text-orange-500 mr-2">
                  {item.startingPrice}
                </p>
                <span className="line-through text-red-500 text-sm">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-gray-600 h-20 overflow-hidden text-center">
                {item.description}
              </p>

              {/* Features List */}
              <h4 className="text-md font-semibold mb-2 text-blue-600">
                Features:
              </h4>
              <ul className="list-disc list-inside mb-4 text-left max-h-28 overflow-y-auto hide-scrollbar">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Choose Plan Button */}
              <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-2 px-6 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 w-full shadow-lg hover:shadow-xl">
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
