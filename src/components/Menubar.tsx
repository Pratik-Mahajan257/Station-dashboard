import React from 'react'
import Discussions from './subcomponents/menubar/Discussions'
import Dropdown from './subcomponents/menubar/Dropdown'
import Navbar from './subcomponents/menubar/Navbar'

function Menubar() {
  return (
    <div className='bg-[#FFFFFF] h-full w-[260px] flex flex-col 
   border-gray-300 border-r-[1px] overflow-y-scroll scrollbar-hide '>
    <Navbar />
    <Discussions />
    <Dropdown
  name="Mailboxes"
  items={[
    { text: 'All other emails', icon: '🌥' ,num : "1127"},
    { text: 'Calendly', icon: '📧' ,num : "3" },
    { text: 'Centigo', icon: '💼'  ,num : ""},
    { text: 'Nmbrs Payroll', icon: '👨🏽‍💼'  ,num : ""},
    { text: 'Stripe', icon: '🚆'  ,num : "1"},
    { text: 'Pre-Seed Investors', icon: '💰'  ,num : ""},
  ]}
 
/>

<Dropdown
  name="People"
  items={[
    { text: 'Hester Noorman', icon: '📨'  ,num : ""},
    { text: 'Jothi Priyadharshan', icon: '🚟'  ,num : "47"},
      ]}
/>

<Dropdown
  name="Investors"
  items={[
    { text: 'Accel', icon: '🌥'  ,num : ""},
    { text: 'Airbridge', icon: '📧'  ,num : "2"},
    { text: 'Blossom Capital', icon: '💼'  ,num : ""},
    { text: 'Firstminute Capital', icon: '👨🏽‍💼'  ,num : ""},
    { text: 'Global Founders Capital', icon: '🚆'  ,num : ""},
    { text: 'Inkef Capital', icon: '💰'  ,num : ""},
    { text: 'Rockstart', icon: '💰'  ,num : ""},
  ]}
/>



    </div>
  )
}

export default Menubar
