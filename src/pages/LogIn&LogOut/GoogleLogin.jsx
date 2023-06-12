import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/auth';
import { AuthContext } from '../../Providers/AuthProvider';

const GoogleLogin = () => {
    const { handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                saveUser(result.user)
                toast.success('Login successful')

                navigate('/')
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div>
            <div>
                <div className="divider w-2/3 mx-auto">or</div>
                <div className="w-full text-center my-4">
                    <button onClick={handleSignIn} className="btn btn-circle btn-outline">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;