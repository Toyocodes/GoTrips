import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Destination = ({items}) => {

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    
      <div className="destination-container mt-[-20px] md:mt-[-50px] grid grid-cols-1 gap-6 
      xs:grid-cols-1 px-[15%] sm:grid-cols-2 sm:px-4
      md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 2xl:gap-8 md:px-8">
        
    
        {
          items.map(({id,image,price,title,description,days,nights})=>{
            return (
             
              <div key={id} className="dest-box" data-aos="fade-up-left">
                  <div className='relative'>
                    <img src={image} alt="" className='dest-image mb-10'/>
                    <div className="price absolute bottom-[-10%] text-white rounded-[50%] 
                    p-4 py-5 ml-8 text-[1.3rem] bg-color-bg">${price}</div>
                  </div>
                  <div className="dest-content px-4">
                      <h2 className='text-[1.5rem] pb-3'>{title}</h2>
                      <p className='text-[.9rem]'>{description}</p>
                      
                      <div className='dest-bottom flex items-center justify-center space-x-2 sm:space-x-2 mt-2 text-sm'>
                        <div className='days'> 
                            {days} 
                        </div>
                        <div className='night'>
                            {nights}
                        </div>
                        <div className='book'>
                            <a href="#book">Book now</a>
                        </div>
                      </div>
                  </div>
                </div>  
            )
          })
        } 
      </div>
    
    
  )
}

export default Destination