// src/hooks/useLanguageToggle.js

import { useState } from 'react';

const useLanguageToggle = () => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hinglish' : 'english'));
  };

  return { language, toggleLanguage };
};

export default useLanguageToggle;
