import React from 'react';
import { FaEye, FaTrash, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedClassRow = ({ singleClass, index }) => {

    const { class_name, image, price, teacher, available_seats } = singleClass || {};


    return (
        <tr className=' text-center mx-auto border-indigo-200  border-y-2  text-base font-medium'>
            <td>
                {index + 1}
            </td>
            <td className='md:flex flex-col items-center'>
                    <div className=" w-52">
                        <img src={image} />
                    </div>
                    <h1 className='bg-slate-400 text-white w-fit px-14 text-base font-bold '>{class_name}</h1>
            </td>
            <td>
                {teacher}
            </td>
            <td>
                {available_seats}
            </td>
            <td>
                ${price}
            </td>
            <td className='space-y-5'>
                <Link className='btn btn-square btn-info bg-sky-400 border-none btn-md tooltip-left tooltip flex tooltip-info' data-tip="Pay Now"><FaWallet size={20} /></Link>
                <button className='btn btn-square btn-warning btn-md tooltip-left tooltip flex tooltip-warning ' data-tip="Delete Class" ><FaTrash   size={20}/></button>
            </td>
        </tr>
    );
};

export default SelectedClassRow;