import React from 'react';
import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='flex-center-center content default-text'>
      <div className='flex-center-center'><AiOutlineCopyrightCircle /><p>Copyright 2022 Eat Wind. All Rights Reserved.</p></div>
      <p className='comsite'>Website Developed by <a href='https://comsite.web.app' target='_blank' rel="noreferrer">ComSite</a></p>
    </footer>
  )
}

export default Footer