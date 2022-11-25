import React, { useState, useEffect } from 'react';
import "./landingpage.css";
import "./responsive.css";
import { motion, useTransform, useScroll } from 'framer-motion';

const LandingPage = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());
  let tabletSize = windowSize.innerWidth < 1024;

  function getWindowSize() { 
    const {innerWidth, innerHeight} = window; 
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() { 
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize); 

    return () => { 
      window.removeEventListener("resize", handleWindowResize);
    }
  },  []);

  const cloudStartingPosition = {
    desktop: "-25vw",
    tablet: "-15vw"
  }

  const [cloudPosition, setCloudPosition] = useState("");

  useEffect(() => {
    if (tabletSize) {
      setCloudPosition(cloudStartingPosition.tablet)
    } else {
      setCloudPosition(cloudStartingPosition.desktop)
    }
  }, [tabletSize, cloudStartingPosition.tablet, cloudStartingPosition.desktop])

  const { scrollY } = useScroll();
  const sunScroll = useTransform(scrollY, [0, 750], ["20vh", "100vh"]);
  const cloudScroll = useTransform(scrollY, [0, 1000], [cloudPosition, "0vw"]);
  const nightScroll = useTransform(scrollY, [0, 600], ["-175vh", "50vh"]);
  const titleScroll = useTransform(scrollY, [0, 1250], ["0", "100vh"]);

  return (
    <div className='landing-page content flex-start-center'>
      <motion.div className='lp-title flex-center-center' style={{ y: titleScroll, x: 0 }}>
        <span>Eat Wind</span>
        <br />
        A Trip Around Malaysia
      </motion.div>
      <motion.div style={{ y: nightScroll, x: 0 }} className='night'></motion.div>
      <motion.div style={{ y: sunScroll, x: "-85vw" }} className='picture flex-center-center sun'><img src='https://ik.imagekit.io/ccx/sun_UwsHfmPwa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173095538' alt='Sun' /></motion.div>
      <motion.div style={{ y: "30vh", x: cloudScroll }} className='picture flex-center-center'><img src='https://ik.imagekit.io/ccx/cloud_Yw4XRk2_V.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668001554710' alt='Cloud' /></motion.div>
      <motion.div className='picture flex-center-center kl'><img src='https://ik.imagekit.io/ccx/KL_RyzJygxul.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1668431491901' alt='Kuala Lumpur' /></motion.div>
    </div>
  )
}

export default LandingPage