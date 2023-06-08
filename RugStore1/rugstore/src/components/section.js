import r1 from "../images/r1.png"
import r2 from "../images/r2.png"
import r3 from "../images/r3.png"
import r4 from "../images/r4.png"
import r5 from "../images/r5.png"
import r6 from "../images/r6.png"
import r7 from "../images/r7.png"
import r8 from "../images/r8.png"


function Section() {
    const pictures=[
        {id:1, src:r1, title:"Living Room Rugs"},
        {id:2, src:r2, title:"Dining Room"},
        {id:3, src:r3, title:"Bedroom Rugs"},
        {id:4, src:r4, title:"Kitchen Rugs"},
        {id:5, src:r5, title:"Entryway Rugs"},
        {id:6, src:r6, title:"Bathroom Rugs"},
        {id:7, src:r7, title:"Patio Rugs"},
        {id:8, src:r8, title:"Office Rugs"}
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 mt-5 mb-5'>
        {pictures.map((picture)=>(
            <div className="flex flex-col items-center">
                    <img src={picture.src} alt={picture.title} />
                    <p className="text-sm sm:text-md md:text-lg mt-2 font-bold text-gray-700 hover:text-black">{picture.title}</p>
                </div>
        ))}
       
    </div>
  )
}

export default Section