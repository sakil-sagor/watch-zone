import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderNow from '../OrderNow/OrderNow';

const AddToCartOrder = () => {
    const [cartsOrder, setCartsOrder] = useState({})


    const { addToCartId } = useParams();
    console.log(addToCartId);
    useEffect(() => {
        const url = `https://time-zone-78.herokuapp.com/addToCart/${addToCartId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCartsOrder(data))
    }, []);
    console.log(cartsOrder);
    const quantity = {
        ...cartsOrder
    };
    return (
        <div className="py-24">

            <div className="container full-width-all mx-auto px-2">
                <OrderNow key={cartsOrder._id} product={cartsOrder} orders={quantity}></OrderNow>
            </div>

        </div>
    );
};

export default AddToCartOrder;