import React,{useEffect} from "react";
// import styled from "styled-components";
import lighthouse from "../assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Offer() {

  useEffect(() => {
    AOS.init();
  }, [])

  const data = [
    {
      text: "Best Travel Guide Always for your Services",
      icon: <BsPerson />,
      color: "red",
    },
    {
      text: "World Class Services Provided For You",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "24/7 Strong Customer Support",
      icon: <BsHeadphones />,
      color: "yellow",
    },
  ];
  return (
    <section id="offer">
      <div className="image" data-aos="fade-up-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img src={lighthouse} alt="lighthouse" />
      </div>
      <div className="content mt-[-220px] sm:mt-[-5px] md:mt-[-10px] px-8">
        <div className="title" data-aos="fade-right">
          <h1 className='text-center text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl'>We are Offering in Total <span className="text-orange-400">Over 50 Tours</span> Across the World</h1>
        </div>
        <ul className="list" data-aos="flip-left">
          {data.map(({ text, icon, color }) => {
            return (
              <li key={text}>
                <div className={`icon ${color}`}>{icon}</div>
                <div className="text">
                  <h3>{text}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

