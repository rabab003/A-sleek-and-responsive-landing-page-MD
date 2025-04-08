import React, { useState } from 'react'

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  const navLinks = [
    {href: "#home", label:"Home"},
    {href: "#about", label:"About Us"},
    {href: "#services", label:"Our Services"},
    {href: "#testimonials", label:"Testimonials"},
  ]
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* logo */}
            <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
                <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
            </div>
            {/* desktop navigation */}
            <div>

              <div>{
                navLinks.map((link, index)=>(
                  <a className="text-sm font-medium relative"
 key={index} 
                  href={link.href}>
                    {link.label}
                    </a>
                ))
              }</div>
        
            </div>
            {/* get in touch btn */}
            {/* mobile menu */}

        </div>

    </nav>
  )
}
