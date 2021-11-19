import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import spin from '../../../images/9.gif'

const CheckoutForm = ({ totalprice, fullOrder }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    // const { price, productName, quantity } = props.totalprice;


    let price = totalprice;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://time-zone-78.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true)
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);

        };

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,

                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')

        } else {
            setError('')

            setSuccess("Your Payment Processed successfully")
            console.log(paymentIntent);
            setProcessing(false);

            // order save to database 
            const payFullOrder = {
                ...fullOrder,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            console.log(payFullOrder);

            // fetch(' https://time-zone-78.herokuapp.com/orders', {
            //     method: "POST",
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(payFullOrder)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.insertedId) {
            //             alert("success")
            //              history.push('/shop')
            //         }
            //     })



        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                {processing ?
                    <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
                    :
                    <button type="submit" disabled={!stripe || success} className={success ? "text-gray-200 bg-gray-500 border cursor-not-allowed rounded-lg border-gray-500 font-semibold text-lg py-2 px-4 " : "text-indigo-900 font-semibold text-lg py-2 px-4 border-blue-800 border hover:bg-indigo-900 hover:text-white rounded-lg"}>
                        Pay ${price}
                    </button>
                }
            </form>
            {
                error && <p className="text-red-800 font-semibold">{error}!</p>
            }
            {
                success && <p className="text-green-600 font-semibold">{success}!</p>
            }
        </div>
    );
};

export default CheckoutForm;