import React, { useEffect, useState } from 'react';
import './DarkLight.css';

const DarkLight = () => {
    const [theme,setTheme]=useState(false)
    const toggleTheme=()=>{
           setTheme(!theme)
    }
    useEffect(() => {
        // Apply dark mode styles to the body and buttons when the theme is in dark mode
        let elements=document.getElementsByClassName('menu');
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i];
          el.classList.add('dark_menu');
          if (theme) {
            document.body.classList.add('dark-mode');
          
          } else {
            document.body.classList.remove('dark-mode');
            el.classList.remove('dark_menu');
          }
        }
       
      }, [theme]);
    return (
        <div className='d-flex justify-content-end mt-5 mb-5 container'>
            <button onClick={()=>toggleTheme()} className={theme==false?'moon':'sun'}>{theme==false?<i class="fa-solid fa-moon"></i>:<i class="fa-solid fa-sun"></i>}</button>
        </div>
    );
};

export default DarkLight;