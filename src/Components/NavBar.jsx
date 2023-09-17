import React, {useState, useEffect} from 'react'
import {BsFillSendFill} from 'react-icons/bs'
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'
import Modal from './Modal'
import AOS from 'aos';
import 'aos/dist/aos.css';


const NavBar = () => { 

  useEffect(() => {
    AOS.init();
  }, [])
  
  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(false);

  
  const handleClick = () =>{
    setNav(!nav)
  }

  const toggleLoginForm = () => {
    // const loginForm = document.querySelector('.login-form');
    // loginForm.classList.toggle('openLoginForm'); this will work too
    setLogin(!login)

    if (!login) {
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  //for the modal form
  // const [submittedData, setSubmittedData] = useState(''); //use state to display data on webpage
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // setSubmittedData(e.target.); //to get the data and display on webpage
    alert('You have successfully Logged in!');
    // POST DATA API HERE
    toggleLoginForm(); //modal closes
    
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`App ${scrolling ? 'scrolling' : ''}`}>

      <nav className='navbar flex justify-between items-center py-4 px-12 md:px-18 lg:px-20 2xl:px-20 fixed left-0 right-0 z-10'>
      
      <div className='logo flex justify-center items-center space-x-1 text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl'>
        <BsFillSendFill className='text-white '/>
        <h2 className='text-white'>GoTrips</h2>
      </div>

      <div className='navLinks hidden md:flex items-center space-x-10 text-[14px] font-[500] text-white'>
        <li><a href="#home" className='hover:text-orange-400 hover:font-bold'>HOME</a></li> 
        <li><a href="#destination" className='hover:text-orange-400 hover:font-bold'>DESTINATION</a></li>
        <li><a href="#offer" className='hover:text-orange-400 hover:font-bold'>ABOUT</a></li> 
        <li><a href="#gallery" className='hover:text-orange-400 hover:font-bold'>GALLERY</a></li>
        <li><a href="#blog" className='hover:text-orange-400 hover:font-bold'>BLOG</a></li> 
      </div>

      <button
        onClick={toggleLoginForm}
        className="hidden md:block text-[13px] ease-in duration-300
            font-bold py-2 px-6 bg-white text-colorPrimary hover:bg-colorPrimary hover:text-white rounded-2xl"
      >
        Login
      </button>

   
      {/* MODAL SECTION */}
      <Modal isOpen={login} onClose={toggleLoginForm} onSubmit={handleSubmit}>
        <form onClick={(e) => e.stopPropagation()} className="login-form" data-aos="zoom-in-left">
          <h3>Login now</h3>
          <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder="your email" className="login-box" />
          <input onChange={handleChange} value={formData.password} name='password' type="password" placeholder="your password" className="login-box" />
          <p>
            forgot password <a href="#">click here</a>
          </p>
          <p>
            don't have an account <a href="#">create now</a>
          </p>
          <input type="submit" onClick={handleSubmit} value="Login now" className="login-btn" />
        </form>
      </Modal>

    
      {/* hamburger */}
      
      <div onClick={handleClick} className='menubtn flex justify-end md:hidden z-[100]'>
        {nav ? (<FaTimes size={35} className='text-white hover:text-orange-400 cursor-pointer ease-in duration-300'/>)
         : (<FaBars size={35} className='text-white hover:text-blue-400 cursor-pointer ease-in duration-300'/>)}
        
      </div>

      {/* mobile menu */}
      <div onClick={handleClick} 
        className ={
        nav 
        ? 'md:hidden overflow-y-hidden absolute z-50 left-0 top-0 h-screen w-full ease-in duration-300 text-md font-bold text-white bg-gradient-to-r from-colorPrimary to-blue-600 px-8 py-24 flex flex-col' 
        : 'absolute top-0 left-[-100%] h-screen'
      }>
          <ul id="menuLinks" className="pt-2 space-y-10 w-full h-full text-center cursor-pointer">
             <li><a href="#home" className='hover:text-orange-400 hover:font-bold hover:ml-1 ease-in duration-300'>HOME</a></li> 
             <li><a href="#destination" className='hover:text-orange-400 hover:font-bold hover:ml-1 ease-in duration-300'>DESTINATION</a></li> 
             <li><a href="#offer" className='hover:text-orange-400 hover:font-bold hover:ml-1 ease-in duration-300'>ABOUT</a></li> 
             <li><a href="#gallery" className='hover:text-orange-400 hover:font-bold hover:ml-1 ease-in duration-300'>GALLERY</a></li> 
             <li><a href="#blog" className='hover:text-orange-400 hover:font-bold hover:ml-1 ease-in duration-300'>BLOG</a></li> 
             <li><a href="#contact" className='text-[14px] text-[#000] bg-white ease-in duration-300
              font-bold py-3 px-6 hover:bg-orange-400
              hover:text-white rounded-3xl'>CONTACT</a></li> 
              <button
        onClick={toggleLoginForm}
        className="text-[16px] text-[#000] bg-white ease-in duration-300
        font-bold py-3 px-10 hover:bg-orange-400
        hover:text-white rounded-3xl">Login</button>
          </ul> 
      </div>
    
    </nav>
    </div>
      
    
  )
}

export default NavBar