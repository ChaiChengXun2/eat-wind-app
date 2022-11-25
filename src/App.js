import React from 'react';
import Homepage from './Components/Homepage';
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDestination from "./Components/AllDestination";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/destination" element={<AllDestination />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
