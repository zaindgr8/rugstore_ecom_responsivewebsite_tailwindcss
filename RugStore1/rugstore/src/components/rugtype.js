import React from 'react';
import rug1 from '../images/rug1.png';
import rug2 from '../images/rug2.png';
import rug3 from '../images/rug3.png';
import rug4 from '../images/rug4.png';
import rug5 from '../images/rug5.png';
import rug6 from '../images/rug6.png';
import rug7 from '../images/rug7.png';
import rug8 from '../images/rug8.png';
import rug9 from '../images/rug9.png';
import rug10 from '../images/rug10.png';

function Rugtype() {
  const pictures = [
    { id: 1, src: rug1, title: 'Persian & Oriental' },
    { id: 2, src: rug2, title: 'Modern' },
    { id: 3, src: rug3, title: 'Natural' },
    { id: 4, src: rug4, title: 'Geometric' },
    { id: 5, src: rug5, title: 'Solid' },
    { id: 6, src: rug6, title: 'Outdoor' },
    { id: 7, src: rug7, title: 'Traditional' },
    { id: 8, src: rug8, title: 'Vintage' },
    { id: 9, src: rug9, title: 'Plush' },
    { id: 10, src: rug10, title: 'Braided' },
  ];

  return (
    <div className=' flex-wrap grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 px-4'>
      {pictures.map((picture) => (
        <div key={picture.id} className='flex flex-col items-center'>
          <img
            src={picture.src}
            alt={picture.title}
            className='max-w-full h-auto'
          />
          <p className='text-sm sm:text-md md:text-lg py-2 mb-2 font-bold text-gray-700
           hover:text-black flex-wrap whitespace-normal gap-2 '>
            {picture.title}
          </p>
          
        </div>
        
      ))}
    </div>
  );
}

export default Rugtype;
