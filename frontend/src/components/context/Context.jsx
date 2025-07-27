// src/context/Context.js
import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children, },) => {
    const [dark, setDark] = useState(true);
    const toggleTheme = () => setDark(!dark);

    const [followId, setFollow] = useState()
    const [following, setFollowing] = useState()

    const [comment, setComment] = useState(true)
    const btnComment = () => setComment(!comment)

    const [user, setUser] = useState({
        _id: "687fcb239ef415edf82881b1", // Example ID (replace with real auth)
        // name: "John",
    });

    function followFun() {
        fetch("http://localhost:3000/follow", {
            method: "Put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({ followId })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);

                setFollowing(data.following)
            })
    }

    // console.log(following);


    useEffect(() => {
        followFun()
    }, [followId]);


    return (
        <ThemeContext.Provider value={
            {
                dark,
                toggleTheme,
                comment,
                btnComment,
                user,
                setUser,
                followId,
                setFollow,
                following,
                followFun

            }
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAuth = () => useContext(ThemeContext);
export default ThemeProvider;
