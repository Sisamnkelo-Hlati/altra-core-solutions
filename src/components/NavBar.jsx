import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo6.png'
import {Link} from 'react-scroll'



function NavBar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=' h-[70px] w-full  py-3 fixed top-0 z-30 bg-zinc-100 shadow-sm ' >
        <div className=' md:max-w-[1240px] w-full  mx-auto flex items-center justify-between px-10'>
         <div className='w-[270px] h-[58px] relative right-6 md:right-1 block'>
         <img src={Logo} alt="logo" className='h-[108px] object-contain object-top w-full relative left-[-50px] md:right-3 -top-6'/>  
         </div>   
          
        
        <ul className='md:flex items-center gap-2 text-[#2b2a2a]  text-base hidden'>
            <li className='cursor-pointer hover:text-[#3a5dbd]  duration-500'><Link to='home' activeClass='active' spy= {true} smooth={true} offset={-70}  duration={500}>Home</Link></li>
            <li className='cursor-pointer hover:text-[#3a5dbd]  duration-500'><Link to='partners' activeClass='active' spy= {true} smooth={true} offset={-70} duration={500}>Distributors</Link></li>
            <li className='cursor-pointer hover:text-[#3a5dbd]  duration-500'><Link to='about' activeClass='active' spy= {true}  smooth={true} offset={-70} duration={500}>About</Link></li>
            <li className='cursor-pointer hover:text-[#3a5dbd]  duration-500'><Link to='services' activeClass='active' spy= {true}  smooth={true} offset={-70}  duration={500}>Services</Link></li>
            <li className='cursor-pointer hover:text-[#3a5dbd]  duration-500'><Link to='contact' activeClass='active' spy= {true}  smooth={true} offset={-70}  duration={500}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
            {!nav ? <FaBars size={20} className='text-[#3a5dbd] '/> : <FaTimes size={20} className='text-[#3a5dbd] '/>}
        </div>
        <div className={nav ? 'fixed top-[70px] left-0  bg-zinc-700 w-[100%] h-screen duration-1000 md:hidden z-40' : 'fixed left-[-100%]  duration-1000'}>
            <div>
           
            </div>
            <ul className='pt-24 flex flex-col   gap-4'>
            <Link onClick={handleNav} to='home' smooth={true} offset={-56}  duration={500}><li className='text-white  uppercase border-b border-gray-300 pb-2 pl-10 cursor-pointer hover:text-[#3a5dbd] hover:text-xl duration-500'>Home</li></Link>
            <Link onClick={handleNav} to='partners' smooth={true} offset={-56}  duration={500}> <li className='text-white uppercase border-b border-gray-300 pb-2 pl-10 cursor-pointer hover:text-[#3a5dbd] hover:text-xl duration-500'> Distributors</li></Link>
            <Link onClick={handleNav} to='about' smooth={true} offset={-56}  duration={500}><li className='text-white uppercase border-b border-gray-300 pb-2 pl-10 cursor-pointer hover:text-[#3a5dbd] hover:text-xl duration-500'>About</li></Link>
            <Link onClick={handleNav} to='services' smooth={true} offset={-56}  duration={500}><li className='text-white uppercase border-b border-gray-300 pb-2 pl-10 cursor-pointer hover:text-[#3a5dbd] hover:text-xl duration-500'>Services</li></Link>
            <Link onClick={handleNav} to='contact' smooth={true} offset={-56}  duration={500}><li className='text-white uppercase pb-2 pl-10 cursor-pointer hover:text-xl duration-500'>Contact</li></Link>

            </ul>
        </div>
        
        </div>
    
    </div>
  )
}

export default NavBar
