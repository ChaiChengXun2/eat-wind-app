import React from 'react';
import "./modal.css";
import "./responsive.css";
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GoLocation } from "react-icons/go";
import Modal from "../Modal";

const leftVariant = {
  hidden: {
    x: "-10vh",
    opacity: 0
  },
  visible: {
    x: 0, 
    opacity: 1,
  }
}

const rightVariant = {
  hidden: {
    x: "10vh",
    opacity: 0
  },
  visible: {
    x: 0, 
    opacity: 1,
  }
}

const centerVariant = {
  hidden: {
    y: "-10vh",
    opacity: 0
  },
  visible: {
    y: 0, 
    opacity: 1,
  }
}

const DestinationModal = ({ showModal, setShowModal, data }) => {
  return (
    <Modal setShowModal={setShowModal} showModal={showModal} type="destination">
      <article className='flex-center-center'>
        <nav className='modal-nav flex-center-between'>
          <div className='name default-text'>{data.Title}</div>
          <div className='close default-text' onClick={() => {setShowModal(false)}}>Done</div>
        </nav>
        <div className='banner flex-center-center'><LazyLoadImage src={data.Banner} alt={data.Banner} effect='blur'/></div>
        <div className='info flex-center-center'>
          <div className='default-title'>{data.Title}</div>
          <div className='default-text type'>{data.Type}</div>
          <div className='location flex-center-center default-text'><GoLocation />{data.Location}</div>
        </div>
        <div className='description default-text'>
          {data.Description}
          {
            data.OptionalDes && 
            data.OptionalDes.map((description, index) => {
              return (<><br/><br/>{description}</>)
            })
          }
        </div>
        <div className='photo-grid'>
          <motion.div className='photo rectangle flex-center-center' variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image5} alt='rectangle'/></motion.div>
          <motion.div className='photo long flex-center-center' variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image1} alt='rectangle'/></motion.div>
          <motion.div className='photo square flex-center-center' variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image2} alt='rectangle'/></motion.div>
          <motion.div className='photo long flex-center-center' variants={centerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image3} alt='rectangle'/></motion.div>
          <motion.div className='photo square flex-center-center' variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image4} alt='rectangle'/></motion.div>
          <motion.div className='photo square flex-center-center' variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }}><LazyLoadImage src={data.Image6} alt='rectangle'/></motion.div>
        </div> 
      </article>
    </Modal>
  )
}

export default DestinationModal