import React from 'react'

export default function ServicesSection() {

    const services = [
        {
          icon: <BsStack className="w-8 h-8 text-indigo-600" />,
          title: "Web Design",
          description: "One for all and all for one, Muskehounds are always ready.",
          link: "#learn-more"
        },
        {
          icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
          title: "Ad-Creatives", 
          description: "Alphabet Village and the subline of her own road.",
          link: "#learn-more"
        },
        {
          icon: <FiSettings className="w-8 h-8 text-red-400" />,
          title: "Automation",
          description: "Little Blind Text should turn around and return.",
          link: "#learn-more"
        },
        {
          icon: <BiTime className="w-8 h-8 text-cyan-400" />,
          title: "Infographics",
          description: "Nothing the copy said could convince her.",
          link: "#learn-more"
        }
      ]
  return (
    <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>

            {/* header */}
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>future of support with new shape</h2>
                <p>Discuss your goals, determine success metrics , Lorem, ipsum.</p>

                <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                        <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                            <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 '></div>
                        </div>
                        <span className='text-gray-600'>ux design content strategy</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                            <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 '></div>
                        </div>
                        <span className='text-gray-600'>development bring</span>

                    </div>
                </div>

                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform-content cursor-pointer transition-colors'>get started</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {services.map((service,index)=>(
                    <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300'>
                        <div className='mb-4'>{service.icon}</div>

                        <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-gray-600 mb-4'>{service.description}</p>
                        <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700 transition-colors'>Learn More</a>

                    </div>
                ))}

            </div>
        </div>
      
    </section>
  )
}
