import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='flex justify-center h-[100vh] items-center bg-secondary'><PulseLoader color="#be0003" size={20} /></div>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRoute;