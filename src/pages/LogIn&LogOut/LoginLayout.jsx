import Login from './Login';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/login.json'
import useTitle from '../../Hooks/useTitle';

const LoginLayout = () => {

    useTitle('Login');

    return (
        <div className='login-page-design   '>
            <div>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <Login />

        </div>
    );
};

export default LoginLayout;