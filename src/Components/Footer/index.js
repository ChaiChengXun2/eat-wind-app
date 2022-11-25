import React from 'react';
import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='flex-center-center content default-text'>
      <AiOutlineCopyrightCircle /><p>Copyright 2022 Chai Cheng Xun. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer