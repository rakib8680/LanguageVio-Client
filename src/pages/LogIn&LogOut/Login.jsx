import{ useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import GoogleLogin from './GoogleLogin';

const Login = () => {

    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const { signInUser, user, } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = data => {

        // sign in with email and pass 
        if (user?.email) {
            toast.error('User already logged in')
            return
        }

        signInUser(data.email, data.password)
            .then(() => {
                toast.success('Logged in successfully');
                navigate('/')
            })
            .catch(error => toast.error(error.message));

    }



    return (
        <div>
            <div className="hero  md:h-[850px] ">
                <div className="">
                    <h1 className='text-center text-3xl pb-7'>Sign In</h1>
                    <div className="card  md:w-[450px] w-[360px] shadow-lg bg-white backdrop-blur-md bg-opacity-10  border border-slate-500 rounded-md">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-error mt-2">Email is required</span>}
                            </div>



                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />

                                <div className='absolute right-3 top-[50px] cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash size={22} /> : <FaEye size={20} />
                                    }
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt hover:link my-3">Forgot password ?</a>
                                </label>

                            </div>



                            <div className="form-control ">
                                <input className="btn btn-primary text-white" type="submit" value="Sign In" />
                            </div>

                        </form>

                        <p className='text-center'><small>Already have an account ? <Link to="/register" className='font-semibold hover:link'>Sign Up</Link></small></p>
                        <GoogleLogin />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;