import React from 'react'
import SideLinks from '../components/SideLinks';
import {FaTwitter, BiHomeCircle, FaHashtag, IoIosNotificationsOutline,HiOutlineMail,BiBookmark, RiFileList2Line, HiOutlineUser, CiCircleMore } from "../icons.js"

const Sidebar = () => {
  return (
    <div className='w-72 bg-white-700 flex flex-col items-center '>  
        <SideLinks text="" logo={<FaTwitter className='w-7 h-7 text-primary-base'/>}/>
        <SideLinks text="Home" logo={<BiHomeCircle className='w-7 h-7'/>}/>
        <SideLinks text="Explore" logo={<FaHashtag className='w-7 h-7'/>}/>
        <SideLinks text="Notifications" logo={<IoIosNotificationsOutline className='w-7 h-7'/>}/>
        <SideLinks text="Messages" logo={<HiOutlineMail className='w-7 h-7'/>}/>
        <SideLinks text="Bookmarks" logo={<BiBookmark className='w-7 h-7'/>}/>
        <SideLinks text="Lists" logo={<RiFileList2Line className='w-7 h-7'/>}/>
        <SideLinks text="Profile" logo={<HiOutlineUser className='w-7 h-7'/>}/>
        <SideLinks text="More" logo={<CiCircleMore className='w-7 h-7'/>}/>
    </div>
  )
}

export default Sidebar