import React,{ ReactNode  } from "react";

type Props = {
    
  profilePicture: string;
  names: string;
   number?: number | null;
  boldText: string;
  paragraph: string;
  icon: ReactNode;
  time: string;
};

const MailList: React.FC<Props> = ({

    profilePicture,
  names,
  number,
  boldText,
  paragraph,
  icon,
  time,
}) => {
    const maxLength = 45;
  const shortenedParagraph =
    paragraph.length > maxLength ? `${paragraph.substring(0, maxLength)}...` : paragraph;

  return (
    <div className="flex flex-col  ">
      <div className="flex h-[40px] flex-row w-full justify-start items-center px-[20px] hover:bg-gray-100 cursor-pointer border-b-2 border-gray-300">
      <img
        src={profilePicture}
        alt={names}
        className="w-[24px] h-[24px] rounded-md  mr-[10px] object-cover"
        />
      <div className="flex flex-row justify-start items-center    ">
        <p className="text-gray-900 font-medium text-[14px]  flex-row flex items-center justify-start">
          {names}{" "}
          <span className="text-gray-600 font-normal ml-14  flex items-center  ">
            <span className="text-[#d2d2d2] text-[10px]  mr-2 ">
            {number}
            </span>
            
             <span className="text-[13px] font-semibold mr-2">{boldText}</span>  -   
             <span className="text-[#b4b4b4] ml-2 flex flex-row items-center justify-center ">
             {shortenedParagraph}

             </span>
          </span>
        </p>
        <div className="flex items-center ml-3  text-gray-600">
          <span className="mr-2">{icon}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
        </div>
  );
};

export default MailList;
