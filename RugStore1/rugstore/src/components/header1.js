import React, { useState } from 'react';
import ball from "../images/ball.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white bg-gradient-to-r from-red-500 via-red-900 to-purple-500">
      <header>
        <nav className=''>
          <div className='flex items-center px-6 justify-between py-2'>
            <div className='font-bold text-2xl flex gap-x-2 items-center'>
              <img src={ball} width={25} height={25} />
              Rugs
            </div>
            <div className='flex gap-x-4 overflow-x-auto ml-16 hidden md:flex'>
              <ul className='flex gap-8 mr-20'>
                <li>Home</li>
                <li>Deals</li>
                <li>Top Selling</li>
                <li>All Rugs</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='items-center'>
                <input type="text" placeholder='Search' className='border ml-50 rounded-md pl-6 placeholder:px-4' />
                <span>
                  <AiOutlineSearch className='absolute inset-y-4 text-black ml-4' />
                </span>
              </div>
              <div className='flex gap-x-3 text-xl'>
                <AiOutlineShoppingCart />
                <AiOutlineHeart />
                <CgProfile />
              </div>
            </div>
            <div className='flex md:hidden'>
              <button onClick={toggleMenu} className='text-white hover:text-gray-300 focus:outline-none'>
                <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  {isMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className='md:hidden'>
              <ul className='flex flex-col gap-4 ml-8'>
                <li>Home</li>
                <li>Deals</li>
                <li>Top Selling</li>
                <li>All Rugs</li>
                <li>About Us</li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
