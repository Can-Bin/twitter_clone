import React from 'react'

const SideLinks = ({logo, text}) => {
  return (
    <div className='flex justify-start items-center w-full ml-36 mt-4 hover:text-primary-base duration-200 cursor-pointer'>
        <div className='mr-6 '>{logo}</div>
        <div className='font-bold '>{text}</div>
    </div>
  )
}

export default SideLinks