import React from 'react';
import { motion } from 'framer-motion';

const AngleVisualizer = ({ angle }) => {
  return (
    <div className="relative w-40 h-40">
      <motion.div
        className="absolute w-1 h-20 bg-blue-500 origin-bottom"
        style={{ 
          bottom: 0, 
          left: '50%', 
          transformOrigin: 'bottom'
        }}
      />
      <motion.div
        className="absolute w-1 h-20 bg-blue-500 origin-bottom"
        style={{ 
          bottom: 0, 
          left: '50%', 
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'bottom'
        }}
      />
    </div>
  );
};

export default AngleVisualizer;