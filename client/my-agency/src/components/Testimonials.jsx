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
  "bg-blue-50 bg-opacity-0",
  "bg-pink-50 bg-opacity-0",
  "bg-green-50 bg-opacity-0",
  "bg-yellow-50 bg-opacity-0",
  "bg-purple-50 bg-opacity-0",
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
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="py-12 bg-gray-100 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
           <div
           key={index}
           className={`shadow-md rounded-md ${bgColors[index % bgColors.length]} mx-4 my-4 p-2 `}
           style={{
             width: '260px',   // Fixed width for the card
             height: '360px',  // Fixed height for the card
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'space-between',
           }}
         >
           <div className="flex flex-col items-center gap-2 m-1 p-2">
             <FaRegUser className="text-gray-500 w-16 h-16 rounded-full bg-gray-300 p-2" />
             <h3 className="text-md font-semibold">{client.name}</h3>
             <p className="text-sm text-gray-600">{client.role}</p>
           </div>
           
           <p className="mt-4 text-center italic">"{truncateText(client.feedback, 12)}"</p>
         </div>
         
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
