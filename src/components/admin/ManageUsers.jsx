import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/auth';
import useTitle from '../../Hooks/useTitle';
import ManageUsersRow from './ManageUsersRow';

const ManageUsers = () => {
    useTitle('Manage Users');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(data => setUsers(data));
    }, []);


    return (
        <div className='pb-24 pt-20'>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Total Users {users.length} </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-4/5 mx-auto">
                    {/* head */}
                    <thead >
                        <tr className='text-center' >
                            <th>
                            </th>
                            <th className='text-base text-slate-500'>User</th>
                            <th className='text-base text-slate-500'>Email</th>
                            <th className='text-base text-slate-500'>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gradient-to-br from-indigo-100 via-red-100 '>
                        {
                            users.map((singleClass, index) =>
                                <ManageUsersRow
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

export default ManageUsers;