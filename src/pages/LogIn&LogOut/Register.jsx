import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import GoogleLogin from './GoogleLogin';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false)
    const { updateUser, registerUser } = useContext(AuthContext);
    // const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)

        // register new user 
        registerUser(data.email, data.password)
            .then((result) => {
                updateUser(data.name, data.photoURL)
                toast.success('Successfully registered')
                // navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => toast.error(error.message));

    };


    return (
        <div className="hero  bg-base-200  md:h-[850px] ">
            <div className="">
            <h1 className='text-center text-3xl pb-7'>Sign Up</h1>
                <div className="card  md:w-[450px] shadow-lg bg-white backdrop-blur-md bg-opacity-10  border border-slate-500 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">



                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-error mt-2">Name is required</span>}
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-error mt-2">Photo URL is required</span>}
                        </div>




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
                            <input type={showPass ? 'text' : 'password'}  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered " />
                            {errors.password?.type === 'required' && <p className="text-error mt-2">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-error mt-2">Password must be 6 characters or Above</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-error mt-2">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-error mt-2">Password must have one Uppercase one lower case and one number </p>}

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
                            <input className="btn btn-primary text-white" type="submit" value="Sign Up" />
                        </div>

                    </form>

                    <p className='text-center'><small>Already have an account ? <Link to="/login" className='font-semibold hover:link'>Login</Link></small></p>
                    <GoogleLogin />

                </div>
            </div>
        </div>
    );
};

export default Register;