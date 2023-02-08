import React, { useState } from "react";
import moment from "moment";
import { AiOutlineSend } from 'react-icons/ai'

interface ChatProps {
  profilePicture: string;
  name: string;
}

const Chat: React.FC<ChatProps> = ({ profilePicture, name }) => {
  const [messages, setMessages] = useState<{
    name: string;
    message: string;
    time: string;
  }[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        name,
        message: newMessage,
        time: moment().format("h:mm A"),
      },
    ]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className=" w-[420px] bg-white mx-[10px] my-[10px] rounded-lg relative flex flex-col  shadow-xl">
      <div className="flex flex-col  justify-end h-full mb-12 overflow-y-scroll scrollbar-hide  ">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-row justify-start items-start p-1 mx-3 my-1 ">
            <img
              src={profilePicture}
              alt={`${message.name}'s profile`}
              className="w-6 h-6 rounded-md object-cover"
            />
            <div className="ml-4 py-2 pr-8 pl-3 pb-4 w-fit rounded-xl   flex flex-row gap-2 relative justify-start items-center bg-[#f7f7f7]">
              <p className="text-sm font-bold text-blue-600  ">
                {message.name}
              </p>
              <p className="text-sm text-gray-700">{message.message}</p>
              <p className="text-[8px] absolute bottom-[2px] right-2 text-gray-500 ">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between shadow-2xl gap-3  outline-none w-full border-gray-300 absolute bottom-0 left-0 ">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='type something..'
          className=" p-2 w-full bg-gray-100  ml-5   rounded-lg outline-none"
        />
        <div
          className=" relative mr-5 text-white rounded-lg"
          onClick={handleSendMessage}
        >
          <AiOutlineSend className="text-black"/>
        </div>
      </div>
    </div>
  );
};

export default Chat;
