import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className='p-4 pt-12 w-full m-auto max-w-[1640px] bg-yellow-300'>
      <h1 className='text-4xl px-8'>
        Food<span className='text-4xl text-white'>Tastic</span>{" "}
      </h1>
      <div className='pt-8 px-8 flex flex-col md:flex-row gap-6  justify-between'>
        <div className=' text-center'>
          <h2 className='font-bold text-xl'>About FoodTastic</h2>
          <div className='flex flex-col gap-1'>
            <p>Who we are</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Feedback</p>
          </div>
        </div>
        <div className='text-center'>
          <h2 className='font-bold text-xl'>For Restaurent</h2>
          <div className='flex flex-col gap-2'>
            <p>Partner with us</p>
            <p>Apps for you</p>
          </div>
        </div>
        <div className='text-center'>
          <h2 className='font-bold text-xl'>Learn More</h2>
          <div className='flex flex-col gap-1'>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
          </div>
        </div>
        <div className='text-center'>
          <h2 className='text-xl font-bold'>Reach us</h2>
          <div className='flex flex-col p-4 gap-4'>
            <button className='hover:scale-105 duration-100 boder border-solid px-4 py-4 flex bg-white rounded-xl'>
              <BiLogoPlayStore size={25} />
              Download on PlayStore
            </button>
            <button className='hover:scale-105 duration-100 boder border-solid px-4 py-4 flex bg-white rounded-xl'>
              <GrAppleAppStore size={25} />
              Get it on AppStore
            </button>
            <div className='flex mx-8 justify-center '>
              <AiOutlineFacebook
                size={25}
                className='hover:scale-125 duration-150'
              />
              <AiOutlineInstagram
                size={25}
                className='hover:scale-125 duration-150'
              />
              <AiOutlineLinkedin
                size={25}
                className='hover:scale-125 duration-150'
              />
              <AiOutlineTwitter
                size={25}
                className='hover:scale-125 duration-150'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
