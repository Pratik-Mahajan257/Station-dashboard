import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  name: string;
  items: Array<{ text: string, icon: string, num : string }>;
  
}

const Dropdown: React.FC<DropdownProps> = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.marginBottom = isOpen
        ? `20px`
        : '0';
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={` text-right h-[30px] bg-[#F7F7F7] mb-2 pl-4 rounded-t-lg mx-[10px] font-bold  cursor-pointer flex flex-row justify-start items-center gap-x-5  ${isOpen ? 'bg-[#F7F7F7] mb-0 ' : ''}`}
      >
         <span className=" float-left text-[9px] ">{isOpen ? '▲' : '▼'}</span> {name}
      </div>
      {isOpen && (
        <ul className=" mx-[10px] pb-3  rounded-b-lg bg-[#F7F7F7]">
          {items.map((item, index) => (
            <li key={index} className="h-[30px]  hover:bg-gray-200 cursor-pointer flex flex-row justify-start items-center pl-[8px] gap-x-[7px]">
              <span className="mr-[7px] ">{item.icon}</span> {item.text} <span className='text-[10px] rounded-md absolute px-1 right-4    bg-[#FFE01B]'>{item.num}</span>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
