// import React from "react";
// // import './section4.css';
// const NewsLetter = () => {
//   return (
//     <div className='rounded-gr h-[400px] bg-grSilver flex flex-row w-[100vw] flex-wrap  lg:w-[90.71vw] align-center justify-center lg:p-[1rem] p-[2rem]'>
//       <div className="signup-text mb-[1rem] p-[1rem] self-center ">
//         <h1 className="text-[1.875rem] mb-[0.5rem]">Sign up for our newsletter</h1>
//         <p className="font-[400] text-[1.25rem] text-[#475467]">
//           Stay in the loop with everything you need to know.
//         </p>
//       </div>
//       <div className="p-[0.2rem] self-center">
//         <div className="news-input flex lg:flex-row flex-col gap-[1rem] mb-[0.3rem]">
//           <div>
//           <input type="email" placeholder="Enter your email" />
//           </div>
//           <div>
//             <p className="lg:hidden">
//               We care about your data in our <a className="text-[#475467]">privacy policy</a>{" "}
//             </p>
//           </div>
//           <div>
//             <button className="mw-[512px] w-full h-[48px]  bg-Yellow cursor-pointer relative rounded-[9px] text-[1rem]">Subscribe
//               {/* <div className="bg-black absolute w-full h-full top-0 opacity-20 hover:w-[0px]"></div>   */}
//             </button>
                      
//           </div>
//         </div>
//         <p className="f-[400] text-[0.875rem] text-[#475467] hidden lg:block">
//           We care about your data in our <a href="">privacy policy</a>{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;
import React from 'react'

function section4() {
  return (
    <div className='max-w-[1340px] flex bg-[#F9FAFB] rounded-gr h-[432px] xl:h-[211px] w-[100vw] justify-center lg:w-[83.3vw]'>
        <div className='flex flex-col lg:gap-[150px] gap-[40px] lg:flex-row justify-center self-center gap-[20px]' > 
          <div className='flex flex-col'>
            <h2 className='font-[700] text-[30px] leading-[45px] font-[grFont] text-[#101828] font-bold'>Signup for our newsletter</h2>
            <p className='font-[400] text-[20px] leading-[30px] font-[grFont] text-[#475467] w-[290px] lg:w-full'>Stay in the loop with everything you need to know.</p>
            </div> 
            <div className='flex flex-col lg:flex-row gap-[10px]'>
              <div className='flex flex-col lg:flex-col'>
            <input type='text' placeholder='Enter you email' className='border-[2px] h-[48px] w-[344px] rounded-[5px]'></input>
            <p className=" font-[400] text-[14px] leading-[20px] w-[250px] lg:w-full">
               We care about your data in our <a className="text-[#475467] decoration-solid"><u>privacy policy</u></a>{" "}
            </p>
            </div>
             <button className="mw-[295px] w-full h-[48px] p-[18px] border-[1px]  bg-Yellow cursor-pointer relative rounded-[9px] text-[1rem] text-center flex justify-center lg:w-[120px] lg:h-[48px]"><p className='self-center font-[700] text-[16px] leading-[24px]'>Subscribe</p></button>
             </div>
        </div>
    </div>
  )
}

export default section4
