import React from "react";
import { categories } from "/src/data/data.js";

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h2 className='font-bold text-3xl text-center text-yellow-400'>
        Top Rated Menu Items
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 px-4 py-6 gap-6 '>
        {categories.map((items, index) => (
          <div
            key={index}
            className='bg-gray-100 flex font-semibold text-Black p-4 rounded-md justify-between items-center hover:scale-105 duration-100 hover:bg-yellow-200'
          >
            <h2 className='text-lg sm:text-xl'>{items.name}</h2>
            <img className='w-20' src={items.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
