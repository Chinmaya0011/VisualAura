// SectionContext.js
import React, { createContext, useContext, useRef } from 'react';

// Create the context
const SectionContext = createContext();

// Provider component to wrap the app
export const SectionProvider = ({ children }) => {
  // Create refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const ourTeamRef = useRef(null);
  const metricsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const ctaRef = useRef(null);
  const contactRef = useRef(null);

  const value = {
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
  };

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
};

// Custom hook to use the context
export const useSectionContext = () => {
  return useContext(SectionContext);
};
