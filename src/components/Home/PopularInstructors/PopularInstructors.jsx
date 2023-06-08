import React, { useEffect, useState } from "react";
// Import Swiper React components 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles 
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules 
import { FreeMode, Pagination } from "swiper";
import InstructorCard from "./InstructorCard";
import video from '../../../assets/teaching.mp4'



const PopularInstructors = () => {


    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        const url = './instructors.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])



    return (
        <div className="bg-gradient-to-b from-white via-indigo-100 to-red-100 py-16 ">
            <div className="pt-10 ">
                <h1 className='text-center text-3xl text-slate-800'>Popular Instructors</h1>
                <h1 className='text-center text-sm text-slate-200 border w-fit mx-auto px-3 mt-5 bg-primary'>Enroll Now!!</h1>
                <hr className='w-3/12 mx-auto mt-7 border border-slate-300' />
            </div>
            {/* <div>
                <video autoPlay={true} controls loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="my-container py-20 container mx-auto ">
                {instructors &&
                    instructors.map((info, index) => (
                        <SwiperSlide key={index}>
                            <InstructorCard key={index} info={info} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default PopularInstructors;