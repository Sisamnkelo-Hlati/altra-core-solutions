import React from 'react'
import Sintech from "../assets/sintech.png"


function Partners() {
  return (
    <div name='partners' className='w-full h-full bg-[#FEFEFE] hidden md:block'>
    <div className='md:max-w-[1240px] w-full mx-auto py-3 px-5 h-full '>
     

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

