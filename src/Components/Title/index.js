import React from 'react';
import "./title.css"; 
import { motion } from 'framer-motion';

const titleVariant = {
  hidden: {
    y: "20vh",
    opacity: 0
  },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.4,
    }
  }
}

const Title = ({ title, sub }) => {
  return (
    <motion.h1 className='section-title'
      variants={titleVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount:0.5 }}
    >
      <span>{title}</span>
      <br />
      {sub}
    </motion.h1>
  )
}

export default Title