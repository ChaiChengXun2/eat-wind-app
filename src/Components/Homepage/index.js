import React, { useEffect } from 'react'
import LandingPage from './LandingPage';
import About from "./About";
import LPlaces from "./LPLaces";
import Footer from "../Footer";

const Homepage = () => {

  useEffect(() => {
    document.title = "Eat Wind | A Trip Around Malaysia"
  }, [])

  return (
    <div className='homepage'>
      <LandingPage /> 
      <About />
      <LPlaces />
      <Footer />
    </div>
  )
}

export default Homepage