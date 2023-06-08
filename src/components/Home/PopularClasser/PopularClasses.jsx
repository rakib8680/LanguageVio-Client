








import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles 
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import './popularclasses.css'

// import required modules 
import { FreeMode, Pagination } from "swiper";
import ClassesCard from "./ClassesCard";

export default function PopularClasses() {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        const url = './classes.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <div className="classes-bg py-16">
            <div className="py-10">
                <h1 className='text-center text-3xl text-slate-800'>Popular Classes</h1>
                <hr className='w-3/12 mx-auto mt-10 border ' />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="my-container py-20 container mx-auto">
                {classes &&
                    classes.map((info, index) => (
                        <SwiperSlide key={index}>
                            <ClassesCard key={index} info={info} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}