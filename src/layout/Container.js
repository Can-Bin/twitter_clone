import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex bg-white w-11/12 min-h-screen mx-auto'>
        {children}
    </div>
  )
}

export default Container