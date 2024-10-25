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
  "bg-blue-50",
  "bg-pink-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
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
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-50 to-white px-6 md:px-12 lg:px-24">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        What Our Clients Say
      </h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div
              key={index}
              className={`relative shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105 ${bgColors[index % bgColors.length]} mx-4 my-4`}
              style={{
                width: '280px',
                height: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                perspective: '1000px',
              }}
            >
              {/* 3D Inner Content */}
              <div className="relative flex flex-col items-center gap-2 p-4 transition-transform transform hover:rotate-1 hover:translate-y-1 hover:shadow-lg">
                <FaRegUser className="text-gray-500 w-16 h-16 rounded-full bg-gray-200 p-2 shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>

              {/* Feedback Section */}
              <p className="mt-4 text-center italic text-gray-700">
                "{truncateText(client.feedback, 12)}"
              </p>

              {/* Floating Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-br from-blue-300 to-purple-400 mix-blend-multiply blur-xl transition-all duration-500"
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
