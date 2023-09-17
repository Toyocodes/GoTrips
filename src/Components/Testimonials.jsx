import React, {useEffect} from 'react'
import Avatar1 from '../../assets/avatar1.png'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper React components version 8.4.6
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import {Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/package.json';



const data = [
  {
    avatar: Avatar1,
    name: "persona",
    review:
      "Toyosi is one of the best teammates I have ever worked with, a fast learner who provides help to anyone in the team if needed, also, her passion for design makes her standout as a front-end developer",
  },
  {
    avatar: Avatar2,
    name: "person b",
    review:
      "I was priviledged to be her mentor at some point. What is more intriguing about Toyosi is how attentive she is and the timely effort she puts into delivering her tasks.",
  },
  {
    avatar: Avatar3,
    name: "person c",
    review:
      "Working with Toyosi has been very amazing, I look forward to working with her more on numerous projects.",
  },
  {
    avatar: Avatar4,
    name: "person d",
    review:
      "I had the chance to work with Toyosi on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills. She is always creative with writing codes and shows a nice attitude towards team members.",
  },
];

const Testimonials = () => {

  //aos animation
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container" data-aos="zoom-in"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client-avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials