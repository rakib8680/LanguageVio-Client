import React from 'react';
import toast from 'react-hot-toast';
import { FaTrash, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyClassesRow = ({ singleClass, index, classes, setClasses }) => {

    console.log(singleClass);
    const { className, image, price, seats, _id, status, enrolled } = singleClass || {};



    // delete class 
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_BASE_URL}/classes/${_id}`, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                toast.success('Class deleted successfully')
                                const remaining = classes.filter(cls => cls._id !== _id)
                                setClasses(remaining)
                            }
                        })

                }
            })
    }







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
            </td>
            <td>
                ${price}
            </td>
            <td>
                <p className={`${status === 'pending' && 'bg-yellow-300 px-3 rounded-full mx-auto w-fit'} ${status === 'approved' && 'bg-green-300 px-3 rounded-full mx-auto w-fit'}`}>{status}</p>
            </td>
            <td className='space-y-5'>
                <Link className='btn btn-square btn-info bg-sky-400 border-none btn-md tooltip-left tooltip flex tooltip-info' data-tip="Pay Now"><FaWallet size={20} /></Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-square btn-warning btn-md tooltip-left tooltip flex tooltip-warning ' data-tip="Delete Class" ><FaTrash size={20} /></button>
            </td>
        </tr>
    );
};

export default MyClassesRow;