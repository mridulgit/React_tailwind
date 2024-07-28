// import React from 'react'
import NavLogo from '../styles/7.png'
import usercheck from '../styles/users-check.png'
import building from '../styles/building-02.png'
import checkverified from '../styles/check-verified-01.png'
import {  FaBars } from 'react-icons/fa';
import Category from './category'
import icon1 from '../styles/image 2.png'
import icon2 from '../styles/image 20.png'
import icon3 from '../styles/image 29.png'
import icon4 from '../styles/image 13.png'
import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css' // needed for toast notifications, can be ignored if hideToast=true

function Section1() {
  const category = [
    //BUilt for Api integration
    {
        name : 'Mobile',
        icon : icon1,
    },
    {
        name : 'Camera',
        icon : icon2,
    },
    {
        name : 'Playstation',
        icon : icon3,
    },
    {
        name : 'Laptop',
        icon : icon4,
    }
]
  return (
    <div className='bg-Yellow lg:w-[83.3vw] max-w-[1340px] rounded-b-gr rounded-lb-gr flex flex-col lg:h-717 section1 gap-25 font-grFont w-[100vw] leading-[44px] h-[858px] ' > 
      <div className='flex flex-row self-center bg-whitegr lg:w-[75.11vw] max-w-[1240px] rounded-gr h-80 Navbar mt-25  gap-25 w-[89.33vw]'>
            <img src={NavLogo} className='self-center ml-2 h-[50px] w-[50px] '></img>
            <div className='lg:flex lg:w-full gap-25 flex-row self-center hidden'>
            <a className='self-center  cursor-pointer whitespace-nowrap '>Repair Service</a>
            <a className='self-center text-grNavbtn cursor-pointer whitespace-nowrap'>Protection</a>
            <a className='self-center text-grNavbtn cursor-pointer whitespace-nowrap'>About us</a>
            <a className='self-center text-grNavbtn cursor-pointer whitespace-nowrap'>Contact us</a>
            <div className='flex self-center flex-row-reverse gap-[30px] w-full p-[25px]'>               
                <div className='signup bg-Yellow w-[94px] rounded-[999px] text-center h-[44px] shadow-[0px_1px_2px_0px_#101828] cursor-pointer flex justify-center'><a className='self-center'>Sign up</a></div>
                <div className='text-grNavbtn cursor-pointer'>
                <SuprSendInbox
  workspaceKey= "qJ5osy6AUY6xkRaz3tGA"
  subscriberId= "tOObl06r59CHvrVQVG3CCCSoq9hqpvNYFr4QldHfYdE"
  distinctId= "sample-react-vercell-hmac"
  />
                </div>
                <div className='login text-grNavbtn cursor-pointer'><a>Log In</a></div>
            </div>
         
          </div>
        <button  className="flex self-center flex-row-reverse  p-[30px] w-full lg:hidden p-2 focus:outline-none ">
            <FaBars className="w-6 h-6" />
        </button>
      </div>
      <h1 className='text-[48px]  self-center text-center leading-[60px] font-[700] tracking-[-2%]'><span className='block md:inline'>Repair Your </span><span className='block md:inline'>gadgets with ease.</span></h1>
      <div className='flex self-center gap-25 flex-wrap font-DMSans font-[400] leading-[28px] '> 
        <div className='flex flex-row gap-[2px] flex-1 justify-center lg:flex-auto whitespace-nowrap'><img src={usercheck} className='h-[20px] w-[20px] self-center'></img><div>Trained Professionals</div></div>
        <div className='flex flex-row gap-[2px] flex-1 justify-center lg:flex-auto whitespace-nowrap'><img src={building} className='h-[20px] w-[20px] self-center'></img><div>Doorstep Service</div></div>
        <div className='flex flex-row gap-[2px] w-full justify-center lg:w-auto whitespace-nowrap'><img src={checkverified} className='h-[20px] w-[20px] self-center'></img><div>Guaranteed Safety</div></div>
      </div>
      <div className='self-center flex h-full flex-col gap-[50px]'>
        <p className='self-center font-[700] text-[20px] leading-[30px] font-grFont '>Choose what to repair</p>
      <div className='flex flex-wrap lg:gap-[60px] gap-[10px] h-full w-[300px] lg:w-full justify-center'>
      {category.map((ele, index) => (
        <Category
            name={ele.name}
            icon={ele.icon}
        />
      ))}
      </div>
      </div>
    </div>
  )
}

export default Section1;
