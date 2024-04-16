import React from 'react';


import NavBar from './components/NavBar.jsx';
import Partners from './components/Partners.jsx'
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BottomFooter from './components/BottomFooter.jsx'
import Hero from './components/Hero.jsx';







function App() {
  return (
    <div >
      
       <NavBar/>
       <div className='w-full h-full'>
       <Hero/>
       <Partners/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
       <BottomFooter/>

       </div>
      
      

      
    
      
     
      

      
    </div>
  );
}

export default App;
