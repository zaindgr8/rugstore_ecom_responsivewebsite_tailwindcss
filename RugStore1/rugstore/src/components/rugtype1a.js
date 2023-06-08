import React from 'react';
import rug1 from "../images/rug1.png"
import rug2 from "../images/rug2.png"
import rug3 from "../images/rug3.png"
import rug4 from "../images/rug4.png"
import rug5 from "../images/rug5.png"
import rug6 from "../images/rug6.png"
import rug7 from "../images/rug7.png"
import rug8 from "../images/rug8.png"
import rug9 from "../images/rug9.png"
import rug10 from "../images/rug10.png"

function Grid() {
  const pictures = [
    { id: 1, src: rug1, title: 'Picture 1' },
    { id: 2, src: rug2, title: 'Picture 2' },
    { id: 3, src: rug3, title: 'Picture 3' },
    { id: 4, src: rug4, title: 'Picture 4' },
    { id: 5, src: rug5, title: 'Picture 5' },
    { id: 6, src: rug6, title: 'Picture 6' },
    { id: 7, src: rug7, title: 'Picture 7' },
    { id: 8, src: rug8, title: 'Picture 8' },
    { id: 9, src: rug9, title: 'Picture 9' },
    { id: 10, src: rug10, title: 'Picture 10' },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {pictures.map((picture) => (
        <div  className="flex flex-col items-center">
          <img src={picture.src} alt={picture.title} className="w-full h-auto" />
          <p className="mt-2">{picture.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid;
