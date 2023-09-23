import React from 'react';

const InstructorCard = ({ info }) => {

    const {
        teacher_name,
        experience,
        language,
       schedule,
        image,
    } = info || {};

    return (
        <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full object-cover" src={image} alt="Card Image" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{teacher_name}</h2>
                <p className="mt-2 text-gray-600">Experience : {experience}</p>
                <p className="mt-2 text-gray-600">Class : {language}</p>
                <p className="mt-2 text-gray-600">Schedule : {schedule}</p>
                <div className="mt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">teacher</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">popular</span>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;