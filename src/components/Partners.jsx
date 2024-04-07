import React from 'react'
import Sintech from "../assets/sintech.png"
import {motion} from "framer-motion"

function Partners() {
  return (
    <div name='partners' className='w-full h-full bg-zinc-50'>
    <div className='max-w-[1240px] w-full mx-auto p-10 h-full '>
      < motion.div
       initial = {{y: -80, opacity: 0}}
       whileInView = {{y: 0, opacity: 1}}
       transition = {{ delay: 0.5, duration: 2}}
       className='md:flex md:flex-col md:items-center md:max-w-[600px] md:mx-auto'>
         <h2 className='mb-3 text-3xl text-[#424242] font-bold tracking-wider'>Our <span className='text-[#0504aa]'>Distributors</span></h2>
        
      </motion.div>

      < motion.div
       initial = {{y: 80, opacity: 0}}
       whileInView = {{y: 0, opacity: 1}}
       transition = {{ delay: 0.5, duration: 2}}
       className='flex md:justify-center items-center my-3 flex-wrap gap-3'>
        <img src={Sintech} alt="" className='h-[40px] md:h-[60px]  object-contain'/>
        <img src={Sintech} alt="" className='h-[40px] md:h-[60px]  object-contain' />
        <img src={Sintech} alt="" className='h-[40px] md:h-[60px]  object-contain' />
      </motion.div>
    


    </div>
   
  
</div>
  )
}

export default Partners

