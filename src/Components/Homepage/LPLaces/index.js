import React, { useEffect, useState } from 'react';
import "./lplaces.css";
import Title from "../../Title";
import { Link } from "react-router-dom";
import DestinationCard from "../../DestinationCard";
import DestinationModal from "../../DestinationModal";


const LPlaces = ({ destinations }) => {

  const [showModal, setShowModal] = useState(false);
  const [targetDestination, setTargetDestination] = useState({});
  
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  return (
    <div className='lplaces flex-center-center content'>
      <DestinationModal showModal={showModal} setShowModal={setShowModal} data={targetDestination}/>
      <Title title='Our Suggestions' sub='Must Try Places' />
      <div className='gay-grid'>
        {
          destinations && 
          destinations.map((data, i) => {
            return (
              <DestinationCard key={i} setShowModal={setShowModal} data={data} setTargetDestination={setTargetDestination} />
            )
          })
        }
      </div>
      <Link className='default-button' to='/destination'>View All Destination</Link>
    </div>
  )
}

export default LPlaces;