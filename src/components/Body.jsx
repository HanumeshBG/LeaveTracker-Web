import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Body = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className='w-full min-h-screen flex'>
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className="flex flex-col flex-1 transition-all duration-300">
        <NavBar />
        <div className={`flex-1 flex justify-center items-center transition-all duration-300 py-2`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Body