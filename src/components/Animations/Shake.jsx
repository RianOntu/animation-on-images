import React from 'react';
import { motion } from 'framer-motion';

const Shake = ({children}) => {
    const shakeVariants = {
        hover: {
          x: [0, -10, 10, -10, 10, 0],
          y: [0, -5, 5, -5, 5, 0],
          transition: {
            duration: 0.5,
          },
        },
      };
    
    return (
        <motion.div
        className="image-container"
        whileHover="hover"
        variants={shakeVariants}
      >
     {children}
      </motion.div>
    );
};

export default Shake;