import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch, FiLogIn } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { PiAddressBook } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-md'>
      {/* left side */}
      <div className='flex items-center '>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer mx-5 hover:text-yellow-400'
        >
          <HiMenuAlt2 size={25} />
        </div>
        <h1 className='text-xl sm:text-2xl lg:text-3xl px-1'>
          Food<span className='font-bold text-yellow-400'>Tastic</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-500 rounded-full p-0.5  '>
          <p className='bg-black text-white rounded-full  p-2 cursor-pointer '>
            Delivery
          </p>
          <p className=' text-white p-2 cursor-pointer'>Pickup</p>
        </div>
      </div>
      {/* right side */}
      <div className='flex items-center w-[200px] lg:w-[500px] sm:w-[400px]  rounded-full bg-gray-300 px-2'>
        <FiSearch className='text-black' size={25} />
        <input
          className='bg-transparent p-2 w-full outline-none '
          type='text'
          name=''
          id=''
          placeholder='Search Food'
        />
      </div>
      <button className='bg-yellow-400 border text-white rounded-xl md:flex items-center p-2 mr-2'>
        <BsCart4 size={25} />
        Cart
      </button>
      {/* mobile view menu */}
      {/* overlay */}
      {nav ? (
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen z-10 duration-300'></div>
      ) : (
        ""
      )}

      {/* actual menu */}

      <div
        className={
          nav
            ? "fixed bg-white w-[300px] h-screen z-10 top-0 left-0"
            : "fixed bg-white w-[300px] h-screen z-10 top-0 left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className='cursor-pointer absolute right-4 top-4 text-yellow-400'
        />
        <h2 className='text-2xl p-4'>
          Food<span className='font-bold text-yellow-400'>Tastic</span>
        </h2>

        <nav className=''>
          <ul className='flex flex-col p-4 text-gray-500 cursor-pointer'>
            <li className='flex py-4 text-xl hover:text-yellow-400'>
              <BiDish size={25} />
              Your Orders
            </li>
            <li className='flex py-4 text-xl hover:text-yellow-400 '>
              <MdFavoriteBorder size={25} />
              Favorite Orders
            </li>
            <li className='flex py-4 text-xl hover:text-yellow-400'>
              <PiAddressBook size={25} />
              Address book
            </li>
            <li className='flex py-4 text-xl hover:text-yellow-400'>
              <BiHelpCircle size={25} />
              Help
            </li>

            <li className='flex py-4 text-xl hover:text-yellow-400'>
              <AiOutlineInfoCircle size={25} />
              About
            </li>
            <li className='flex py-4 text-xl hover:text-yellow-400'>
              <FiLogIn size={25} />
              Login
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
