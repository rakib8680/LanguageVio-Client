import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckOutForm = ({ price }) => {


    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();



    useEffect(() => {
        if (price > 0) {
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/create-payment-intent`, { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])




    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            toast.error(error.message)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'Anonymous',
                        email: user.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
            toast.error(confirmError)
        }

        setProcessing(false)

        console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            toast.success('Payment Successful !! ')
            setTransactionId(paymentIntent.id)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex  flex-col w-1/4 mt-60 mx-auto '>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm m-10 w-fit mx-auto' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700 text-center'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-600 text-center'>{transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;