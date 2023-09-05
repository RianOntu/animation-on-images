import React from 'react';
import './ZoomIn.css'; // Import your CSS file

const ZoomIn = ({ children }) => {
  return (
    <div className="zoom-in-container">
      {children}
    </div>
  );
};

export default ZoomIn;
