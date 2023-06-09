import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedClassRow = ({ singleClass, index }) => {

    const { class_name, image, price, teacher, available_seats } = singleClass || {};


    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                        <img src={image} />
                    </div>
                </div>
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
            <td>
                <Link className='btn btn-square btn-success btn-sm tooltip-left tooltip flex tooltip-success' data-tip="View Details"><FaEye /></Link>
                <button className='btn btn-square btn-error btn-sm tooltip-left tooltip flex tooltip-error' data-tip="Delete Toy" ><FaTrash /></button>
            </td>
        </tr>
    );
};

export default SelectedClassRow;