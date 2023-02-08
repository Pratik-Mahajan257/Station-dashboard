import React from 'react'
import { RiMessage2Line } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { MdAlarm } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';


function Discussions() {
  return (
    <div className='w-full h-[120px]  mt-[5px] mb-[15px]'>
      <div className='w-full h-[30px] flex justify-start gap-5 pl-5 hover:bg-gray-300 cursor-pointer hover:text-black   items-center flex-row'>
        <RiMessage2Line className='text-[#ababab] hover:text-black  '/>
        <h1 className='text-[#ababab] hover:text-black   font-semibold'>Discussions</h1>
      </div>
       <div className='w-full h-[30px] flex justify-start gap-5 pl-5  hover:bg-gray-300 cursor-pointer  items-center flex-row'>
        <AiOutlineMail className='text-[#ababab] hover:text-black  '/>
        <h1 className='text-[#ababab] font-semibold hover:text-black  '>Unreads</h1>
      </div>
       <div className='w-full h-[30px] flex justify-start gap-5 pl-5 hover:bg-gray-300 cursor-pointer   items-center flex-row'>
        <MdAlarm className='text-[#ababab] hover:text-black  '/>
        <h1 className='text-[#ababab] font-semibold hover:text-black '>Later</h1>
      </div>
       <div className='w-full h-[30px] flex justify-start gap-5 pl-5 hover:bg-gray-300 cursor-pointer   items-center flex-row'>
        <FiMoreHorizontal className='text-[#ababab] hover:text-black '/>
        <h1 className='text-[#ababab] font-semibold hover:text-black '>More</h1>
      </div>
    </div>
  )
}

export default Discussions
