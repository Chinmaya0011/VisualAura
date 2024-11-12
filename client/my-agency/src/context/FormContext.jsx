// FormContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectDetails: '',
    service: '',
    meetingDate: '',
    meetingTime: '',
    professionalType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ quoteData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};

// Ensure the correct export of the hook
export const useFreeQuoteContext = () => useContext(FormContext);
