import React from 'react';
import "./about.css";
import Title from "../../Title";

const About = () => {
  return (
    <div className='about flex-center-center content'>
      <Title title='About Us' sub='Who Are We' />
      <div className='paragraph default-text'>
        Travelling abroad is a memorable experience that everyone should try. However, there is so much to offer in Malaysia, our home country, that we bet you might not have heard of. We suggest cafes, restaurants, and attractions that are not well known by the public. These hidden gems are worth a visit by both Malaysians and foreigners. 
        <br /><br />
        The reviews and opinions listed on this website are honest and not sponsored. We will not be receiving any payments for bad-mouthing or sugar-coating an attraction, restaurant or cafe, providing you guys with the most sincere evaluation of unknown destinations scattered across the Malay Peninsula. 
      </div>
    </div>
  )
}

export default About