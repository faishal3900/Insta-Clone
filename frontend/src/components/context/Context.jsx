// src/context/Context.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true);
    const toggleTheme = () => setDark(!dark);

    const [comment, setComment] = useState(true)
    const btnComment = () => setComment(!comment)
    console.log(comment);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme, comment, btnComment }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
