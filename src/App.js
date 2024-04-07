import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

function App() {
  return (
    <div >
      
       <NavBar/>
       <Hero/>
       <Partners/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
       <BottomFooter/>
      
    </div>
  );
}

export default App;
