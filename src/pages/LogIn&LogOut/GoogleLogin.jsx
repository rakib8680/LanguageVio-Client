import React from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // const loggedInUser = result.user;
                toast.success('Login successful')
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div>
            <div>
                <div className="divider"></div>
                <div className="w-full text-center my-4">
                    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;