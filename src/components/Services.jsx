import React from 'react'
import Construction1 from "../assets/construction3.jpg"
import Cleaning1 from "../assets/cleaning1.jpg"
import Cleaning2 from "../assets/logistics.jpg"
import Cleaning3 from "../assets/catering.jpg"
import {motion} from "framer-motion"


function Services() {
  return (
    <div name='services' className='w-full h-full bg-zinc-50'>
        <div className='max-w-[1190px] w-full mx-auto p-10 h-full '>
          <motion.div
            initial = {{y: -80, opacity: 0}}
            whileInView = {{y: 0, opacity: 1}}
            transition = {{ delay: 0.5, duration: 2}}
           className='md:flex md:flex-col md:items-center md:max-w-[600px] md:mx-auto'>
             <h2 className='mb-3 text-3xl text-[#424242] font-bold tracking-wider'>Our <span className='text-[#0504aa]'>Services</span></h2>
             <p className='leading-7 w-full  tracking-wide mb-3 text-sm'>AltraCore Solutions offers different kinds of services that meet our client's needs, the services
                  we offer include: construction, logistics services, cleaning servics and catering.
              </p>

          </motion.div>
        
         <motion.div
           initial = {{y: 80, opacity: 0}}
           whileInView = {{y: 0, opacity: 1}}
           transition = {{ delay: 0.6, duration: 2}}
          className='grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 mt-16'>
         <div className=' bg-zinc-100 mb-11 duration-500 mt-5 flex items-center flex-col md:mb-5 shadow-md   p-4  rounded-md border border-gray-200 '>
            <div className='w-32 h-32 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src={Construction1} className='w-full h-full object-cover object-center  rounded-full border border-gray-500' alt="" />
            </div>
            <div className=' ml-6'>
            <h2 className=' text-xl text-[#424242] font-bold tracking-wide'>Construction</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6'>
                 <li>Building</li> 
                 <li>Maintainance</li> 
                 <li>Renovations</li> 
                 <li>Road works and repairs</li> 
                 <li>Paving</li> 
                 <li>Painting</li> 
                </ul>
            </div>
          </div>
          <div className='bg-zinc-100  mb-11 duration-500 mt-5 flex items-center flex-col md:mb-5 shadow-md  p-4  rounded-md border border-gray-200 '>
            <div className='w-32 h-32 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center  border border-blue-200'>
            <img src={Cleaning1} className='w-full h-full object-cover object-center  rounded-full border border-gray-500' alt="" />
            </div>
            <div className=' ml-6'>
            <h2 className=' text-xl text-[#424242] font-bold tracking-wide'>Cleaning</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6'>
                 <li>Deep cleaning and hygien</li> 
                 <li>Fumingation</li> 
                 
                </ul>
            </div>
          </div>
          <div className='bg-zinc-100 mb-11 duration-500 mt-5 flex items-center flex-col md:mb-5 shadow-md  p-4 rounded-md border border-gray-200 '>
            <div className='w-32 h-32 relative top-[-50px] bg-blue-100 rounded-full flex justify-center items-center mb-2  border border-blue-200'>
               <img src={Cleaning2} className='w-full h-full object-cover object-center  rounded-full border border-gray-500' alt="" />
            </div>
            <div className=' ml-6'>
            <h2 className=' text-xl text-[#424242] font-bold tracking-wide'>Logistics</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6'>
                 <li>Long distance trasportation</li> 
                 <li>Office removal</li> 
                 <li>Relocations</li> 
                 
                </ul>
            </div>
          </div>
          <div className='bg-zinc-100 duration-500 mt-5 flex items-center flex-col md:mb-5 shadow-md  p-4 rounded-md border border-gray-200 '>
            <div className='w-32 h-32 relative top-[-50px]  bg-blue-100 rounded-full flex justify-center items-center mb-2  border border-blue-200'>
               <img src={Cleaning3} className='w-full h-full object-cover object-center rounded-full border border-gray-500' alt="" />
            </div>
            <div className=' ml-6 '>
                <h2 className=' text-xl text-[#424242] font-bold tracking-wide'>Catering</h2>
                <ul className='leading-7 text-sm tracking-wide list-disc pl-6'>
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
