import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-100 py-4 px-6">
            <NavLink className="text-xl font-bold text-gray-800" to="/">Your Website Logo or Name</NavLink>
            <div className="flex items-center">
                <NavLink className="mr-4 text-gray-800 hover:text-gray-600" exact to="/" activeClassName="text-indigo-500">Home</NavLink>
                <NavLink className="mr-4 text-gray-800 hover:text-gray-600" to="/instructors" activeClassName="text-indigo-500">Instructors</NavLink>
                <NavLink className="mr-4 text-gray-800 hover:text-gray-600" to="/classes" activeClassName="text-indigo-500">Classes</NavLink>
                <NavLink className="mr-4 text-gray-800 hover:text-gray-600" to="/dashboard" activeClassName="text-indigo-500">Dashboard</NavLink>
                <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full" src="user-profile-picture.jpg" alt="User Profile Picture" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;