import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex bg-blue-100 max-w-7xl min-h-screen mx-auto'>
        {children}
    </div>
  )
}

export default Container