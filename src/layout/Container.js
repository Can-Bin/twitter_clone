import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex bg-white w-full min-h-screen mx-auto'>
        {children}
    </div>
  )
}

export default Container