import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51NEVZ4HAK6N0L1dAGjeUdn63LKQbGi5xjJehUsztVI2wHc4Oax8BubbprN34bCy7YjDxGBLfTJTx4Vj5IsuLowkR007CaXUukp')

const Payment = () => {

    const yourClass = useLoaderData();
    console.log(yourClass);

    return (
        <div>
            <h1 className='text-5xl'>Your Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;