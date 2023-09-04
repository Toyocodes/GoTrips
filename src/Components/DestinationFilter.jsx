import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Destination from './Destination';
import items from './DestinationData';
import ButtonCategories from './ButtonCategories';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function DestinationFilter() {
  useEffect(() => {
    AOS.init();
  }, [])


    const [destinationItems, setDestinationItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setDestinationItems(items); // Update the correct state variable
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setDestinationItems(newItems); // Update the correct state variable
  };

  return (
    <section id='destination' className='destination-section max-w-[1024px] m-auto w-full sm:px-10 py-16 mt-20 lg:mt-16'>
    
      <h2 className='text-center text-[1.7rem] sm:text-3xl 
      lg:text-3xl 2xl:text-4xl mb-12' data-aos="fade-right">Entire city of choice</h2>
      <div>
          <ButtonCategories categories={categories} filterItems={filterItems} />
          <Destination items={destinationItems} />
      </div>

    </section>
  );
}

export default DestinationFilter;
