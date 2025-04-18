import React from 'react';
import { Link, NavLink } from 'react-router';

import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-0 shadow-sm  mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="cursor-pointer mr-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}
                            className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                                : '')}>Home</NavLink></li>
                        <li><NavLink to={'/about'}
                            className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                                : '')}>About</NavLink></li>
                        <li><NavLink to={'/cart'}
                            className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                                : '')}><FaShoppingCart size={20} /> </NavLink></li>
                        <li><NavLink to={'/favorite'}
                            className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                                : '')}><MdBookmarkAdd size={20} /></NavLink></li>
                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-xl">FLAGSHIP PHONE</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}
                        className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                            : '')}>Home</NavLink></li>
                    <li><NavLink to={'/about'}
                        className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                            : '')}>About</NavLink></li>
                    <li><NavLink to={'/cart'}
                        className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                            : '')}><FaShoppingCart size={20}/> </NavLink></li>
                    <li><NavLink to={'/favorite'}
                        className={({ isActive }) => (isActive ? 'bg-indigo-500 text-white'
                            : '')}><MdBookmarkAdd size={20}/></NavLink></li>

                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;