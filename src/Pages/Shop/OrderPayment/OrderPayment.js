import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from '../../Dashboard/Payment/CheckoutForm';






const stripePromise = loadStripe('pk_test_51Jw9J1KKEsZqvGCg97fSIy3lJLGyzaRujnJzeTESdSGhGUkyqW8Tr9v1NDCb0aPMExBsW2Aa15wOUoXr5d76YRYf008VFKDrqV');
const OrderPayment = ({ totalprice, fullOrder }) => {

    return (
        <div className=" ">
            <div className=" text-green-700 text-center">
                <div>
                    {
                        totalprice &&
                        <Elements stripe={stripePromise}>
                            <CheckoutForm totalprice={totalprice} fullOrder={fullOrder}></CheckoutForm>
                        </Elements>
                    }
                </div>

            </div>
        </div>
    );
};

export default OrderPayment;