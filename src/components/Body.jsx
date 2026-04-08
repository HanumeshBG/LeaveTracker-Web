import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body