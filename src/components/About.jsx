import React, { useState } from 'react'
import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Construction from "../assets/hero1.jpg"
import Workplace from "../assets/workplace1.jpg"
import {motion} from "framer-motion"

function About() {
  const [triggerOnScroll, setTriggerOnScroll] = useState(false)
  return (
    <div name='about' className='w-auto h-full bg-zinc-100'>
        <div className='max-w-[1190px] w-full mx-auto p-10  '>
       
            <div className='grid md:grid-cols-2 gap-7'>
              <div >
                 < h1
                
                  className=' text-3xl text-[#424242] mb-3 font-bold  tracking-wide '>
                    Learn about <span className='text-[#0504aa]'>Us</span>
                 </h1>
                 <p
                
                  className='leading-7 tracking-wide mb-3 text-zinc-800 text-sm'>
                  AltraCore Solutions was formed in 2019 with the objective of establishing a sustainable and continually improving company, which is able to provide predictable and quality services to our clients while concurrently fostering lasting relationships with professionals, local councils, government bodies, trade contractors and suppliers at large.
                  
                  
                 </p>
                
                 <motion.div
                  initial = {{y: 80, opacity: 0}}
                  whileInView = {{y: 0, opacity: 1}}
                  transition = {{ delay: 0.7, duration: 2}}
                  className='h-[450px] sm:h-[180px] relative mt-7 '>
                   <img src={Workplace} alt=""  className='w-full h-full  object-cover  absolute top-0 left-0 object-center'/>
                   <div className=' absolute top-0 left-0 -z-0 bg-gradient-to-r from-zinc-900/60  to-zinc-900/90 w-full h-full'/>
                  <ScrollTrigger onEnter={() => setTriggerOnScroll(true)} onExit={() => setTriggerOnScroll(false)}>
                    
                   <div className='absolute  top-0 left-0 -z-0 w-full px-3 grid sm:grid-cols-2 md:grid-cols-3 gap-3 py-20 md:py-11 '>
                    <div className='w-full mr-5 flex flex-col items-center border border-[#cecccc] p-3 rounded-md'>
                      <span className='text-[#cecccc] font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={5} duration={1} delay={0.8}/>}+</span>
                      <p className='text-[#cecccc] text-sm' >experience</p>
                    </div>
                    <div className=' w-full mr-5 flex flex-col items-center border border-[#cecccc] p-3 rounded-md'>
                      <span className='text-[#cecccc] font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={10} duration={1} delay={0.8}/>}+</span>
                      <p className='text-[#cecccc] text-sm ' >Happy Clients</p>
                    </div>
                    <div className='w-full mr-5 flex flex-col items-center border border-[#cecccc] p-3 rounded-md'>
                      <span className='text-[#cecccc] font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={6} duration={1} delay={1}/>}+</span>
                      <p className='text-[#cecccc] text-sm'>Our Offices</p>
                    </div>
                   </div>
                  </ScrollTrigger>
                 </motion.div>
                 <h1
                 
                  className=' text-3xl text-[#424242] mb-3 font-bold mt-9 tracking-wide '>
                 Vision and Mission
                 </h1>
                 <p
                 
                  className='leading-7  tracking-wide md:mb-3 text-zinc-800 text-sm'>
                  Our vision and mission is to grow the company into a well establised giant through innovative means, delivery of quality services and client satisfaction through formidable partnerships with intergrity and good business values.
                 
                 </p>
              </div>
              <div className=' h-[400px] md:h-[506px] flex items-center justify-center '
              >
                
                 <img src={Construction} alt=""  className='w-full md:w-[400px] h-[360px] md:h-[306px] object-cover md:mt-14'/>
              </div>
             
            </div>
        </div>
      
    </div>
  )
}

export default About
