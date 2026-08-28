import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Body = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <NavBar />
      <div className="flex flex-1 transition-all duration-300">
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <div className={`flex-1 flex justify-center items-center mt-3 transition-all duration-300 ${sidebarCollapsed ? "ml-[70px]" : "ml-[230px]"}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body