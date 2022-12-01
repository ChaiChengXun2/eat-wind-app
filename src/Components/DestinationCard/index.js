import React from 'react';
import "./destinationcard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

const variant = {
  hidden: {
    y: "10vh",
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

const DestinationCard = ({ setShowModal, data, setTargetDestination }) => {
  return (
    <motion.div className='destination-card flex-center-center' onClick={() => {setShowModal(true); setTargetDestination(data)}}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <LazyLoadImage src={data.Banner} alt={data.Banner} effect='blur' />
      <div className='information'>
        <h1 className='default-title title'>{data.Title}</h1>
        <p className='default-text type'>{data.Type}</p>
      </div>
    </motion.div>
  )
}

export default DestinationCard