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
import WhatsAppIcon from '../components/WhatsAppIcon'; // Import the WhatsApp icon
import { useSectionContext } from '../context/SectionContext';

// Lazy-loaded components for better performance
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const OurTeam = lazy(() => import('../components/OurTeam'));

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  // Get section refs from SectionContext
  const {
    heroRef,
    servicesRef,
    technologiesRef,
    portfolioRef,
    testimonialsRef,
    pricingRef,
    ourTeamRef,
    metricsRef,
    aboutUsRef,
    ctaRef,
    contactRef,
  } = useSectionContext();

  return (
    <div>
      {/* Navbar doesn't need sections passed as props anymore */}
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef} data-aos="fade-up">
        <Hero />
      </div>

      {/* Core Sections */}
      <div ref={servicesRef} data-aos="fade-up">
        <Services />
      </div>
      <div ref={technologiesRef} data-aos="fade-up">
        <TechnologiesUsed />
      </div>

      {/* Lazy-loaded sections with Suspense fallback */}
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <div ref={portfolioRef} data-aos="fade-up">
          <Portfolio />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <div ref={testimonialsRef} data-aos="fade-up">
          <Testimonials />
        </div>
      </Suspense>

      <div ref={pricingRef} data-aos="fade-up">
        <Pricing />
      </div>

      <Suspense fallback={<div>Loading Our Team...</div>}>
        <div ref={ourTeamRef} data-aos="fade-up">
          <OurTeam />
        </div>
      </Suspense>

      <div ref={metricsRef} data-aos="fade-up">
        <TeamMetrics />
      </div>

      <div ref={aboutUsRef} data-aos="fade-up">
        <AboutUs />
      </div>

      {/* Call-to-Action */}
      <div ref={ctaRef} data-aos="fade-up">
        <CTA />
      </div>

      {/* Contact Form and Footer */}
      <div ref={contactRef} data-aos="fade-up">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>

      {/* WhatsApp Icon */}
      <WhatsAppIcon />
    </div>
  );
};

export default Home;
