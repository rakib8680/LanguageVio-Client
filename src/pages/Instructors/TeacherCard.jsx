import React from 'react';
import { Link } from 'react-router-dom';
// import { } from 'react-icons/fa';

const TeacherCard = ({ instructor }) => {

    const { teacher_name, image, language, bio, schedule, experience, email } = instructor || {};

    return (
        <div className='mb-10'>
            <div className="card lg:card-side backdrop-blur-md bg-white bg-opacity-20 shadow-md border-slate-400 border md:w-4/6  mx-auto md:h-[600px] p-5 md:p-0 rounded-none md:rounded-xl ">
                <figure>
                    <img src={image} className="w-full md:w-[600px] rounded-lg md:rounded-none mask mask-squircle" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold ">{teacher_name}</h2>
                    <div className='divider'></div>
                    <p><span className='font-semibold'>Language :</span> {language}</p>
                    <p><span className='font-semibold'>Experience :</span> {experience}</p>
                    <p><span className='font-semibold'>Email :</span> {email}</p>
                    <p><span className='font-semibold'>Schedule :</span> {schedule}</p>
                    <p className='md:w-[650px]'>{bio}</p>
                    <div className="card-actions justify-end">
                        <Link to='/' className="btn btn-neutral">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;