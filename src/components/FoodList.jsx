import React, { useState } from "react";
import { data } from "/src/data/data.js";

const FoodList = () => {
  const [foods, setfoods] = useState(data);

  // filter type burger,pizza
  const filterType = (category) => {
    setfoods(
      data.filter((items) => {
        return items.category === category;
      })
    );
  };
  // filter Price
  const filterPrice = (price) => {
    setfoods(
      data.filter((items) => {
        return items.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto p-4'>
      <h1 className='text-4xl font-bold text-yellow-400 text-center'>
        Top Rated Menu Items
      </h1>
      {/* filter row */}

      <div className='flex flex-col lg:flex-row justify-between gap-3'>
        {/* filter type */}
        <div>
          <p className='text-xl'>Filter Type</p>
          <div className='flex flex-wrap justify-between '>
            <button
              onClick={() => setfoods(data)}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("VegItem")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              Veg Items
            </button>
            <button
              onClick={() => filterType("chicken")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className='text-xl'>Filter By Price</p>
          <div className='flex justify-between max-w-[390px] w-full '>
            <button
              onClick={() => filterPrice("$")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className='px-2 m-1 rounded bg-transparent text-yellow-400 hover:text-white hover:bg-yellow-500 font-semibold border border-yellow-500  py-1'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((items, index) => (
          <div
            key={index}
            className='border shadow-lg hover:scale-110 duration-300 rounded-lg'
          >
            <img
              src={items.image}
              alt={items.name}
              className='w-full h-[200px] object-cover rounded'
            />
            <div className='flex font-semibold justify-between px-2 py-4'>
              <p>{items.name}</p>
              <span className='bg-yellow-400 rounded p-1'>{items.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
