import React from "react";

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto py-8 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-2xl relative'>
        {/* overlay */}
        <div className='bg-black/40 w-full h-full absolute text-white rounded-2xl '>
          <p className='font-bold px-2 text-2xl pt-4 '>
            Mouth Watering <span className='text-yellow-400'>Starters</span>
          </p>
          <p className=' font-bold px-2 mt-4  '>Burgers,Pizza & Many more</p>
          <button className='border-white bg-yellow-400 text-black rounded-xl p-2 font-bold absolute bottom-4 mx-2 '>
            Order Now!
          </button>
        </div>
        <img
          className=' rounded-xl object-cover w-full  md:max-h-[200px] '
          src='https://images.pexels.com/photos/4109132/pexels-photo-4109132.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
        />
      </div>

      <div className='rounded-2xl relative'>
        {/* overlay */}
        <div className='bg-black/40 w-full h-full absolute text-white rounded-2xl '>
          <p className='font-bold px-2 text-2xl pt-4 '>
            Discover <span className='text-yellow-400'>Multiple Cusine</span>
          </p>
          <p className=' font-bold px-2 mt-4 '>
            Indian , Italian , Chinese & Many more
          </p>
          <button className='border-white bg-yellow-400 text-black rounded-xl p-2 font-bold absolute bottom-4 mx-2 '>
            Order Now!
          </button>
        </div>
        <img
          className=' rounded-xl object-cover w-full  md:max-h-[200px] '
          src='https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg'
          alt=''
        />
      </div>

      <div className='rounded-2xl relative'>
        {/* overlay */}
        <div className='bg-black/40 w-full h-full absolute text-white rounded-2xl '>
          <p className='font-bold px-2 text-2xl pt-4 '>
            Order Online <span className='text-yellow-400'>Or Dine in</span>
          </p>
          <p className=' font-bold px-2 mt-4  '>
            Discover The Best Restaurants
          </p>
          <button className='border-white bg-yellow-400 text-black rounded-xl p-2 font-bold absolute bottom-4 mx-2 '>
            Order Now!
          </button>
        </div>
        <img
          className=' rounded-xl object-cover w-full  md:max-h-[200px] '
          src='https://media.istockphoto.com/id/1358231876/photo/food-delivery-person-at-the-fast-food-restaurant-waiting-to-pick-up-the-order.jpg?s=612x612&w=0&k=20&c=hPCxKoWzeHOv_g3oqerl0KooglrSYCqJ5j6Re_bBiZY='
          alt=''
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
