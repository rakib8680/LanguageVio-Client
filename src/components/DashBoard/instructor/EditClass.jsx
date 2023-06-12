import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, } from 'react-router-dom';
import { updateClass } from '../../../api/class';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const EditClass = () => {


    useTitle('Edit Class')

    const singleClass = useLoaderData();
    const { className, seats, price, _id } = singleClass || {};

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        updateClass(data, _id)
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${className} updated successfully!`)
                    navigate('/dashboard/myClasses')
                }
            })
    };

    return (
        <div className="max-w-5xl md:mt-48  p-6 mx-auto bg-gradient-to-br from-indigo-100 via-red-100 to-purple-100 rounded-sm shadow-sm  ">
            <h2 className="text-lg px-5 py-2 rounded-md text-slate-700 font-semibold  capitalize ">
                Update Your Class
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 " htmlFor="className">
                            Class Name
                        </label>
                        <input
                            id="className"
                            {...register("className", { required: true })}
                            type="text"
                            defaultValue={className}
                            placeholder="class name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40   focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="name">
                            Your Name
                        </label>
                        <input
                            id="name"
                            {...register("name", { required: true })}
                            value={user?.displayName}
                            //   disabled 
                            placeholder="your name"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40   focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="email">
                            Your Email
                        </label>
                        <input
                            id="email"
                            placeholder="email"
                            type="email"
                            {...register("email", { required: true })}
                            value={user?.email}
                            //   disabled 
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40   focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="seats">
                            Available Seats
                        </label>
                        <input
                            id="seats"
                            type="number"
                            defaultValue={seats}
                            {...register("seats", { required: true, valueAsNumber: true })}
                            placeholder="seats"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40   focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="price">
                            Price
                        </label>
                        <input
                            id="price"
                            defaultValue={price}
                            placeholder="Price"
                            {...register("price", { required: true, valueAsNumber: true })}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-indigo-400 focus:ring-indigo-400 focus:ring-opacity-40   focus:outline-none focus:ring"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2 font-semibold  transition-colors duration-300 transform hover:bg-gradient-to-br from-indigo-100 via-red-100 to-purple-100 rounded-none border border-black text-black  focus:outline-none focus:bg-gray-600">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditClass;