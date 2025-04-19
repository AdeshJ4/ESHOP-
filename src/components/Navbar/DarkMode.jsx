import React, { useState, useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') === 'light');


    useEffect(() => {
        localStorage.setItem('theme', theme ? 'light' : 'dark');
        if (theme) {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
    }, [theme]);


    
    return (
        <div onClick={() => setTheme((prev) => !prev)}>
            {theme ? (
                <img src={LightButton} alt="" className="w-12 cursor-pointer"/> 
            ) : (
                <img src={DarkButton} alt="" className="w-12 cursor-pointer"/>
            )}
        </div>
    );
};

export default DarkMode;