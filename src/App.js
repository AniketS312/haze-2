import { useState, useEffect } from 'react';

import Header from './UI/Header';
import HeaderMobile from './UI/HeaderMobile'
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio'
import ContactUs from './Components/ContactUs';
import Footer from './UI/Footer';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import classes from './App.module.css';



function App() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
 
  let [mobileView, setMobileView] = useState(getWindowDimensions)

  useEffect(() => {
    function handleResize() {
      setMobileView(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(mobileView.width)


  return (
    <div className={classes.app}>
       <BrowserRouter>
        {mobileView.width <= 820 ? <HeaderMobile /> : <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contactus" element={<ContactUs />} />
          </Routes>
       </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
