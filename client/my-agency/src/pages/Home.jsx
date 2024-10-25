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

// Lazy-loaded components for better performance
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const OurTeam = lazy(() => import('../components/OurTeam'));

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <NotificationBar /> {/* Top notification bar */}
      
      <div className="mt-16">
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Core Sections */}
        <Services />
        <TechnologiesUsed />

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

        <Pricing />

        <Suspense fallback={<div>Loading Our Team...</div>}>
          <div data-aos="fade-up">
            <OurTeam />
          </div>
        </Suspense>

        <TeamMetrics />

        <AboutUs />

        {/* Call-to-Action */}
        <CTA />

        {/* Contact Form and Footer */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
