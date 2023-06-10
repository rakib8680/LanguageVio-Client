import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageClassesRow from './ManageClassesRow';

const ManageClasses = () => {

    const allClasses = useLoaderData()


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
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;