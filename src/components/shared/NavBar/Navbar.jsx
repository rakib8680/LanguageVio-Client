import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo2.jpg'
import logo2 from '../../../assets/logo1.jpg'

const Navbar = () => {

    const user = true


    return (
        <div className=" navbar nav-bar">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-md bg-base-100  bg-opacity-80 rounded-box w-52 ">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>All Toys</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Blogs</NavLink>

                    </li>
                    {user?.email ?
                        <li>
                            <NavLink to='/addToy' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Add a Toy</NavLink>
                            <NavLink to='/myToys' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>My Toys</NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Register</NavLink>

                        </li>
                    }
                </ul>
            </div>
            <Link to="/" className="flex flex-col items-center  ml-20 md:ml-0 gap-0">
                <img src={logo} className="md:w-20 md:h-20 w-16 h-16 ms-2 md:ms-0 mask mask-parallelogram-2" />
                <h1 className='font-black md:ms-5 md:text-base md:leading-6 leading-6 ms-3 text-lg'>LANGUAGEVIO</h1>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal gap-10">
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-semibold text-primary hover:text-white hover:font-bold hover:bg-orange-500 round' : 'hover:text-lg')}>Home</NavLink>

                </li>
                <li>
                    <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Instructors</NavLink>
                </li>
                <li>
                    <NavLink to='/classes' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Classes</NavLink>

                </li>
                {user &&
                    <li>
                        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Dashboard</NavLink>
                    </li>
                }
            </ul>
        </div>

        <div className='navbar-end'>
            {
                user &&
                <div className='flex items-center md:flex-row flex-col gap-2'>
                    <div className="avatar md:mr-5  mr-3 tooltip tooltip-left tooltip-neutral" data-tip={user?.displayName}>
                        <div className="md:w-11 w-8 rounded-full ring ms-2 md:ms-0">
                            <img src={logo2} />
                        </div>
                    </div>
                    <button className='btn btn-outline btn-error btn-xs md:btn-sm '>Log Out</button>
                </div>
            }
        </div>
        
    </div>
    );
};

export default Navbar;