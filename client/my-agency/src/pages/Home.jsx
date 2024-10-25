import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import TechnologiesUsed from '../components/TechnologiesUsed';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import OurTeam from '../components/OurTeam';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import TeamMetrics from '../components/metricsData';
const Home = () => (
  <>
    <Navbar />
    <Hero />


    <Services />
        <TechnologiesUsed />
    <Portfolio />
    <Testimonials />
    <Pricing/>
    <TeamMetrics/>
    <OurTeam />
    <AboutUs />
    <CTA />
    <Contact/>
    <Footer />
  </>
);

export default Home;
