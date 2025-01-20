import React, { useState, useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : true);    

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        if(theme){
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark");
        }else{
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light");
        }
    });

    
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











// import React, { useState } from 'react';
// import LightButton from '../../assets/website/light-mode-button.png';
// import DarkButton from '../../assets/website/dark-mode-button.png';

// const DarkMode = () => {
//     const [theme, setTheme ] = useState("light")
//     return (
//         <div className='relative'>
//             <img src={LightButton} alt="" className={`w-12 cursor-pointer absolute right-0 z-10  ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
//             <img src={DarkButton} alt="" className={`w-12 cursor-pointer`} />
//         </div>
//     )
// }


// export default DarkMode;