import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ManageClassesRow from './ManageClassesRow';
import { updateClass } from '../../api/class';


const ManageClasses = () => {
    useTitle('Manage Classes');
    const { classes } = useParams();
    const [allClasses, setAllClasses] = useState([]);

    // const allClasses = useLoaderData();


    // update class status 
    const updateClassStatus = (classStatus, _id) => {
        const data = {
            status: classStatus
        }
        updateClass(data, _id)
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/${classes}`)
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [updateClassStatus])








    return (
        <div className='pb-24 pt-20'>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Total Classes {allClasses.length} </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-4/5 mx-auto">
                    {/* head */}
                    <thead >
                        <tr className='text-center' >
                            <th>
                            </th>
                            <th className='text-base text-slate-500'>Class</th>
                            <th className='text-base text-slate-500'>Instructor</th>
                            <th className='text-base text-slate-500'>Seats</th>
                            <th className='text-base text-slate-500'>Price</th>
                            <th className='text-base text-slate-500'>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gradient-to-br from-indigo-100 via-red-100 '>
                        {
                            allClasses.map((singleClass, index) =>
                                <ManageClassesRow
                                    singleClass={singleClass}
                                    index={index}
                                    key={index}
                                    updateClassStatus={updateClassStatus}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;