// Slide.js
import React from "react";
import { motion } from "framer-motion";
import './Slide.css';

function Slide({ children }) {
  return (
    <>
    <motion.div  whileHover={{ width: 0 }} transition={{ duration: 0.3 }}>
   {children}
  </motion.div>
  <motion.div className="over" whileHover={{ width: '100%' }} transition={{ duration: 0.3 }}></motion.div>
  </>
  );
}

export default Slide;
