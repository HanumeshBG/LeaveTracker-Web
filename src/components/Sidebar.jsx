import React from 'react'
import { Menu, LayoutDashboard, CalendarPlus, CalendarDays, User, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ collapsed, setCollapsed }) => {
    const navigate = useNavigate();
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <LayoutDashboard size={22} />
        },
        {
            name: "Apply Leave",
            path: "/leave",
            icon: <CalendarPlus size={22} />
        },
        {
            name: "My Leaves",
            path: "/my-leaves",
            icon: <CalendarDays size={22} />
        },
        {
            name: "Profile",
            path: "/profile/view",
            icon: <User size={22} />
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <Settings size={22} />
        }
    ];

    const handleLogout = async () => {
        await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
        navigate('/login'); // Redirect to login page after logout
    }

  return (
    <aside className={`left-0 top-20 bottom-0 z-40 ${collapsed ? "w-[70px]" : "w-[230px]"} backdrop-blur-md transition-all duration-300 flex flex-col`}>
        <button className="h-14 w-full flex items-center justify-center  text-white  hover:bg-white/10 transition" onClick={() => setCollapsed(!collapsed)} >
            <Menu size={24} />
        </button>

        {/* Menu */}
        <nav className="flex flex-col gap-2 p-2">
            {menuItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => `h-12 rounded-lg flex items-center
                    ${collapsed ? "justify-center" : "justify-start gap-4 px-3" }  text-gray-300  hover:bg-white/10  hover:text-white
                    transition ${isActive ? "bg-[#4f32d8] text-white shadow-lg shadow-purple-500/20" : "" }`} >
                    {item.icon} {!collapsed && ( <span className="whitespace-nowrap">{item.name}</span>)}
                </NavLink>
            ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto p-2">
            <button className={`h-12 w-full rounded-lg  flex items-center ${collapsed ? "justify-center" : "justify-start gap-4 px-3" }
                 text-gray-300  hover:bg-white/10 hover:text-white transition`} onClick={handleLogout}>
                <LogOut size={22} /> {!collapsed && (<span>Logout</span>)}
            </button>
        </div>
    </aside>
  )
}

export default Sidebar