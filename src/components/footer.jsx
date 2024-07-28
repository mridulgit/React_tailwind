
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import logo from '../styles/7.png'

import React from 'react'

function footer() {
  return (
    <div className='bg-Yellow w-[100vw] h-[563px] rounded-tl-gr rounded-tr-gr lg:w-[83.3vw] max-w-[1340px] lg:h-[343px] font-grFont'>
      <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[38%]  justify-center mt-[60px] mx-5 '>
        <div className='flex flex-row lg:flex-col lg:gap-[171px]'>
        <img src={logo} className=' w-[50px] h-[50px]'></img>
        <div className="lg:flex lg:flex-col flex flex-col w-full lg:gap-[20px]">
        <div className='flex flex-row-reverse gap-[30px] lg:w-[65%]'>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-[24px] h-[24px]" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-[24px] h-[24px]" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-[24px] h-[24px]" />
              </a>
        </div>
        <div className="hidden lg:flex font-[400] leading-[18px] text-[12px]"><p>Copyright © 2024 Gadgets Reborn LLC.</p></div>
        </div>
        </div>

        <div className="flex flex-col lg:gap-[115px] gap-[20px]">
        <div className="flex flex-col lg:flex-row  self-center gap-[110px] lg:gap-[40px] w-full font-[400] leading-[24px] text-[16px]">
              <div className="flex-row flex  gap-[60px]">
                <div className="flex flex-col w-1/2 gap-[12px]">
                  <p className="font-[700] font-[DM Sans]">Company</p>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Our Story</a>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Contact Us</a>
                </div>
                <div className="flex flex-col w-1/2 gap-[12px]">
                  <p className="font-[700] font-[DM Sans] whitespace-nowrap">Join our Community</p>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Twitter</a>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Instagram</a>
                </div>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                  <p className="font-[700] font-[DM Sans]">Support</p>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Help Center</a>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">For Partners</a>
                  <a className="whitespace-nowrap cursor-pointer w-1/4">Suggest a Feature</a>
                </div>
        </div>
        <div className="flex flex-row-reverse gap-[50px] leading-[18px] font-[400] text-[12px]">
          <a className="cursor-pointer whitespace-nowrap">Complaints</a>
          <a className="cursor-pointer whitespace-nowrap">Terms and Conditions</a>
          <a className="cursor-pointer whitespace-nowrap">Privacy Policy</a>
        </div>
        </div>
        <div className="flex lg:hidden font-[400] leading-[18px] text-[12px] whitespace-nowrap"><p>Copyright © 2024 Gadgets Reborn LLC.</p></div>
      </div>

    </div>
  )
}

export default footer
