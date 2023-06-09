import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import Logo from '../../assets/logo2.jpg'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { FaBookmark } from 'react-icons/fa'

const Sidebar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='text-center font-black bg-primary text-white w-fit mx-auto mt-5 px-4 py-1'>
                        LANGUAGEVIO.inc
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`sidebar-container ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='text-center font-black bg-primary text-white w-fit mx-auto mt-5 px-4 py-1'>
                            LANGUAGEVIO.inc
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                        </div>
                        <div className='divider w-2/3 mx-auto'></div>
                    </div>
                    {/* Menu Links */}
                    <NavLink
                        to='/dashboard/selectedClasses'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-700 ${isActive ? 'bg-gradient-to-br from-indigo-100 via-red-100 to-purple-100 border-slate-600 border' : 'text-gray-600'
                            }`
                        }
                    >
                        <FaBookmark className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Selected Classes</span>
                    </NavLink>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar