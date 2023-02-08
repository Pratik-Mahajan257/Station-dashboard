import react,{ useState } from "react";
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineCalendar, AiOutlineMore, AiFillCheckCircle } from 'react-icons/ai';

function Navbar(){
      const [isActive, setIsActive] = useState(false);
return (
<div className="flex flex-row shadow-md     border border-b-2 justify-between items-center w-[750px] bg-white  rounded-t-lg    h-[50px]">
 <div className="flex flex-row gap-x-2 ml-3   items-center justify-center  ">
   <span className="text-xl mb-2  ">📨</span>
   <h1 className="font-bold ">All other emails</h1>
   <span className="text-gray-400 text-xs ">▼</span> 
 </div>
<div className="flex flex-row gap-x-3 mr-2  ">
<div
        className="relative inline-block h-[30px] w-[54px] border border-gray-400 rounded-full cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`absolute h-[25px] top-[1px] w-1/2 transition-all duration-300  bg-gray-400 ${
            isActive ? 'bg-green-500': 'bg-gray-400'
          } rounded-full`}
          style={{ left: isActive ? '50%' : '0%' }}
        />
        
      </div>
      <div className="rounded-full bg-[#F7F7F7] flex justify-center items-center text-black h-[30px] w-[30px]">
       <IoMdAttach />
      </div>
      <div className="rounded-full bg-[#F7F7F7] flex justify-center items-center text-black h-[30px] w-[30px]">
       <AiOutlineCalendar />
      </div>
      <div className="rounded-full bg-[#F7F7F7] flex justify-center items-center text-black h-[30px] w-[30px]">
       <AiOutlineMore />
      </div>
</div>
</div>
);

}

export default Navbar;