import React, { useState, useEffect } from 'react';
import Homepage from './Components/Homepage';
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDestination from "./Components/AllDestination";
import NotFound from "./Components/NotFound";
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";
import { onValue, ref } from 'firebase/database';
import { db } from "./database";

const auth = getAuth(app); 

const App = () => {

  const [destinations, setDestinations] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).then(setUser(true));
  }, [])

  useEffect(() => {
    if (user) {
      onValue(ref(db, '/destinations'), (snapshot) => {
        const data = snapshot.val(); 
        if (data !== null) {
          setDestinations(Object.values(data))
        }
      }, {onlyOnce: true})
    }
  }, [user])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Homepage destinations={destinations}/>}></Route>
          <Route path="/destination" element={<AllDestination destinations={destinations}/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App