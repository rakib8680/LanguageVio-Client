import React from 'react';
import toast from 'react-hot-toast';
import { setRole } from '../../api/auth';

const ManageUsersRow = ({ singleClass, index }) => {

    const { name, image, role, email } = singleClass || {};

    const handleAdmin = email => {
        setRole(email, 'admin')
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User became Admin');
                    window.location.reload();
                }
            })
    }
    const handleInstructor = email => {
        setRole(email, 'instructor')
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User became Instructor');
                    window.location.reload();
                }
            })
    }


    return (
        <tr className=' text-center mx-auto border-indigo-200  border-y  text-base font-medium'>
            <td>
                {index + 1}
            </td>
            <td className='  mx-auto '>
                <div className=" flex flex-col items-center ">
                    <img src={image} className="rounded-full w-20" />
                    <h1 className='font-bold '>{name}</h1>
                </div>
            </td>
            <td >
                <h1 className=' text-slate-700 w-fit px-14 text-sm font-bold rounded-b-md'>{email}</h1>
            </td>
            <td>
                <p className={`${!role && 'bg-green-300 px-3 rounded-full mx-auto w-fit'} ${role === 'instructor' && 'bg-indigo-300 px-3 rounded-full mx-auto w-fit'} ${role === 'admin' && 'bg-sky-300 px-3 rounded-full mx-auto w-fit'}`}>{role || 'student'}</p>
            </td>
            <td onClick={() => handleInstructor(email)} className='space-y-2 flex  flex-col justify-center  w-1/2 mx-auto '>
                <button className=' bg-indigo-400  text-white btn  tooltip-left tooltip flex ' data-tip="make instructor"  disabled={role === 'instructor' && true} >
                    Make Instructor
                </button>
                <button onClick={() => handleAdmin(email)} className=' bg-sky-400 text-white btn tooltip-left tooltip flex ' data-tip="make admin" disabled={role === 'admin' && true} >
                    Make Admin
                </button>
            </td>
        </tr>
    );
};

export default ManageUsersRow
    ;