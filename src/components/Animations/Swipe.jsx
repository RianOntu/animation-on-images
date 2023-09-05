import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Swipe.css';

const Swipe = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='swipe'
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {children}
      {isHovered && <div className='glitter'></div>}
    </div>
  );
};

export default Swipe;
