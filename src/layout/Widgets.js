import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
  return (
    <div className='w-80'>
        <div className='flex items-center justify-evenly p-2 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-2 focus-within:text-primary-base '>
          <CiSearch/>
          <input type="text" placeholder='Search Twitter'className='bg-inherit outline-none w-full ml-3 text-sm ' />
        </div>
        <div className='mt-5 border-none'>
          <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'reactjs'
              }}
              options={{
                height: '700'
              }}
            />
        </div>
    </div>
  )
}

export default Widgets