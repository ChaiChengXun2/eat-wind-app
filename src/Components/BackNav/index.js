import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";
import "./back.css";

const BackNav = () => {
  const navigate = useNavigate();
  return (
    <nav className='back flex-center-start'>
      <div className='default-button flex-center-start' onClick={() => navigate(-1)}>
        <AiOutlineLeft />
        <p className='default-text'>Back</p>
      </div>
    </nav>
  )
}

export default BackNav