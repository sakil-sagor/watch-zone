import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import spin from "../../../images/9.gif";
import "./CheckoutFrom.css";

const CheckoutForm = ({ totalprice, fullOrder }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  // const { price, productName, quantity } = props.totalprice;

  let price = totalprice;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://fashion-zone-server-kappa.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
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
    setProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");

      setSuccess("Your Payment Processed successfully");

      setProcessing(false);

      // order save to database
      const payFullOrder = {
        ...fullOrder,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret"),
      };

      fetch(" https://fashion-zone-server-kappa.vercel.app/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payFullOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            swal("Successfully Placed the order !", "", "success");
          }
          history.push("/myOrders");
        });
      // add to cart delete
      if (payFullOrder.addToCartId) {
        fetch(
          `https://fashion-zone-server-kappa.vercel.app/addToCart/${payFullOrder.addToCartId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {});
      }
    }
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          className="pb-12"
          required
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <div>
            <img className="m-auto w-20 mt-24 block" src={spin} alt="" />
          </div>
        ) : (
          <button
            type="submit"
            disabled={!stripe || success}
            className={
              success
                ? "text-gray-200 bg-gray-500 border cursor-not-allowed rounded-lg border-gray-500 font-semibold text-lg py-2 px-4 "
                : "text-indigo-900 font-semibold text-lg py-2 px-4 border-blue-800 border hover:bg-indigo-900 hover:text-white rounded-lg"
            }
          >
            Pay Tk {price}
          </button>
        )}
      </form>
      {error && <p className="text-red-800 font-semibold">{error}!</p>}
      {success && (
        <div>
          <p className="text-green-600 font-semibold">{success}!</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
