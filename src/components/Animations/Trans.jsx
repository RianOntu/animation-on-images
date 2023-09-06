import React from 'react';
import { motion } from 'framer-motion';

const Trans = ({children}) => {
    return (
        <motion.div
        className="image-content"
        whileHover={{ x: 10 }} // Adjust the x value to control the amount of movement
      >
        {children}
        
      </motion.div>
    );
};

export default Trans;