import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const NavBar = () => {
  return (
    <div className="navbar shadow-2xl">
        <div className="flex-1">
            <Link to="/dashboard" className="btn btn-ghost text-xl">Leave Tracker</Link>
        </div>
        <div className="flex gap-2">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bgColor rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <Link to="/profile/view">
                    Profile
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar