import React from 'react';

const classesCard = ({ info }) => {

    const {
        className,
        price,
        seats,
        name,
        image,
    } = info || {};

    return (
        <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full object-cover h-[250px]" src={image}  />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{className}</h2>
                <p className="mt-2 text-gray-600">Price : ${price}</p>
                <p className="mt-2 text-gray-600">Teacher : {name}</p>
                <p className="mt-2 text-gray-600">Seats : {seats}</p>
                <div className="mt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">trending</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">skills</span>
                </div>
            </div>
        </div>
    );
};

export default classesCard;