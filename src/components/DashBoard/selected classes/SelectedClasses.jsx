import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SelectedClassRow from './SelectedClassRow';

const SelectedClasses = () => {

    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])


    const url = `${import.meta.env.VITE_API_BASE_URL}/cart?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            })
    }, [url])

    return (
        <div className='pb-24 pt-10'>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Classes Selected : {classes.length}</h1>
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
                            <th className='text-base text-slate-500'></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gradient-to-br from-indigo-100 via-red-100 '>
                        {
                            classes.map((singleClass, index) =>
                                <SelectedClassRow
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

export default SelectedClasses;