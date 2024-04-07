import React from 'react'
import Logo from '../assets/logo5.jpg'

function Header() {
  return (
    <div className='  w-full py-3 bg-zinc-800 ' >
      <div className='max-w-[1240px] w-full mx-auto flex justify-center  px-10'>
        <img src={Logo} alt="" className='h-[200px] ' />
      </div>  
    </div>
  )
}

export default Header
