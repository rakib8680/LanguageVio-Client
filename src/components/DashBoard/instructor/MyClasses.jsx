import React, { useContext, useEffect, useState } from 'react';
import { getClasses } from '../../../api/class';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import MyClassesRow from './MyClassesRow';

const MyClasses = () => {

    useTitle('My Classes');
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])


    
    useEffect(() => {
        getClasses(user?.email)
        .then(data =>setClasses(data))
    }, []);



    return (
        <div className='pb-24 pt-20'>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>You have {classes.length} Classes</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-4/5 mx-auto">
                    {/* head */}
                    <thead >
                        <tr className='text-center' >
                            <th>
                            </th>
                            <th className='text-base text-slate-500'>Class</th>
                            <th className='text-base text-slate-500'>Seats</th>
                            <th className='text-base text-slate-500'>Enrolled Students</th>
                            <th className='text-base text-slate-500'>Price</th>
                            <th className='text-base text-slate-500'>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gradient-to-br from-indigo-100 via-red-100 '>
                        {
                            classes.map((singleClass, index) =>
                                <MyClassesRow
                                    singleClass={singleClass}
                                    index={index}
                                    classes={classes}
                                    setClasses={setClasses}
                                    key={index}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;