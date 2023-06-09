import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const ClassCard = ({ clash }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext)

    const { class_name, image, language, price, schedule, students, teacher, available_seats } = clash || {};


    const handleAddToCart = item => {
        if (user && user.email) {
            const cartItem = {  class_name, image, price, email: user.email, available_seats,language,schedule,teacher }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                       toast.success('Class added successfully')
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add to your cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className='mb-10 mx-auto'>
            <div className={`card  backdrop-blur-md ${available_seats ? 'bg-white bg-opacity-20' : 'bg-red-200 cursor-not-allowed border-red-600'} shadow-md border-slate-400 border w-96 p-5 md:p-0 rounded-none`}>
                <figure>
                    <img src={image} className="w-full  rounded-lg md:rounded-none mask mask-hexagon mt-3" />
                </figure>
                <div className="card-body pt-3">
                    <h2 className="card-title text-3xl font-bold ">{class_name}</h2>
                    <div className='divider'></div>
                    <p><span className='font-semibold'>Language :</span> {language}</p>
                    <p><span className='font-semibold'>Price :</span> ${price}</p>
                    <p><span className='font-semibold'>students :</span> {students}</p>
                    <p><span className='font-semibold'>Teacher :</span> {teacher}</p>
                    <p><span className='font-semibold'>Available Seats :</span> {available_seats}</p>

                    <div className="card-actions justify-end">
                        <button disabled={!available_seats && true} onClick={() => handleAddToCart(clash)} className=" btn btn-outline rounded-none hover:bg-gradient-to-br from-indigo-100 via-red-100 to-purple-100 hover:text-black px-9">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;