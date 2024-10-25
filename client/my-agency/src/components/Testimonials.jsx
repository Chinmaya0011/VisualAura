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

// Truncate feedback text to avoid overflow
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
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-4 shadow-md transform transition-all hover:scale-105 ${bgColors[index % bgColors.length]} mx-2 my-2`}
              style={{
                width: '200px',  // Reduced width size
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '0 10px',
              }}
            >
              <div className="flex flex-col items-center">
                <FaRegUser className="text-gray-600 w-12 h-12 rounded-full bg-gray-200 p-2 mb-3 shadow-sm" />
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
              <p className="mt-4 text-center text-gray-700 italic">
                "{truncateText(client.feedback, 12)}"
              </p>
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 to-purple-400 opacity-0 hover:opacity-100 blur-md transition-all duration-300"
                style={{ zIndex: -1 }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
