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

// Truncate feedback text after a certain number of words
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
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>
      <div className="testimonials-container max-w-screen-xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div key={index} className="flex justify-center items-center mx-2 my-4">
              <div
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg  overflow-hidden"
                style={{
                  // Remove fixed width and height for better responsiveness
                }}
              >
                <FaRegUser className="text-blue-500 text-4xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{client.role}</p>
                {/* Truncated feedback text with overflow handling */}
                <p className="text-gray-700 italic line-clamp-3 overflow-hidden text-sm px-3">
                  {truncateText(client.feedback, 10)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
