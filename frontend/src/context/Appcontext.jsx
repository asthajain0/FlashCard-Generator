import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <AppContext.Provider value={{ flashcards, setFlashcards,axios }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
