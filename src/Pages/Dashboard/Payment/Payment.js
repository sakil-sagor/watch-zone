import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';




const stripePromise = loadStripe('pk_test_51Jw9J1KKEsZqvGCg97fSIy3lJLGyzaRujnJzeTESdSGhGUkyqW8Tr9v1NDCb0aPMExBsW2Aa15wOUoXr5d76YRYf008VFKDrqV');
const Payment = () => {
    const [orderId, setOrderId] = useState({})
    const { paymentId } = useParams();

    useEffect(() => {
        fetch(`https://time-zone-78.herokuapp.com/addToCart/${paymentId}`)
            .then(res => res.json())
            .then(data => setOrderId(data))
    }, [])




    console.log(orderId);

    return (
        <div className="full-width-all container m-auto md:py-12 lg:py-32">
            <div className="pt-24 pb-24 text-green-700 text-center">
                <div>
                    Your Id : {paymentId}
                    <h2 className="text-2xl font-extrabold tracking-wider"> {orderId.productName} </h2>
                    <h2 className="text-2xl font-extrabold tracking-wider"> {orderId.price} </h2>
                    <h2 className="text-2xl font-extrabold tracking-wider"> {orderId.quantity} </h2>

                </div>
                <div>
                    {
                        orderId.price &&
                        <Elements stripe={stripePromise}>
                            <CheckoutForm key={orderId._id} orderId={orderId}></CheckoutForm>
                        </Elements>
                    }
                </div>

            </div>
        </div>
    );
};

export default Payment;