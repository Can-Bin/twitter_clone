import React from 'react'

const SideLinks = ({logo, text, active, onMenuItemClick}) => {
  const isActive = active === text
  return (
    <div className='group w-full' onClick={()=> onMenuItemClick(text)}>
      <a href={text.toLowerCase()} className='inline-block pointer-events-none' >
        <div className={`flex justify-start items-center rounded-full mt-3 group-hover:text-primary-base group-hover:bg-primary-light duration-200 cursor-pointer ${isActive ? "text-primary-base": ""}`}>
            <div className='mr-6 font-bold'>{logo}</div>
            <div className='font-bold'>{text}</div>
        </div>
      </a>
    </div>
  )
}

export default SideLinks