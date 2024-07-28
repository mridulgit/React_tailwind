// import React from 'react'
import stars from '../styles/Group 69.png'
import author1 from '../styles/5856.jpg'
import logo1 from '../styles/Logo wrap - Copy.png'
import logo2 from '../styles/Logo wrap(1) - Copy.png'
import logo3 from '../styles/Logo wrap(2) - Copy.png'
import logo4 from '../styles/Logo wrap(3) - Copy.png'
import logo5 from '../styles/Logo wrap(4) - Copy.png'
import React, { useState } from 'react';
import arrow from '../styles/Arrow1.png'
import arrow2 from '../styles/Arrow2.png'

function Section3() {
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [logo1, logo2, logo3, logo4, logo5];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  return (
    <div className='w-[100vw] justify-center bg-Yellow rounded-gr h-[678.18px] flex flex-col lg:w-[83.3vw] max-w-[1340px]'>
        <div className='slef-center w-full flex flex-col text-center lg:gap-[35px] gap-[30px] font-grFont '>
            <img src = {stars} className='h-[94.18px] w-[272px] self-center'></img>
            <h1 className='lg:text-[48px] text-[36px] font-[700] lg:leading-[60px] leading-[44px] tracking-[2%]'>Trusted by the people.</h1>
            <p className='lg:leading-[44px] lg:text-[36px] leading-[30px] text-[20px] font-[500] lg:font-[400] tracking-[-2%]'>Love the simplicity of the service and the <br></br> prompt customer support. We can’t<br></br>imagine working without it.</p>
            <div className='flex lg:flex-row flex-col self-center text-center gap-[10px]'><img src={author1} className='rounded-[100%] h-[50px] w-[50px]'></img><p className='self-center'>Ammar Foley</p></div>
            <div className='self-center flex-row hidden 2xl:flex'>
              <img src={logo1}></img>
              <img src={logo2}></img>
              <img src={logo3}></img>
              <img src={logo4}></img>
              <img src={logo5}></img>
            </div>
      <div className='relative w-[303px] h-[40px] self-center flex-row flex 2xl:hidden'>
      <div className='self-center cursor-pointer' onClick={handlePrevious}>
        <img src={arrow} alt="" />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <img src={images[currentIndex]} className='w-[164.17px] h-[40px] object-cover' alt='slider' />
      </div>
      <div className='self-center cursor-pointer' onClick={handleNext}>
        <img src={arrow2} alt="" />
      </div>
    </div>
        </div>
    </div>
  )
}

export default Section3;
