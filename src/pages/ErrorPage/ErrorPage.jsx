import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/error2.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center  from-blue-200 via-red-200 to-indigo-200 min-h-screen bg-gradient-to-br ">
            <div className='m-0 p-0 '>
                <Lottie animationData={errorAnimation} loop={true} ></Lottie>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
            <p className="text-lg text-slate-600 mb-8">Something went wrong.</p>
            <Link to='/' className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded">
                Go Back
            </Link>
        </div>
    );
};

export default ErrorPage;