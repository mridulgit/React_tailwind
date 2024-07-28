import React from 'react'


function Category({icon , name}) {

  return (
    <div className='flex flex-col text-center justify-center'>
    <div className='flex rounded-[12.17px] lg:h-[120px] lg:w-[232px] w-[141.14px] h-[73px] bg-[#ffffff] justify-center '>
        <img src={icon} className='lg:size-40 lg:w-[174px]  size-32 self-end'></img>
    </div>
    <div className='flex text-center w-full justify-center'>
        <p className='self-center'>{name}</p>
    </div>
    </div>
  )
}

export default Category
