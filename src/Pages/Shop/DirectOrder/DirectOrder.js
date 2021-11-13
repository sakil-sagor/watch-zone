import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import OrderNow from '../OrderNow/OrderNow';

const DirectOrder = () => {
    const [product, setProduct] = useState({})
    const orders = {
        quantity: '1'
    }
    const { productId } = useParams();
    useEffect(() => {
        const url = `https://time-zone-78.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className="py-24">

            <div className="container full-width-all mx-auto px-2">
                <OrderNow key={product._id} product={product} orders={orders}></OrderNow>
            </div>

        </div>
    );
};

export default DirectOrder;