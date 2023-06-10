import React from 'react';
import { FaPencilRuler,  } from 'react-icons/fa';
import {MdFeedback} from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyClassesRow = ({ singleClass, index, classes, setClasses }) => {

    const { className, image, price, seats, _id, status, enrolled } = singleClass || {};



    return (
        <tr className=' text-center mx-auto border-indigo-200  border-y  text-base font-medium'>
            <td>
                {index + 1}
            </td>
            <td className='md:flex flex-col items-center bg-slate-100 w-fit mx-auto '>
                <div className=" w-52">
                    <img src={image} className="rounded-md" />
                </div>
                <h1 className='bg-slate-400 text-white w-fit px-14 text-base font-bold rounded-b-md'>{className}</h1>
            </td>
            <td>
                {seats}
            </td>
            <td>
                {
                    enrolled ? enrolled : '0'
                }
            </td>
            <td>
                ${price}
            </td>
            <td>
                <p className={`${status === 'pending' && 'bg-yellow-300 px-3 rounded-full mx-auto w-fit'} ${status === 'approved' && 'bg-green-300 px-3 rounded-full mx-auto w-fit' } ${status === 'denied' && 'bg-red-300 px-3 rounded-full mx-auto w-fit' }`}>{status}</p>
            </td>
            <td className='space-y-5'>
                <Link className='btn btn-square btn-info bg-blue-400 border-none btn-md text-white  tooltip-left tooltip flex tooltip-info' data-tip="FeedBack"><MdFeedback size={25} /></Link>
                <button className='btn btn-square btn-success bg-green-600 text-white btn-md tooltip-left tooltip flex tooltip-success ' data-tip="Edit Class" ><FaPencilRuler size={20} /></button>
            </td>
        </tr>
    );
};

export default MyClassesRow;