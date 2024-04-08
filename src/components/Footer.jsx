import React from 'react'
import {Link} from 'react-scroll'
import {FaFacebook, FaTwitter, FaPhone} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import Logo from '../assets/logo6.png'

function Footer() {
  return (
    <div name='footer' className='w-full h-full border-t border-zinc-200'>
    <div className='max-w-[1190px] w-full mx-auto pl-10 pr-10 h-full '>
      <div className='flex justify-between flex-wrap'>
      <div className=''>
      <img src={Logo} alt="" className='h-[150px] w-[270px] object-contain block relative right-14 '/>   
        <p className='text-[#2b2a2a] text-sm w-60 leading-7 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium </p>
       
       </div>
       <div className=''>
         <h1 className='text-xl text-[#2b2a2a] mt-12 mb-3'>Navigations</h1>
       <ul className='md:flex flex-col gap-2 '>
            <li className='text-[#2b2a2a] text-sm  mb-2  cursor-pointer hover:text-[#103cb5] duration-500'><Link to='home' smooth={true} offset={-56}  duration={500}>Home</Link></li>
            <li className='text-[#2b2a2a] text-sm  mb-2  cursor-pointer hover:text-[#103cb5] duration-500'><Link to='partners' smooth={true} offset={-56} duration={500}>Distributors</Link></li>
            <li className='text-[#2b2a2a] text-sm  mb-2  cursor-pointer hover:text-[#103cb5] duration-500'><Link to='about' smooth={true} offset={-56} duration={500}>About</Link></li>
            <li className='text-[#2b2a2a] text-sm  mb-2  cursor-pointer hover:text-[#103cb5] duration-500'><Link to='services' smooth={true} offset={-56}  duration={500}>Services</Link></li>
            <li className='text-[#2b2a2a] text-sm   cursor-pointer hover:text-[#103cb5] duration-500'><Link to='contact' smooth={true} offset={-56}  duration={500}>Contact</Link></li>
        </ul>
       </div>
       <div>
       <h1 className='text-xl text-[#2b2a2a] mt-12  mb-3'>Contacts</h1>
       <ul className='md:flex flex-col  gap-2  text-base md:text-xl '>
            <li className='text-[#2b2a2a] text-sm md:text-base mb-2 flex items-center gap-x-2'><HiMail className='text-xl'/> altracore.solutions@gmail.com</li>
            <li className='text-[#2b2a2a] text-sm md:text-base mb-2 flex items-center gap-x-2'><FaPhone className='text-sm'/> +27 79566-5011</li>
            <li className='text-[#2b2a2a]  text-sm md:text-base mb-2 flex items-center gap-x-2'><FaPhone className='text-sm'/> +27 632140-656</li>
        </ul>
        <div className='flex gap-5 text-xl text-[#2b2a2a] mt-3'>
          <FaFacebook className='hover:text-2xl cursor-pointer'/>
          <FaTwitter className='hover:text-2xl cursor-pointer'/>
        </div>
        
       </div>
       
      </div>
      
    </div>
  
</div>
  )
}

export default Footer