import React, { createContext, useState, useContext } from 'react';

// Create the context for the contact form
const ContactFormContext = createContext();

// Provider component to manage form state
export const ContactFormProvider = ({ children }) => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ContactFormContext.Provider value={{ contactData, handleChange }}>
      {children}
    </ContactFormContext.Provider>
  );
};

// Custom hook to access the context
export const useContactFormContext = () => useContext(ContactFormContext);
