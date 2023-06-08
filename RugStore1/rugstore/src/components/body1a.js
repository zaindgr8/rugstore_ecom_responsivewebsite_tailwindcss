import React from 'react';
import rugroomImage from "../images/rugroom.jpg";

function Body1() {
  return (
    <div className="relative h-[400px] w-full">
    
        <div className="bg-black bg-opacity-60 h-full w-[50%] ml-[50%] absolute">
        </div>
        <img src={rugroomImage} alt="Rug Room" className="h-full w-full object-cover" />
        
          <span className='absolute top-0 left-0 right-0 
          bottom-0 flex flex-col 
          justify-center items-center font-bold
           text-white text-4xl'>Upto 70% Discount on All Rugs</span>
       
      </div>
   
  );
}

export default Body1;
