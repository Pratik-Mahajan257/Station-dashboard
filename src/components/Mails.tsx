import React, { useState } from "react";
import Navbar from "./subcomponents/mails/Navbar";

import Date from "./subcomponents/mails/Date";
import MailLists from "./subcomponents/mails/MailLists";

function Mails() {

    return ( 

        <div className=" w-[750px] bg-white mx-[10px] my-[10px] rounded-lg flex flex-col overflow-y-scroll scrollbar-hide shadow-xl">
            <div className="mb-10 ">
        <Navbar />
            </div>
        <Date 
        Date="Thursday, 21 October"
        />
      <MailLists />
         <Date 
        Date="Thursday, 22 October"
        />
      <MailLists />
       <Date 
        Date="Thursday, 23 October"
        />
      <MailLists />
       <Date 
        Date="Thursday, 24 October"
        />
      <MailLists />
       <Date 
        Date="Thursday, 25 October"
        />
      <MailLists />
    </div>
        );

    
}

export default Mails;