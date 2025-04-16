import { parse } from 'postcss';
import React, { useState } from 'react'

export default function PricingSection() {

  const [productCount, setProductCount] = useState(1);

  const startPrice = Math.round(4000* (productCount/50))
  const businessPrice = Math.round(7500* (productCount/50))


  return (
    <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>Pricing</div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            {/* starter plan */}
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h3 className='text-xl text-gray-600 mb-4'>starter</h3>
                <p className='text-3xl font-bold mb-6'>$100/mo</p>
            </div>


            {/* business plan */}
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h3 className='text-xl text-gray-600 mb-4'>starter</h3>
                <p className='text-3xl font-bold mb-6'>$100/mo</p>
            </div>
        </div>

        <div>
            <p>{productCount} products</p>
            <div>
                <div>
                    <span></span>
                    <input type="range" min="1" max="50" value={productCount} onChange={(e)=> setProductCount(parseInt(e.target.value))} />
                </div>
            </div>
        </div>
      
    </section>
  )
}


// 2:23:26
