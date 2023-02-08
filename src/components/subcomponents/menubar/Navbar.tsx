import React from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';
import { FaPencilAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className=' w-full h-[46px] mt-1  flex items-center relative'>
        
            <h1 className='text-black font-bold text-lg ml-[20px]'>Station</h1>
        
        <div className='text-md text-gray-500 flex space-x-3 absolute right-14   '>
            <HiArrowSmLeft />
            <HiArrowSmRight />
        </div>

        <div className='w-[30px] h-[30px] rounded-full bg-[#FFE01B] flex justify-center items-center absolute right-2'>
             <FaPencilAlt className='text-sm' />
        </div>
     </div>
  )
}

export default Navbar
