import React from 'react'
import {motion} from "framer-motion"


function Contact() {
  return (
    <div name='contact' className='w-full h-full bg-zinc-100  '>
        <div className='max-w-[1190px] w-full mx-auto p-10 h-full '>
            <div className='grid md:grid-cols-2 gap-7 '>
              <motion.div 
               initial = {{x: -80, opacity: 0}}
               whileInView = {{x: 0, opacity: 1}}
               transition = {{ delay: 0.5, duration: 2}}
              >
                <h2 className=' text-3xl text-[#424242] font-bold mb-3 tracking-wider'>Contact <span className='text-[#0504aa]'>Details</span></h2>
                <div>
                    <div className='flex flex-col '>
                        <span className=' text-base text-[#424242] '>AltraCore Solutions</span>
                        <span>0795665011 / 0632140656</span>
                        <span> <span className='text-zinc-700'>e-mail:</span> <span className='underline text-blue-800 '>altracore.solutions@gmail.com</span> </span>
                    </div>
                    <h1 className=' text-xl text-[#424242] font-bold mt-3 underline duration-300'>Directors</h1>
                    <div className='flex flex-col mt-2'>
                        <span className=' text-base text-gray-800 '>Luphumlo Mashologu</span>
                        <span>0795665011</span>
                        <span ><span className='text-zinc-700'>e-mail:</span> <span className='underline text-blue-800 '>luphumlomashologu@gmail.com</span> </span>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <span className=' text-base text-gray-800 '>Aron Ngwenya</span>
                        <span>0632140656</span>
                        <div ><span className='text-zinc-700'>e-mail:</span> <span className='underline text-blue-800 '>aronngwenya@gmail.com</span> </div>
                    </div>
                </div>
                 
              </motion.div>
              <motion.div
               initial = {{x: 80, opacity: 0}}
               whileInView = {{x: 0, opacity: 1}}
               transition = {{ delay: 0.5, duration: 2}}
               className='sm:mt-10'>
                 <h1 className=' text-3xl text-[#424242] font-bold tracking-wider mb-3'>Contact Us</h1>
                 <p className='leading-7 tracking-wide mb-3 text-sm  '>
                  Our teams are readily available to assist our clients in anyways possible. For inquiries or quotations <span className='text-gray-800 '>GET IN TOUCH</span>  with us using our contact details or the contact form below.  
                 
                 </p>
                 <div className=' w-full  p-3 rounded-lg shadow-sm  border border-slate-100'>
                  <form action="https://getform.io/f/lbkommqb" method='POST' className=' flex flex-col'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-evenly gap-3 '>         
                       <input type="text" name='name' placeholder='Enter your name' className='w-full p-2 rounded-lg border border-zinc-300 outline-slate-400'/>
                       <input type="text" name='surname' placeholder='Enter your surname' className='w-full p-2 rounded-lg border border-zinc-300 outline-slate-400'/>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-evenly gap-3 mt-3 mb-3'>
                       <input type="email" name='email' placeholder='Enter email address' className='w-full p-2 rounded-lg border border-zinc-300 outline-slate-400' />
                       <input type="text" name='number' placeholder='Enter phone number' className='w-full p-2 rounded-lg border border-zinc-300 outline-slate-400'/>
                    </div>
                    <textarea name="message"  id="" cols="30" rows="5" placeholder='Enter your message' className='w-full rounded-lg p-2 border border-zinc-300 outline-slate-400'></textarea>
                    <button type='submit' className='bg-[#103cb5] cursor-pointer text-white py-2 px-4 border-none rounded-lg outline-none hover:shadow-2xl hover:bg-[#1018B5] hover:text-white duration-1000 mt-4 self-center font-bold'>Submit</button>
                    
          
                    

                  </form>
                 </div>
                
              </motion.div>
             
            </div>
        </div>
      
    </div>
  )
}

export default Contact
