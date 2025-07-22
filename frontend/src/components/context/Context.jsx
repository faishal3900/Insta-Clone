// src/context/Context.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true);
    const toggleTheme = () => setDark(!dark);

    const [comment, setComment] = useState(true)
    const btnComment = () => setComment(!comment)
    console.log(comment);
    const [user, setUser] = useState({
        _id: "6871fb95b374d17fe174df64", // Example ID (replace with real auth)
        // name: "John",
    });

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme, comment, btnComment, user, setUser }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAuth = () => useContext(ThemeContext);
export default ThemeProvider;
