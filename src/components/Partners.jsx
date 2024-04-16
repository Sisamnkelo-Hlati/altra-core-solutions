import React from 'react'
import Sintech from "../assets/sintech.png"


function Partners() {
  return (
    <div name='partners' className='w-full h-full bg-zinc-100'>
    <div className='md:max-w-[1240px] w-full mx-auto p-10 h-full '>
      < div className='md:flex md:flex-col md:items-center md:max-w-[600px] md:mx-auto'>
         <h2 className='mb-3 text-3xl text-[#424242] font-bold tracking-wider'>Our <span className='text-[#0504aa]'>Distributors</span></h2>
      </div>

      < div className='flex md:justify-center items-center my-3 flex-wrap gap-3'>
        <img src={Sintech} alt="" className='h-[30px] md:h-[60px]  object-contain'/>
        <img src={Sintech} alt="" className='h-[30px] md:h-[60px]  object-contain' />
        <img src={Sintech} alt="" className='h-[30px] md:h-[60px]  object-contain' />
      </div>
    


    </div>
   
  
</div>
  )
}

export default Partners

