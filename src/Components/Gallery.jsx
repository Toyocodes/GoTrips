import React, {useEffect} from 'react'
import Img1 from '../assets/gallery-1.jpg'
import Img2 from '../assets/gallery-2.jpg'
import Img3 from '../assets/gallery-3.jpg'
import Img4 from '../assets/gallery-4.jpg'
import Img5 from '../assets/gallery-5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='gallery' className='gallery-section  max-w-[1024px] m-auto w-full px-4 py-12 lg:mt-20'>
      <h2 className='text-center mt-[-260px] sm:mt-[-330px] md:mt-[-330px] lg:mt-[1rem] 
      text-3xl sm:text-3xl lg:text-3xl 2xl:text-4xl' data-aos="flip-left"> Gallery</h2>
      <p data-aos="fade-right" className='text-center text-sm pt-1 p-8 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at.</p>

      <div className='grid sm:grid-cols-5 gap-2 mx-8' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className='sm:col-span-3 col-span-2 row-span-2 hover:opacity-90' data-aos="flip-left">
          <img className='w-full h-full lg:h-[428px] object-cover' src={Img2} alt=""/>
        </div>
        <div data-aos="fade-up-right">
          <img className='w-full h-full object-cover hover:opacity-90' src={Img1} alt="" />
        </div>
        <div data-aos="fade-left"> 
          <img className='w-full h-full object-cover hover:opacity-90' src={Img3} alt="" />
        </div>
        <div data-aos="fade-right">
          <img className='w-full h-full object-cover hover:opacity-90' src={Img4} alt="" />
        </div>
        <div data-aos="fade-up"> 
          <img className='w-full h-full object-cover hover:opacity-90' src={Img5} alt="" />
        </div>
      </div>
    
    </section>
  )
}

export default Gallery