import React, { Component } from 'react'
import Img1 from '../assets/destination-1.jpg'
import Img2 from '../assets/destination-2.jpg'
import Img3 from '../assets/destination-3.jpg'
import Img4 from '../assets/destination-4.jpg'
import Img5 from '../assets/destination-5.jpg'
import Img6 from '../assets/destination-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
      image: Img1,
      name: "Dubai",
      desc: 'Sneak peek', 
    },
    {
      image: Img2,
      name: "Spectacular Seychelles",
      desc: 'Sneak peek',
    },
    {
      image: Img3,
      name: "Vietnam",
      desc: 'Sneak peek',
    },
    {
      image: Img4,
      name: "Sparking Maldives",
      desc: 'Sneak peek',
    },
    {
      image: Img5,
      name: "Athen, Greece",
      desc: 'Sneak peek',
    },
    {
      image: Img6,
      name: "Sparking Maldives",
      desc: 'Sneak peek',
    },
  ];

export default class CarouselSection extends Component {
  componentDidMount() {
    AOS.init();
}

    render() {
        const settings = {
            className: "center",
            autoplay: true,
            focusOnSelect: true,
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            slidesToScroll: 2,
            speed: 500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3.5,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
          <section className='slider-container'>
            <h2 data-aos="flip-right" className='text-center text-[1.7rem] sm:text-3xl lg:text-3xl mt-[18rem] sm:mt-[20rem] md:mt-[10rem] lg:mt-32 2xl:text-4xl'> Most Popular Tours</h2>
            <p data-aos="fade-left" className='text-center text-sm pt-1 p-8'>Find your special trip by only going places that spark joy</p>
            <Slider {...settings}> 
              {
                images.map(({image,name,desc}, index)=>{
                    return (
                        <div key={index} className='card mt-10 rounded-[8px] hover:border-colorPrimary hover:border-3 border-4 hover:scale-[1.1]'
                        >
                            <div>
                                <img src={image} alt="" className='h-[180px] w-full'/>
                            </div>
                            <div className='card-bottom bg-grayColor p-3'>
                              <h5 className='right-line text-[13px] pb-1 font-bold'>{name}</h5>
                              <p className='text-[12px]'>{desc}</p>
                            </div>
                        </div>
                    )
                })
              }
              
            </Slider>
          </section>
        );
      }
    }

