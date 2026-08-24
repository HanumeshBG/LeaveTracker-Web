import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex-1 flex justify-center items-center mt-3'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body