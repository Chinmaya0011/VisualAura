import { Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import TechnologiesUsed from '../components/TechnologiesUsed';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import TeamMetrics from '../components/metricsData';
import NotificationBar from '../components/NotificationBar';
import WhatsAppIcon from '../components/WhatsAppIcon'; // Import the WhatsApp icon

// Lazy-loaded components for better performance
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const OurTeam = lazy(() => import('../components/OurTeam'));

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div data-aos="fade-up">
        <Hero />
      </div>

      {/* Core Sections */}
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-up">
        <TechnologiesUsed />
      </div>

      {/* Lazy-loaded sections with Suspense fallback */}
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <div data-aos="fade-up">
          <Portfolio />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <div data-aos="fade-up">
          <Testimonials />
        </div>
      </Suspense>

      <div data-aos="fade-up">
        <Pricing />
      </div>

      <Suspense fallback={<div>Loading Our Team...</div>}>
        <div data-aos="fade-up">
          <OurTeam />
        </div>
      </Suspense>

      <div data-aos="fade-up">
        <TeamMetrics />
      </div>

      <div data-aos="fade-up">
        <AboutUs />
      </div>

      {/* Call-to-Action */}
      <div data-aos="fade-up">
        <CTA />
      </div>

      {/* Contact Form and Footer */}
      <div data-aos="fade-up">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>

      {/* WhatsApp Icon */}
      <WhatsAppIcon /> {/* Add the WhatsApp icon here */}
    </div>
  );
};

export default Home;
