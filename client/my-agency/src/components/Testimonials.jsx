import React from 'react';
import Slider from 'react-slick';
import { FaRegUser } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonials data
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Startup Inc.",
    feedback: "Working with MyAgency was a pleasure. Their creative vision and professionalism exceeded our expectations!",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Manager, BrandCo",
    feedback: "The team delivered top-notch branding services. We saw a 50% increase in engagement within the first month!",
  },
  {
    name: "David Kim",
    role: "Founder, AppFlow",
    feedback: "Their web design transformed our online presence. I highly recommend MyAgency for any creative project!",
  },
  {
    name: "Emily Patel",
    role: "CEO, TechCorp",
    feedback: "MyAgency's digital marketing strategy boosted our sales by 25% in just 6 months!",
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupHub",
    feedback: "Their SEO services helped us rank #1 on Google for our target keywords!",
  },
  {
    name: "Jessica Martin",
    role: "Marketing Director, Nonprofit Org",
    feedback: "MyAgency's creative team designed an amazing logo and brand identity for us!",
  },
];

// Background colors for each testimonial
const bgColors = [
  "bg-blue-100",
  "bg-pink-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
];

// Function to truncate feedback text
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? `${words.slice(0, wordLimit).join(' ')}...` : text;
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        }
      }
    ]
  };

  return (
    <section className="py-10 bg-gray-100 px-4 md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-lg ${bgColors[index % bgColors.length]} transform transition-transform hover:scale-105 mx-2`}
              style={{ 
                width: '300px',  // Set fixed width
                height: '400px', // Set fixed height
                display: 'flex',  // Use flexbox
                flexDirection: 'column',  // Stack children vertically
                justifyContent: 'space-between',  // Distribute space
              }}
            >
              <div className="bg-white p-4 rounded-lg shadow-inner h-full flex flex-col justify-between">
                <div className="flex justify-center mb-4">
                  <FaRegUser className="text-gray-600 w-20 h-20 rounded-full bg-gray-200 p-3" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center">{client.name}</h3>
                <p className="text-sm text-gray-500 text-center">{client.role}</p>
                <p className="mt-4 text-center italic">"{truncateText(client.feedback, 12)}"</p> {/* Truncate feedback to 20 words */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
