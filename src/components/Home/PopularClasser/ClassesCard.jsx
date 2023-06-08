import React from 'react';

const classesCard = ({ info }) => {

    const {
        class_name,
        text,
        price,
        students,  
         
        enrolled,
        teacher,
        image,
        date,
    } = info || {};

    return (
        <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full object-cover" src={image} alt="Card Image"/>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{class_name}</h2>
                    <p className="mt-2 text-gray-600">Price : ${price}</p>
                    <p className="mt-2 text-gray-600">Teacher : {teacher}</p>
                    <p className="mt-2 text-gray-600">Students : {students}</p>
                    <div className="mt-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 2</span>
                    </div>
                </div>
        </div>
    );
};

export default classesCard;