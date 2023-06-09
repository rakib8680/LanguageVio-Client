import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SelectedClassRow from './SelectedClassRow';

const SelectedClasses = () => {

    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])


    const url = `http://localhost:5000/cart?email=${user?.email}`
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
                <table className="table w-full ">
                    {/* head */}
                    <thead >
                        <tr className='' >
                            <th>
                            </th>
                            <th className='text-base text-slate-500'>Class</th>
                            <th className='text-base text-slate-500'>Instructor</th>
                            <th className='text-base text-slate-500'>Seats</th>
                            <th className='text-base text-slate-500'>Price</th>
                            <th className='text-base text-slate-500'></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            classes.map((singleClass, index) =><SelectedClassRow singleClass={singleClass} index={index}  key={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;