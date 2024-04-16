import React from 'react'



function Contact() {
  return (
    <div name='contact' className='w-screen h-full bg-zinc-100  '>
        <div className='md:max-w-[1190px]  mx-auto p-10 h-full '>
            <div className='grid md:grid-cols-2 gap-7 '>
              <div 
              
              >
                <h2 className=' text-3xl text-[#424242] font-bold mb-3 tracking-wider'>Contact <span className='text-[#0504aa]'>Details</span></h2>
                <div>
                    <div className='flex flex-col '>
                        <span className=' text-base text-[#2b2a2a] '>AltraCore Solutions</span>
                        <span className='text-[#2b2a2a] text-sm'>0795665011 / 0632140656</span>
                        <span> <span className='text-[#2b2a2a] text-sm'>e-mail:</span> <a href='mailto:altracore.solutions@gmail.com' className='underline text-blue-800 cursor-pointer'>altracore.solutions@gmail.com</a> </span>
                    </div>
                    <h1 className=' text-xl text-[#2b2a2a] font-bold mt-3 underline duration-300'>Directors</h1>
                    <div className='flex flex-col mt-2'>
                        <span className=' text-base text-[#2b2a2a]'>Luphumlo Mashologu</span>
                        <span>0795665011</span>
                        <span ><span className='text-[#2b2a2a] text-sm'>e-mail:</span> <a href='mailto:luphumlomashologu@gmail.com' className='underline text-blue-800 cursor-pointer'>luphumlomashologu@gmail.com</a> </span>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <span className=' text-base text-[#2b2a2a] '>Aron Ngwenya</span>
                        <span>0632140656</span>
                        <div ><span className='text-[#2b2a2a] text-sm'>e-mail:</span> <a href='mailto:aronngwenya@gmail.com' className='underline text-blue-800 cursor-pointer'>aronngwenya@gmail.com</a> </div>
                    </div>
                </div>
                 
              </div>
              <div
             
               className='sm:mt-10'>
                 <h1 className=' text-3xl text-[#2b2a2a] font-bold tracking-wider mb-3'>Contact Us</h1>
                 <p className='leading-7 tracking-wide mb-3 text-base  text-[#2b2a2a]'>
                  Our team is readily available to assist our clients in anyways possible. For inquiries or quotations <span className='text-gray-800 '>GET IN TOUCH</span>  with us using our contact details or the contact form below.  
                 
                 </p>
                 <div className=' w-full  p-3 rounded-lg shadow-sm  border border-slate-100 -z-10'>
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
                
              </div>
             
            </div>
        </div>
      
    </div>
  )
}

export default Contact
