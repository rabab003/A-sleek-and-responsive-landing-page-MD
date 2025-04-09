import React from 'react'

export default function Hero() {
  return (
    <section className='container mx-auto flex flex-col md:flex-row items-center justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>

        {/* left col */}
        <div className='w-full md:w-1/2 space-y-8'>
        <div>
            <span>⭐</span>
            <span>jump start your growth</span>
        </div>
        
        
        </div>

        {/* right col */}
        <div className='w-full md:w-1/2'>left</div>
    </section>
  )
}
