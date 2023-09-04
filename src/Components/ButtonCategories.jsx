import React, { useState } from 'react';

const ButtonCategories = ({ categories, filterItems }) => {

  //to set active button color, I used use state
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className="btn-container mb-[4rem] flex xl:justify-start lg:justify-start justify-center">
      {/* <p>Hot Top Destinations</p> */}
      {categories.map((category, index) => {
        const isActive = activeCategory === category;
        return (
          <button
            type="button"
            className={`filter-btn ${isActive ? 'active' : ''}`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};


export default ButtonCategories;