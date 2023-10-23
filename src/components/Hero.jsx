import React from "react";

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[550px] relative'>
        {/* text overlay */}
        <div className='absolute w-full h-full flex flex-col justify-center text-white bg-black/30 max-h-[550px]'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-yellow-400'>
            Fun. <span className='text-white'> Fast.</span>{" "}
          </h1>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Tasty.
            <span className='text-yellow-400'> Fantastic. </span>{" "}
          </h1>
        </div>
        <img
          className='w-full max-h-[550px] object-cover'
          src='https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=826&t=st=1694709788~exp=1694710388~hmac=81c14dd7da668d2f7eaf32d6db61b60b97f2d0511f4a0b146b1af95fabf23194'
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
