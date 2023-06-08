import React from "react";
import ball from "../images/ball.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(prev=>!prev);
  };

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => {
    setClick1(!click1);
  };

  return (
    <>
         
    
    <header className="text-white bg-gradient-to-r from-red-500 h-[65px] via-red-900 relative to-purple-500 flex">
      <div className="flex  justify-between items-center px-6  py-2 flex-wrap w-full">
        <div className="font-bold text-2xl flex gap-x-2 items-center flex-wrap">
          <img src={ball} width={25} height={25} />
          Rugs
        </div>
        <div className="  border-red-100   ">
       
         

          <div className="flex items-center space-between">

          <ul className="flex gap-8 mr-60 hidden lg:flex flex-wrap">
              <li>Home</li>
              <li>Deals</li>
              <li className="whitespace-nowrap">Top Selling</li>
              <li className="whitespace-nowrap">All Rugs</li>
              <li className="whitespace-nowrap">About Us</li>
            </ul>
              <div className="flex gap-10 items-center ">
            

            
            <div className="flex items-center space-x-2">
            {click1 && (
              <input
                type="text"
                placeholder="Search"
                className=" border rounded-md pl-6 py-2 placeholder:px-4 flex flex-wrap"
              />
            )}
            <button onClick={handleClick1} className="font-bold text-2xl px-4">
              <AiOutlineSearch className=" text-white" />
            </button>
            <button className="lg:hidden flex flex-wrap " onClick={handleClick}>
              <AiOutlineMenu />
            </button>
            </div>
            
          
            <div className=" gap-x-3 text-xl md:flex hidden">
              <AiOutlineShoppingCart />
              <AiOutlineHeart />
              <CgProfile />
            </div>
            </div>
         
          </div>
          
        </div>
      </div>
    </header>

    {click && <ul className="absolute top-[65px]  w-60 right-[-50px] z-50  flex justify-center">
              <div className="flex flex-col text-white bg-black gap-1 items-center  py-2 px-4">
                <li className="hover:text-gray-800">Home</li>
                <li className="hover:text-gray-800">Deals</li>
                <li className="whitespace-nowrap hover:text-gray-800">Top Selling</li>
                <li className="whitespace-nowrap hover:text-gray-800">All Rugs</li>
                <li className="whitespace-nowrap hover:text-gray-800">About Us</li>
              </div>
            
          </ul>}
    </>
  );
}

export default Header;
