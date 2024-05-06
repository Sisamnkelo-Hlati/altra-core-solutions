import React from 'react'
import Construction from "../assets/hero1.jpg"
import Workplace from "../assets/workplace1.jpg"


function About() {
 
  return (
    <div name='about' className='w-auto h-full bg-[#DDEEFF]'>
        <div className='max-w-[1190px] w-full mx-auto py-5 px-5  '>
       
            <div className='grid md:grid-cols-2 gap-2 md:gap-7 mb-3'>
              <div >
                 < h1
                
                  className=' text-2xl text-zinc-600 mb-2 font-semibold  tracking-wide '>
                    Learn about <span className='text-[#0504aa]'>Us</span>
                 </h1>
                 <p
                
                  className='leading-7 tracking-wide mb-3 text-zinc-600 text-sm md:text-base'>
                  AltraCore Solutions was formed in 2019 with the objective of establishing a sustainable and continually improving company, which is able to provide predictable and quality services to our clients while concurrently fostering lasting relationships with professionals, local councils, government bodies, trade contractors and suppliers at large.
                  
                  
                 </p>
                
              </div>
              <div className=' h-[200px] md:h-[406px] flex items-center justify-center  '
              >
                
                 <img src={Workplace} alt=""  className='w-full md:w-[400px] h-[200px] md:h-[306px] object-cover rounded-md '/>
              </div>
             
            </div>
            <div className='grid md:grid-cols-2 gap-2 md:gap-7  bg-[#FEFEFE] rounded-md mb-2 px-2'>

            <div className=' mt-3 md:mt-0 h-[200px] md:h-[406px] flex items-center justify-center  '>
                
                <img src={Construction} alt=""  className='w-full md:w-[400px] h-[200px] md:h-[306px] object-cover rounded-md md:mt-14'/>
             </div>
              <div >
               
                 <h1
                 
                  className=' ml-2 md:ml-0 text-2xl text-zinc-600 mb-2 font-semibold mt-5 tracking-wide '>
                 Vision and Mission
                 </h1>
                 <p
                 
                  className='leading-7  tracking-wide mb-2 text-zinc-500 text-sm md:text-base ml-2'>
                  Our vision and mission is to grow the company into a well establised giant through innovative means, delivery of quality services and client satisfaction through formidable partnerships with intergrity and good business values.
                 
                 </p>
                 <button type='button' className='border border-[#103cb5]  cursor-pointer text-[#103cb5] py-2 px-4  rounded-lg outline-none hover:shadow-2xl hover:bg-[#1018B5] hover:text-white duration-1000 mt-4 mb-3 md:mb-0 ml-2 self-center font-bold'>Learn More</button>

              </div>
            
             
            </div>
        </div>
      
    </div>
  )
}

export default About
