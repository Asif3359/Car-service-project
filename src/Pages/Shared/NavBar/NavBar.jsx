import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.svg"

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/profile">profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl w-20"><img className='w-16' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-sm btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;