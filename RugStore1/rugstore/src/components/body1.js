import React from 'react';
import rugroom from "../images/rugroom.jpg"

function Body1() {
  return (

    <div className='relative w-full h-[400px]  '>
      
      <div className='bg-black bg-opacity-30 ml-[50%] h-full absolute w-[50%]'></div>
      <img src={rugroom} className=" h-full w-full object-cover"></img>
      <span className='flex  font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white absolute
      top-0 bottom-0 left-0 right-0 justify-center items-center ml-[50%]'>
        70% Off <br/> on all Rugs <br/> & Cushions </span>
    </div>
   
  );
}

export default Body1;
