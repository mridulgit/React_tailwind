import React from 'react'
import icon1 from '../styles/Icon.png'
import icon2 from '../styles/Icon(1).png'
import icon3 from '../styles/Icon(2).png'
function Section2() {
  return (
    <div className='bg-grSilver w-[100vw] font-grFont font-[400] rounded-gr flex justify-center h-[736px] gap-[90px] lg:w-[83.33vw] max-w-[1340px] lg:h-[308px]'>
      <div className='flex flex-col gap-[90px] lg:flex-row self-center'>
      <div className='flex flex-col gap-[10px]'>
        <img src={icon1} className='h-[40px] w-[40px]'></img>
        <h2 className='font-[700] text-[24px] leading-[32px]'>Check Price</h2>
        <p className='text-[18px] leading-[28px] font-[400]' >Select your gadget that needs to be<br></br>
        repaired.Get best Pricing</p>
      </div>
      <div className=' flex flex-col gap-[10px]'>
        <img src={icon2} className='h-[40px] w-[40px]'></img>
        <h2 className='font-[700] text-[24px] leading-[32px]'>Schedule Service</h2>
        <p className='text-[18px] leading-[28px] font-[400]' >Book a free technician visit at your<br></br>
         home or a remote meeting at a time<br></br>
         slot that best suits your convenience.
        </p>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <img src={icon3} className='h-[40px] w-[40px]'></img>
        <h2 className='font-[700] text-[24px] leading-[32px]'>Get Gadget Repaired</h2>
        <p className='text-[18px] leading-[28px] font-[400]' >Our super-skilled technician will be<br></br>
         there and make it as good as new.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Section2;
