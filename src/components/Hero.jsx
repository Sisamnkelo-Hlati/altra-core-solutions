import React from 'react'
import {Link} from 'react-scroll'





function Hero() {
  return (
    <div name='home' className=' w-screen h-screen relative bg-zinc-700'>
    <img className=' absolute top-0  w-full h-[50%] md:h-[290px] object-cover object-center' src="/images/construction3.jpg"  alt="" />
    <div className=' absolute top-0 bg-zinc-900/80  w-full h-[50%] md:h-[47%]'/>
      < div
       className='  absolute top-0 left-0 w-full h-full flex justify-center items-center  '>
           <div className=' text-center md:py-20 px-3 w-screen'>
        <h1 className='text-[#103cb5] mb-3 text-base '>Multi-purpose organisation</h1>
       <h1 className='text-white font-bold text-2xl md:text-7xl  px-5 pb-2 tracking-wide md:tracking-wider mb-3  md:w-full '>  <span className=''>ALTRA</span>CORE SOLUTIONS</h1>
        <h2 className='text-zinc-600 mt-16  py-2 px-5 md:px-2 text-base md:pl-7  md:text-2xl leading-7 tracking-wide md:max-w-[900px] md:mx-auto'>We offer constructive solutions to the satisfaction of your construction, cleaning and logistics service needs </h2>
        <button className='bg-[#103cb5] mt-4 cursor-pointer text-white py-2 px-4 border-none rounded-lg outline-none hover:shadow-2xl hover:bg-[#1018B5] hover:text-white duration-1000'><Link  to='about' smooth={true} offset={-56} duration={500}>Learn More</Link></button>
       
       </div>
      </div>
    </div>
  )
}

export default Hero
