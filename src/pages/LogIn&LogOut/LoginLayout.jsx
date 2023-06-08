import React from 'react';
import Login from './Login';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/login.json'

const LoginLayout = () => {
    return (
        <div className='login-page-design   '>
            <div>
                <Lottie  animationData={loginAnimation} loop={true} />
            </div>
            <Login/>
            
        </div>
    );
};

export default LoginLayout;