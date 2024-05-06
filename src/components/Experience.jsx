import React, { useState } from 'react'
import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'



function Experience() {
    const [triggerOnScroll, setTriggerOnScroll] = useState(false)
  return (
    <div className='w-auto h-full bg-[#DDEEFF]'>
        <div className='max-w-[1190px] w-full mx-auto py-3   '>
        <div
                
                  className='h-[350px] md:h-[180px] relative  mx-5 rounded-md bg-[#DDEEFF]'>
                  <ScrollTrigger onEnter={() => setTriggerOnScroll(true)} onExit={() => setTriggerOnScroll(false)}> 
                   <div className='absolute  top-0 left-0 -z-0 w-full px-3 grid sm:grid-cols-2 md:grid-cols-3 gap-3 py-10 md:py-11 '>
                    <div className=' bg-[#FEFEFE] w-full mr-5 flex flex-col items-center  p-3 rounded-md'>
                      <span className='text-zinc-600 font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={5} duration={1} delay={0.8}/>}+</span>
                      <p className='text-zinc-600 text-sm' >experience</p>
                    </div>
                    <div className=' bg-[#FEFEFE] w-full mr-5 flex flex-col items-center border border-[#cecccc] p-3 rounded-md'>
                      <span className='text-zinc-600 font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={10} duration={1} delay={0.8}/>}+</span>
                      <p className='text-zinc-600 text-sm ' >Happy Clients</p>
                    </div>
                    <div className='bg-[#FEFEFE] w-full mr-5 flex flex-col items-center border border-[#cecccc] p-3 rounded-md'>
                      <span className='text-zinc-600 font-semibold text-4xl md:text-2xl'>{triggerOnScroll && <Countup start={0} end={6} duration={1} delay={1}/>}+</span>
                      <p className='text-zinc-600 text-sm'>Our Offices</p>
                    </div>
                   </div>
                  </ScrollTrigger>
                 </div>

        </div>
      
    </div>
  )
}

export default Experience
