import React from 'react';
import { motion } from "framer-motion";
const FadeOut = ({children}) => {
    return (
       
              <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
      
    );
};

export default FadeOut;