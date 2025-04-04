import React from 'react'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* logo */}
            <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-65'></div>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-65'></div>
            </div>
            {/* desktop navigation */}
            {/* get in touch btn */}
            {/* mobile menu */}

        </div>

    </nav>
  )
}
