import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image from "./Image";

// Import images
const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.6,
      },
    },
  };
    
  

const Loader = ({setLoading}) => {
   
  return (
    <motion.div className="loader" 
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
       >
        <motion.div className="loader-inner" variants={itemMain}>
            <motion.img
            layoutId="main-image-1" src="/src/assets/images/image-1.webp" />
        </motion.div>
    </motion.div>
  );
};


export default Loader;