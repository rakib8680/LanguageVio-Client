import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo2.jpg'

const Footer = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/4 mb-8 md:mb-0   ">
                        <img src={logo} alt="Logo" className="w-40 h-40 mb-4 mask mask-squircle" />
                        <p className="text-primary bg-slate-100 w-fit px-3 py-1 font-black">LANGUAGEVIO <small className='font-normal'>.inc</small></p>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h4 className="text-slate-400 font-semibold mb-4">Navigation</h4>
                        <ul className="text-slate-300">
                            <li className="mb-2"><a href="#">Home</a></li>
                            <li className="mb-2"><a href="#">About Us</a></li>
                            <li className="mb-2"><a href="#">Services</a></li>
                            <li className="mb-2"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-24">
                        <h4 className="text-slate-400 font-semibold mb-4">Social Media</h4>
                        <div className="flex">
                            <a href="#" className="mr-4"><FaFacebook className="text-slate-300" size={22} /></a>
                            <a href="#" className="mr-4"><FaTwitter className="text-slate-300" size={22} /></a>
                            <a href="#" className="mr-4"><FaInstagram className="text-slate-300" size={22} /></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-slate-400 font-semibold mb-4">Contact Info</h4>
                        <p className="text-slate-300 mb-2">123 Main Street, City</p>
                        <p className="text-slate-300 mb-2">Phone: 123-456-7890</p>
                        <p className="text-slate-300 mb-2">Email: abdullah.rakib.00@gmail.com</p>
                    </div>
                </div>
                <div className="mt-8 text-slate-300 text-center text-sm">
                    &copy; {new Date().getFullYear()} LANGUAGEVIO. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;