import React from 'react'
import Construction1 from "../assets/construction3.jpg"
import Cleaning1 from "../assets/cleaning1.jpg"
import Cleaning2 from "../assets/logistics.jpg"
import Cleaning3 from "../assets/catering.jpg"
import {motion} from "framer-motion"


function Services() {
  return (
    <div name='services' className='w-full h-full md:h-screen bg-zinc-800'>
        <div className='max-w-[1190px] w-full mx-auto p-10 h-full '>
          <motion.div
            initial = {{y: -80, opacity: 0}}
            whileInView = {{y: 0, opacity: 1}}
            transition = {{ delay: 0.5, duration: 2}}
           className='md:flex md:flex-col md:items-center md:max-w-[700px] md:mx-auto  md:px-20'>
             <h2 className='mb-3 text-3xl text-zinc-600 font-bold tracking-wider'>Our <span className='text-[#3a3ab3]'>Services</span></h2>
             <p className='leading-7 w-full  tracking-wide text-sm text-zinc-400 '>The services
                  we offer include: construction, logistics, cleaning and catering.
              </p>

          </motion.div>
        
         <motion.div
           initial = {{y: 80, opacity: 0}}
           whileInView = {{y: 0, opacity: 1}}
           transition = {{ delay: 0.6, duration: 2}}
          className='grid sm:grid-cols-2 md:grid-cols-4 sm:gap-3 mt-16'>
         <div className=' bg-zinc-700 mb-11 mt-5 flex items-center flex-col md:mb-5 p-2  rounded-md border border-zinc-200 '>
            <div className='w-28 h-28 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src={Construction1} className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className=''>
            <h2 className=' text-xl text-zinc-300 font-bold tracking-wide '>Construction</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6 text-zinc-200'>
                 <li>Building</li> 
                 <li>Maintainance</li>
                 <li>Road works and repairs</li> 
                 <li>Painting</li> 
                </ul>
            </div>
          </div>
          <div className=' bg-zinc-700 mb-11 mt-5 flex items-center flex-col md:mb-5 p-2  rounded-md border border-zinc-200'>
            <div className='w-28 h-28 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center  border border-blue-200'>
            <img src={Cleaning1} className='w-full h-full object-cover object-center  rounded-full border border-blue-800' alt="" />
            </div>
            <div >
            <h2 className=' text-xl text-zinc-300 font-bold tracking-wide'>Cleaning</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6 text-zinc-200'>
                 <li>Deep cleaning and hygien</li> 
                 <li>Fumingation</li> 
                 
                </ul>
            </div>
          </div>
          <div className=' bg-zinc-700 mb-11 mt-5 flex items-center flex-col md:mb-5 p-2  rounded-md border border-zinc-200'>
            <div className='w-28 h-28 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center  border border-blue-200'>
               <img src={Cleaning2} className='w-full h-full object-cover object-center  rounded-full border border-blue-800' alt="" />
            </div>
            <div >
            <h2 className=' text-xl text-zinc-300 font-bold tracking-wide'>Logistics</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6 text-zinc-200'>
                 <li>Long distance trasportation</li> 
                 <li>Office removal</li> 
                 <li>Relocations</li> 
                 
                </ul>
            </div>
          </div>
          <div className=' bg-zinc-700 mb-11 mt-5 flex items-center flex-col md:mb-5 p-2  rounded-md border border-zinc-200 '>
            <div className='w-28 h-28 relative top-[-50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
               <img src={Cleaning3} className='w-full h-full object-cover object-center rounded-full border border-blue-700' alt="" />
            </div>
            <div >
                <h2 className=' text-xl text-zinc-300 font-bold tracking-wide'>Catering</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6 text-zinc-200'>
                 <li>Lorem, ipsum dolor ipsum dolor.</li> 
                 <li>Lorem, ipsum dolor .</li> 
                 <li>Lorem, ipsum dolor ipsum dolor.</li> 
                 <li>Lorem, ipsum .</li> 
                </ul>
            </div>
          </div>

         </motion.div>


        </div>
       
      
    </div>
  )
}

export default Services
