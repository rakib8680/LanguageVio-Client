import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51NEVZ4HAK6N0L1dAGjeUdn63LKQbGi5xjJehUsztVI2wHc4Oax8BubbprN34bCy7YjDxGBLfTJTx4Vj5IsuLowkR007CaXUukp')

const Payment = () => {

    const yourClass = useLoaderData();
    const { price, _id } = yourClass
    const totalPrice = parseFloat(price.toFixed(2))

    return (
        <div>
            <h1 className='text-3xl text-center mt-20'>Your Payment : ${price}</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={totalPrice} _id={_id} />
            </Elements>
        </div>
    );
};

export default Payment;