import React, { useState } from 'react'
import SideLinks from '../components/SideLinks';
import {FaTwitter, BiHomeCircle, FaHashtag, IoIosNotificationsOutline,HiOutlineMail,BiBookmark, RiFileList2Line, HiOutlineUser, CiCircleMore } from "../icons.js"
import UserBox from '../components/UserBox';

const sideBarLinks = [
  {
    text: "",
    logo: <FaTwitter className='w-6 h-6 text-primary-base'/>
  },
  {
    text: "Home",
    logo: <BiHomeCircle className='w-6 h-6'/>
  },
  {
    text: "Explore",
    logo: <FaHashtag  className='w-6 h-6'/>
  },
  {
    text: "Notifications",
    logo: <IoIosNotificationsOutline className='w-6 h-6'/>
  },
  {
    text: "Messages",
    logo: <HiOutlineMail className='w-6 h-6'/>
  },
  {
    text: "Bookmarks",
    logo: <BiBookmark className='w-6 h-6'/>
  },
  {
    text: "Lists",
    logo: <RiFileList2Line className='w-6 h-6'/>
  },
  {
    text: "Profile",
    logo: <HiOutlineUser className='w-6 h-6'/>
  },
  {
    text: "More",
    logo: <CiCircleMore className='w-6 h-6'/>
  }
]

const Sidebar = () => {
  const [active, setActive] = useState("Home")
  const handleMenuItemClick = (text) => {
    setActive(text)
  }
  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='flex flex-col items-center'>
        <ul>
          {
            sideBarLinks.map((link)=>(
              <li className='w-56 hover:cursor-pointer ml-6'>
                <SideLinks text={link.text} logo={link.logo} active={active} onMenuItemClick={handleMenuItemClick}/>
              </li>
            ))
          }
        </ul>
        <button className='rounded-full bg-primary-base text-white text-xl font-bold w-10/12 py-3 mt-4 hover:bg-primary-dark duration-200'>Tweet</button>
      </div>
      <div className='w-11/12 pl-3 py-2 mt-24'>
        <UserBox/>
      </div>
    </div>
  )
}

export default Sidebar
