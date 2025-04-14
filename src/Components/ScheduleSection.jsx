import React from 'react';
import scheduleImg from "../assets/stats.webp"
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function ScheduleSection() {
  return (
    <section className='max-w-7xl m-auto py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/* left */}
            <div className='md:w-1/2 w-full'>
                <img src={scheduleImg} alt="" className='w-full h-auto' />
            </div>
             {/* left */}
             <div className='md:w-1/2 w-full'>
                <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Stramline your business
                <br />
                widt smart schedule solution
                </h2>

                <p className='text-gray-600 mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt unde, nulla, cupiditate asperiores officiis in, commodi omnis aspernatur velit blanditiis iusto saepe molestiae! Modi facilis accusantium quaerat minima dolores?</p>

                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>explore schedule features
                    <IoIosArrowRoundForward className='size-8'/>
                </a>
             </div>
        
        </div>
      
    </section>
  )
}
