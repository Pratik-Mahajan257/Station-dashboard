import React, { useState } from "react";
import { AiOutlineMail, AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';
import { BsPlusSquareDotted, BsCircle, BsFillCircleFill } from 'react-icons/bs';
import { FaMailchimp } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { SiAdobe } from 'react-icons/si';
import { GiQuickMan } from 'react-icons/gi';

function Sidebar() {

const [showYellow, setShowYellow] = useState(false);

  return <div className='bg-[#FFFFFF] h-full w-[50px] flex flex-col
  justify-between border-gray-300 border-r-[1px] items-center     '>
<div className='flex justify-center items-center flex-col gap-y-8   '>
    <div className='h-[34px] w-[34px] border-[#007AFF] border-[2px] rounded-md mt-2 cursor-pointer '>
        <FaMailchimp 
 className='text-[17px] cursor-pointer  text-black bg-[#FFE01B] h-[30px] w-[30px] rounded-md border-white border-2'/> 
    </div>
    
<div className="relative w-full h-[50px] flex justify-center items-center"> 
 {showYellow && (
        <div className="absolute left-0 h-[50px] w-[4px] bg-[#FFE01B]"></div>
      )}

 <AiOutlineMail 
 onClick={() => setShowYellow(!showYellow)}
 className={ `text-[16px] text-black cursor-pointer opacity-${showYellow ? 100 : 30}`}/> 
 </div>

  <MdOutlineMessage 
 className='opacity-30 text-[16px] text-black cursor-pointer space-y-32    '/> 
  <AiOutlineCalendar 
 className='text-[16px] opacity-30 text-black cursor-pointer  '/> 
  <AiOutlineSearch 
 className='opacity-30 text-[16px] text-black cursor-pointer  '/> 
 
 
 <div className="h-[30px] w-[30px] bg-[#e31e13] justify-center items-center flex rounded-md">
 <SiAdobe 
 className=' text-white rounded-md cursor-pointer  '/> 
 </div>

<div className="h-[30px] w-[30px] bg-[#5444ff] justify-center items-center flex rounded-md">
 <BsCircle 
 className=' text-white rounded-md cursor-pointer  '/> 
 </div>
  <BsPlusSquareDotted 
 className='h-[30px] w-[30px] opacity-30 text-black cursor-pointer  '/> 

</div>



<div className="h-[30px] w-[30px] bg-[#5444ff] justify-center items-center flex rounded-full mb-2">
   <GiQuickMan 
 className=' text-white rounded-md cursor-pointer  '/> 
 
</div>
 

  </div>
}

export default Sidebar