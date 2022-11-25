import React, { useEffect, useState } from 'react';
import "./alldestination.css";
import "./responsive.css";
import BackNav from "../BackNav";
import Title from "../Title";
import Footer from "../Footer";
import DestinationCard from "../DestinationCard";
import DestinationModal from '../DestinationModal';
import { FiFilter } from "react-icons/fi";
import { db } from "../../database";
import { onValue, ref } from 'firebase/database';

const AllDestination = () => {

  const [featuredDestinations, setFeaturedDestinations] = useState(false);
  const [targetDestination, setTargetDestination] = useState({});

  useEffect(() => {
    document.title = "All Destination | Eat Wind"
  }, [])

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

  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false); 
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const toggleFilter = e => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const toggleClass = e => { 
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      e.currentTarget.parentNode.children[i].classList.remove("active");
    }
    e.currentTarget.classList.toggle("active");
    setFilter(e.currentTarget.innerHTML);
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".destination-card");
    const keyUp = () => {
      document.querySelector(".choices").children[0].click();
      cards.forEach(card => {
        if (card.children[1].children[0].innerHTML.toLowerCase().includes(search.toLowerCase())) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      })
    }

    window.addEventListener("keyup", keyUp);

    return () => {window.removeEventListener("keyup", keyUp)}
  }, [search])

  useEffect(() => {
    const cards = document.querySelectorAll(".destination-card");
    setSearch("");

    if (filter === "All") {
      cards.forEach(card => {
        card.style.display = "flex";
      })
    } else {
      cards.forEach(card => {
        if (card.children[1].children[1].innerHTML.toLowerCase() === filter.toLowerCase()) {
          card.style.display = "flex"
        } else {
          card.style.display = "none"
        }
      })
    }

  }, [filter])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  return (
    <div className='all-destination flex-center-center content'>
      <DestinationModal showModal={showModal} setShowModal={setShowModal} data={targetDestination}/>
      <BackNav />
      <Title title='All Destinations' sub='' />
      <section className='search-bar flex-start-center'>
        <div className='search flex-center-start'>
          <input placeholder='' className='default-text' autoComplete='off' type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
          <label className='default-text'>Search Projects</label>
        </div>
        <div className='filter flex-center-center' onClick={toggleFilter}>
          <FiFilter />
        </div>
      </section>
      <section className={`choices ${active ? "active" : ""}`}>
        <p onClick={toggleClass} className="default-text flex-center-center">All</p>
        <p onClick={toggleClass} className="default-text flex-center-center">Cafe</p>
        <p onClick={toggleClass} className="default-text flex-center-center">Restaurant</p>
      </section>
      <section className='gay-grid'>
      {
          featuredDestinations && 
          featuredDestinations.map((destination, i) => {
            return (
              <DestinationCard setShowModal={setShowModal} key={i} data={destination} setTargetDestination={setTargetDestination} />
            )
          })
        }
      </section>
      <Footer />
    </div>
  )
}

export default AllDestination