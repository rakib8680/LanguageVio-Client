import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import TeacherCard from './teacherCard';

const Instructors = () => {

    const instructorsData = useLoaderData();

    return (
        <div className='bg-gradient-to-br from-indigo-100 via-red-100 to-purple-100 pb-20'>
            <div className='py-20 text-center text-3xl font-bold text-slate-800'>
                <h1>Meet Our Instructors</h1>
                <div className='flex justify-center mt-6'><FaUsers size={80} className="text-indigo-400" /></div>
                <div className='divider w-1/4 mt-10 mx-auto'>------</div>
            </div>
            <div>
                {
                    instructorsData.map((instructor,index) => <TeacherCard key={index} instructor={instructor}  />)
                }
            </div>
        </div>
    );
};

export default Instructors;