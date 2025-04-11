import React from 'react'
import { RiFacebookBoxFill } from 'react-icons/ri';
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meunies.png'
import sitepoint from '../assets/sitepoint.png'



export const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint]


  return (
    <div className='w-full overflow-hidden container gap-8 px-5 mx-auto flex py-20 sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 text-xl font-semibold'> Proud partner at <br /> Hubspot & segment</div>
    
       <div className='flex animate-marquee whitespace-nowrap'>
        {logos.map((logo,index)=>(
          <img src={logo} key={index} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
        ))}

        {logos.map((logo,index)=>(
          <img src={logo} key={index} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
        ))}
      
      </div> 
    </div>
  )
}
