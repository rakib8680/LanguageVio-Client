import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo2.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out successfully');
            })
            .catch(err => toast.error(err.message))

    }


    return (
        <div className=" navbar nav-bar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" z-10  menu menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-md bg-base-100  bg-opacity-80 rounded-box w-52 ">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Home</NavLink>

                        </li>
                        <li>
                            <NavLink to='/classes' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Classes</NavLink>

                        </li>
                        <li>
                            <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Instructors</NavLink>
                        </li>

                        {user &&
                            <li>
                                <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Dashboard</NavLink>
                            </li>
                        }
                    </ul>
                </div>
                <Link to="/" className="flex flex-col items-center ml-8  md:ml-0 gap-0">
                    <img src={logo} className="md:w-20 md:h-20 w-16 h-16 ms- md:ms-4 mask mask-parallelogram-2" />
                    <h1 className='font-black md:ms-5 md:text-base md:leading-6 leading-6 ms-3 text-lg -mt-3 pb-2'>LANGUAGEVIO</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal gap-10">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Home</NavLink>

                    </li>
                    <li>
                        <NavLink to='/classes' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Classes</NavLink>

                    </li>
                    <li>
                        <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Instructors</NavLink>
                    </li>
                    {user &&
                        <li>
                            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-passive')}>Dashboard</NavLink>
                        </li>
                    }
                </ul>
            </div>

            <div className='navbar-end'>
                {
                    user ?
                        <div className='flex items-center md:flex-row flex-col gap-2'>
                            <div className="avatar md:mr-5  mr-3 tooltip tooltip-left tooltip-neutral cursor-pointer" data-tip={user?.displayName}>
                                <div className="md:w-11 w-8 rounded-full ring ms-2 md:ms-0">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button className='btn btn-outline btn-error btn-xs rounded-none md:btn-sm ' onClick={handleSignOut}>Log Out</button>
                        </div>
                        :
                        <Link to='/login' className='btn btn-outline btn-primary btn-xs rounded-none md:btn-sm '>Log In</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;