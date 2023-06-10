import React from 'react';
import { BiCheck } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { MdFeedback } from 'react-icons/md';

const ManageClassesRow = ({ singleClass, index, classes, setClasses }) => {

    console.log(singleClass);

    const { className, image, price, seats, _id, status, email } = singleClass || {};



    return (
        <tr className=' text-center mx-auto border-indigo-200  border-y  text-base font-medium'>
            <td>
                {index + 1}
            </td>
            <td className='flex flex-col items-center bg-slate-100 w-fit mx-auto '>
                <div className=" w-52">
                    <img src={image} className="rounded-md" />
                </div>
                <h1 className='bg-slate-300 text-slate-600 w-fit px-14 text-base font-bold rounded-b-md'>{className}</h1>
            </td>
            <td >
                <div className='md:flex flex-col items-center w-fit mx-auto'>
                    <img src={singleClass?.teacher?.image} className="mask mask-squircle" />

                    <h1 className=' text-slate-700 w-fit px-14 text-sm font-bold rounded-b-md'>{email}</h1>
                </div>
            </td>

            <td>
                {seats}
            </td>
            <td>
                ${price}
            </td>
            <td>
                <p className={`${status === 'pending' && 'bg-yellow-300 px-3 rounded-full mx-auto w-fit'} ${status === 'approved' && 'bg-green-300 px-3 rounded-full mx-auto w-fit'} ${status === 'denied' && 'bg-red-300 px-3 rounded-full mx-auto w-fit'}`}>{status}</p>
            </td>
            <td className='space-y-5'>
                <button className=' bg-green-400  text-white btn btn-circle  tooltip-left tooltip flex tooltip-success' data-tip="Approve">
                    <BiCheck size={33} />
                </button>
                <button className=' bg-red-400 text-white btn btn-circle tooltip-left tooltip flex tooltip-warning ' data-tip="Deny" >
                    <RxCross2 size={27} />
                </button>
                <button className=' bg-blue-400 text-white btn btn-circle tooltip-left tooltip flex tooltip-info ' data-tip="Feedback">
                    <MdFeedback size={23}/>
                </button>
            </td>
        </tr>
    );
};

export default ManageClassesRow;