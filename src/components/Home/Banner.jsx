import React from 'react';
import './home.css'
import communication from '../../assets/communication.png'
import { FaBookReader } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel autoPlay={true}  className='text-center'>
            <div className='banner-bg py-20'>
                <div className='flex justify-around items-center container mx-auto '>
                    <div className='text-slate-800 space-y-7 md:w-[570px]'>
                        <h1 className='text-6xl font-black leading-tight'>New language, new opportunities, new you</h1>
                        <div className=' text-slate-950 leading-8'>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Take customizable 1-on-1 lessons trusted by millions of users</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Learn from certified teachers that fit your budget and schedule</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Connect with a global community of language learners</p>
                        </div>
                        <button className='btn btn-primary bg-slate-800 text-white px-10 rounded-none'>Get Started</button>
                    </div>
                    <div className='md:w-[750px]'>
                        <img src={communication} />
                    </div>
                </div>
            </div>
            <div className='banner-bg2 py-20'>
                <div className='flex justify-around items-center container mx-auto '>
                    <div className='text-slate-800 space-y-7 md:w-[570px]'>
                        <h1 className='text-6xl font-black leading-tight'>New language, new opportunities, new you</h1>
                        <div className=' text-slate-950 leading-8'>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Take customizable 1-on-1 lessons trusted by millions of users</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Learn from certified teachers that fit your budget and schedule</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Connect with a global community of language learners</p>
                        </div>
                        <button className='btn btn-primary bg-slate-800 text-white px-10 rounded-none'>Get Started</button>
                    </div>
                    <div className='md:w-[750px]'>
                        <img src={communication} />
                    </div>
                </div>
            </div>
            <div className='banner-bg3 py-20'>
                <div className='flex justify-around items-center container mx-auto '>
                    <div className='text-slate-800 space-y-7 md:w-[570px]'>
                        <h1 className='text-6xl font-black leading-tight'>New language, new opportunities, new you</h1>
                        <div className=' text-slate-950 leading-8'>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Take customizable 1-on-1 lessons trusted by millions of users</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Learn from certified teachers that fit your budget and schedule</p>
                            <p className='flex items-center gap-3'><FaBookReader size={21} className='text-slate-600' />Connect with a global community of language learners</p>
                        </div>
                        <button className='btn btn-primary bg-slate-800 text-white px-10 rounded-none'>Get Started</button>
                    </div>
                    <div className='md:w-[750px]'>
                        <img src={communication} />
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;