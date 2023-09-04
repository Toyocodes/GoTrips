import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {BsFacebook, BsInstagram, BsLinkedin, BsFillShareFill} from 'react-icons/bs'

const TopBar = () => {
  return (
   
      <div className='flex justify-between items-center py-2 px-16 lg:px-32 bg-gradient-to-r from-colorPrimary to-blue-600 text-white'>
          <div className='top-socials flex justify-center items-center space-x-8'>
              <div className='flex items-center'>
                <BsFillShareFill className='mr-1'/>
                <span className='text-xs mx-1'> Our Socials</span>
              </div>
            <div className='flex space-x-2 ease-in duration-300'>
                <BsFacebook className='hover:text-xl'/>
                <BsInstagram className='hover:text-xl'/>
                <BsLinkedin className='hover:text-xl'/>
            </div>
          </div>

          <div className='flex justify-center items-center space-x-8 text-xs'>
              <div className='flex items-center'>
                <AiFillPhone className='mr-1' />
                <span>Call us now 1-823-456-789</span>
              </div>
              {/* <div className='text-[11px] text-[#fff] bg-eastern-blue ease-in duration-300
              font-bold py-2 px-2 hover:bg-white hover:text-eastern-blue rounded'>CONTACT US</div> */}
              {/* bg-gradient-to-r from-eastern-blue to bg-color-primary hover:bg-blue-700 */}
          </div>
      </div>
   
  )
}

export default TopBar