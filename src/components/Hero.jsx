import React from 'react'
import {Link} from 'react-scroll'
import Workplace from "../assets/construction3.jpg"
import {motion} from "framer-motion"



function Hero() {
  return (
    <div name='home' className=' hero w-full h-screen relative bg-zinc-800'>
    <img className=' absolute top-0 left-0 w-full h-[300px] md:h-[290px] object-cover object-center' src={Workplace} alt="" />
    <div className=' absolute top-0 left-0 bg-zinc-900/80  w-full h-[300px]'/>
      < motion.div
      initial = {{y: 80, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition = {{ delay: 0.5, duration: 2}}
       className='  absolute top-0 left-0  w-full mx-auto h-full flex justify-center items-center px-20'>
       <div className='  text-center py-10 md:py-20 px-20 mx-8  '>
        <h1 className='text-[#103cb5] mb-3 text-base '>Multi-purpose organisation</h1>
       <h1 className='text-white font-bold text-3xl md:text-7xl  px-5 pb-2  tracking-wider mb-3 w-[400px] md:w-full '>  <span className=''>ALTRA</span>CORE SOLUTIONS</h1>
        <h2 className='text-zinc-500  py-2 text-base md:pl-7  md:text-2xl leading-7 tracking-wide max-w-[700px] mx-auto'>We offer constructive solutions to the satisfaction of your construction, cleaning, logistics and catering service needs </h2>
        <button className='bg-[#103cb5] mt-4 cursor-pointer text-white py-2 px-4 border-none rounded-lg outline-none hover:shadow-2xl hover:bg-[#1018B5] hover:text-white duration-1000'><Link  to='about' smooth={true} offset={-56} duration={500}>Learn More</Link></button>
       
       </div>
      </motion.div>
    </div>
  )
}

export default Hero
