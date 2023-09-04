import React,{useEffect} from "react";
import {BiWorld} from 'react-icons/bi'
import {FaThumbsUp} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
// import Img from '../assets/destination-4.jpg'


const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section id='about' className='mt-20 lg:mt-32'>

        <div>
            <h2 className='text-center text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl'> What We Are Offering</h2>
            <p className='text-center text-sm pt-1 p-8 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at.</p>
        </div>
    
        <div className='about-section flex flex-col md:flex-row gap-4 text-white mx-20'>
            <div data-aos="fade-up"  className='abt-card bg-gradient-to-r from-colorPrimary to-blue-600 p-6'>
                <div className="flex items-center justify-center mb-3">
                    <AiFillHeart  className="text-5xl  bg-orange-500 text-white rounded-full px-3" /> 
                </div>
                <h2 className='text-center text-[16px]'>BEST PRICE <br /> GUARANTEED</h2>
                <p className='text-sm font-light leading-6 text-center pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, eos. In atque deserunt tenetur officiis.</p> 
            </div>
            <div className='abt-card bg-blue-400 p-6'>
                <div className="flex items-center justify-center mb-3 ">
                    <BiWorld  className="text-5xl bg-orange-500 text-white rounded-full px-3" /> 
                </div>
                <h2 className='text-center text-[16px]'>WIDE VARIETY OF<br />DESTINATIONS</h2> 
                <p className='text-sm font-light leading-6 text-center pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, numquam. Quasi ut odit eos soluta?</p>
            </div>
            <div className='abt-card bg-gradient-to-r from-colorPrimary to-blue-600 p-6'>
                <div className="flex items-center justify-center mb-3">
                    <FaThumbsUp  className="text-5xl  bg-orange-500 text-white rounded-full px-3" /> 
                </div>
                <h2 className='text-center text-[16px]'>HIGHLY QUALIFIED<br /> SERVICE</h2> 
                <p className='text-sm font-light leading-6 text-center pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro impedit velit totam doloribus ad veniam?</p>
            </div>
        </div> 

        {/* <div className='absolute items-center justify-center
            top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='underline h-2 w-full text-white'></div>
            <button>
                <a href="" className='text-[15px] text-[#000] bg-white ease-in duration-300
                    font-bold py-2 px-6 hover:opacity-80 rounded-2xl'>CONTACT US</a>
            </button>
        </div> */}
       
    </section>
  )
}

export default About