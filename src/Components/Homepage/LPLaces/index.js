import React, { useEffect, useState } from 'react';
import "./lplaces.css";
import Title from "../../Title";
import { Link } from "react-router-dom";
import { db } from "../../../database";
import { onValue, ref } from 'firebase/database';
import DestinationCard from "../../DestinationCard";
import DestinationModal from "../../DestinationModal";

const LPlaces = () => {

  const [showModal, setShowModal] = useState(false);
  const [featuredDestinations, setFeaturedDestinations] = useState(false);
  const [targetDestination, setTargetDestination] = useState({});

  useEffect(() => {
    onValue(ref(db, '/destinations'), (snapshot) => {
      const data = snapshot.val(); 
      if (data !== null) {
        setFeaturedDestinations(Object.values(data))
      }
    }, {
      onlyOnce: true
    })
  }, [])
  
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
          featuredDestinations && 
          featuredDestinations.map((destination, i) => {
            return (
              <DestinationCard key={i} setShowModal={setShowModal} data={destination} setTargetDestination={setTargetDestination} />
            )
          })
        }
      </div>
      <Link className='default-button' to='/destination'>View All Destination</Link>
    </div>
  )
}

export default LPlaces;