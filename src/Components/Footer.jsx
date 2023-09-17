import React from "react";
import { BsFillSendFill } from "react-icons/bs";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <footer className="text-black py-10 px-7 sm:mt-[2rem] bg-blue-200">
      <div className="container mx-auto">
        <div className="upper-footer grid grid-cols-1 md:grid-cols-4 gap-8 justify-center border-b-2 border-colorPrimary pb-8">
          <div className="col">
            <div className="brand">
              <div className="logo flex items-center space-x-2 text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl">
                <BsFillSendFill className="text-colorPrimary" />
                <h2 className="text-colorPrimary md:5xl">
                  GoTrips
                </h2>
              </div>
              <h2 className="desciption py-6 font-light">
                We take you to places you have never imagined you could visit,
              </h2>
            </div>
            <ul>
              <li>
                <span>CONTACT US : +02345678445</span>
              </li>
              <li>
                <span>gotrips@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="text-2xl font-semibold mb-2">Support</h2>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="text-2xl font-semibold mb-2">Newsletter</h2>
            <div className="newsletter">
              <input
                type="text"
                placeholder="Your Email"
                className="py-2 px-3 w-full rounded-l-lg border border-gray-600 focus:outline-none focus:border-colorPrimary"
              />
              <input
                type="submit"
                value="Subscribe Now"
                className="bg-orange-400 hover:bg-colorPrimary px-2 py-3 mt-6 w-full text-white 
                rounded-r-lg cursor-pointer ease-in duration-300"
              />
            </div>
          </div>
        </div>
        <div className="lower-footer text-center pt-8">
          <span>
            Copyright &copy; GoTrips by<a href="#"> Toyocodes</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
