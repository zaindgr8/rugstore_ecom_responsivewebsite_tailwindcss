import React from 'react'
import {BiPhoneCall} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import logo from "../images/ball.png"

function Footer() {
  return (
    <div className='flex-col grid grid-cols-1 sm:grid-cols-2 items-center
    bg-gradient-to-r from-rose-800 via-red-700
    h-auto md:h-[300px] w-full
     to-rose-500 text-white    '>
        
        <div className='p-6 '>
            <div className='flex items-center'>
            <img src={logo} className="w-10 mr-2 mb-2" />
        <h1 className='font-bold text-3xl mb-3'>
            Rugs
        </h1>
        </div>
        <div className='font-semibold mb-1'>
        MS. Hussain, Sales Representative
        </div>
        <div>
        M & M Motors Ltd <br/>
        2/595, Hunter Road <br/>
        Warangal, Telangana State 506002<br/>
        <span className='flex items-center gap-2'><BiPhoneCall/>+91 98484 98484</span>
        <span className='flex items-center gap-2'><HiOutlineMail/>mmmotors@gmail.com</span>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 ml-6'>
            <div className='flex flex-col gap-1'>
                <span>
                    Home
                </span>
                <span>
                    Contact
                </span>
                <span>
                    Deals
                </span>
            </div>
            <div className='flex flex-col gap-1 mt-4 mb-4'>
                <span>
                    Gallery
                </span>
                <span>
                    Privacy Policy
                </span>
                <span>
                    Terms of use
                </span>
            </div>
           
            <div className='flex flex-col gap-1  mt-4 mb-4'>
                <span>
                    Testimonials
                </span>
                <span>
                    About Us
                </span>
                <span>
                    FAQ's
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer