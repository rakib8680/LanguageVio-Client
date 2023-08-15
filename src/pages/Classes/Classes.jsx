import React, { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { getAllClass } from '../../api/class';
import useTitle from '../../Hooks/useTitle';
import ClassCard from './ClassCard';
import './classes.css'

const Classes = () => {
    const [classes, setClasses] = useState([])
    useTitle('All Classes')
    console.log(classes);

    useEffect(() => {
        getAllClass().then(res => setClasses(res))
    }, [])

    return (
        <div className='class-bg mb-20'>
            <div className='py-20 text-center text-3xl font-bold text-slate-800'>
                <h1>Our Classes</h1>
                <div className='flex justify-center mt-6'><FaClipboardList size={80} className="text-indigo-400" /></div>
                <div className='divider w-1/4 mt-10 mx-auto'>------</div>
            </div>

            <div className='md:grid grid-cols-3 container mx-auto'>

                {
                 classes.map((clash, index) => <ClassCard key={index} clash={clash} />)
                }
            </div>
        </div>
    );
};

export default Classes;