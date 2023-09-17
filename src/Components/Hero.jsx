import React, {useState, useEffect} from 'react'
import HeroBg from '../assets/hero2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])


const [bookings, setBookings] = useState({
    where: '',
    when: '',
    guests:'',
});

const handleChange = (e) => {
  const { name, value} = e.target;
  setBookings((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  
};

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Form data:", bookings);
  alert('Hi there! Your Booking is successful!');
  setBookings({
    where: '',
    when: '',
    guests: '',
  });
}

  
  return (
      <div className='hero-container' id='home'>
        <div className="relative h-[100vh] bg-gradient-to-b from-black via-black to-transparent 
          bg-fixed bg-cover bg-center bg-no-repeat">
        
          <div className="overlay absolute inset-0 bg-black opacity-40"></div>
          
          <img src={HeroBg} alt="Hero Background" className="h-[100vh] w-full bg-cover bg-center" />

          
          <div className='heroSection w-full'>

              <div className="heroContent mt-[-20px] text-white">
                <h2 className="text-[2.4rem] sm:text-4xl md:text-[2.5rem] lg:text-6xl font-semibold font-mono" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">ENJOY YOUR DREAM<br/> VACATION...</h2>
                <h5 className='text-lg md:text-base lg:text-xl mt-4 mb-8' data-aos="fade-up-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">With GoTrips, we take you to your dream destination</h5>
                <a href="#" className='btn text-base lg:text-lg w-full text-white 
                bg-gradient-to-r from-colorPrimary to-blue-600 font-bold duration-500' data-aos="fade-left">Book Now</a>
              </div>

              <form onSubmit={handleSubmit} className='heroForm bg-colorPrimary mt-20 md:mt-5 py-4 px-2 
              lg:px-8 xs:px-10 lg:w-96 lg:ml-12' data-aos="zoom-in">
                
                  <div className='text-white text-center mb-6 text-[1.5rem]' id='book'>
                    <h2>BOOK AN HOLIDAY</h2>
                  </div>
                  
                  <div className='flex flex-col gap-4 px-4'>

                    <div className='flex justify-between items-center gap-4'>
                      <label htmlFor="where" className='font-semibold text-white'>Where To</label>
                      <input type="text" onChange={handleChange} value={bookings.where} name='where' placeholder='destination' className='border px-2 py-1 rounded-md w-full'/>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                      <label htmlFor="when" className='font-semibold text-white pr-4'>When</label>
                      <input type="date" required onChange={handleChange} value={bookings.when} name='when' placeholder='select date' className='border px-2 py-1 rounded-md w-full'/>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                      <label htmlFor="howMany" className='font-semibold text-white'>How many</label>
                      <input type="number" required onChange={handleChange} value={bookings.guests} name='guests' placeholder='number of guests' className='border px-2 py-1 rounded-md w-full'/>
                    </div>

                    <div className='flex justify-center mt-2'> 
                      <button className='btn text-sm lg:text-[1.1rem] bg-white font-bold py-2 px-4 
                      lg:hover:border-2 border border-black hover:bg-gradient-to-r from-colorPrimary to-blue-600 
                      hover:text-white hover:border-0 lg:hover:text-white lg:hover:border-white hover:bg-transparent rounded-xl'>Book now</button>
                    </div>
                    
                  </div>
              </form>
          
          </div>


        </div>
      </div>

  )
}

export default Hero
