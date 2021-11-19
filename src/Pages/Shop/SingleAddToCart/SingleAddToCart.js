import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SingleAddToCart = (props) => {
    const { _id, img, productName, price, quantity } = props.cart;
    const [totalquantity, setTotalQuantity] = useState(quantity)

    const handelfield = e => {
        setTotalQuantity(e.target.value);
    }

    const handelUpdatefield = id => {
        const fullAddToCart = { quantity: totalquantity }
        const url = `https://time-zone-78.herokuapp.com/addToCart/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullAddToCart)
        })
            .then(res => res.json())
            .then(data => { })

    }



    return (
        <div>
            <div className="px-2 md:px-4 py-6 border shadow-2xl">
                <div className="lg:flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="w-16" src={img} alt="" />
                        <div className="text-indigo-900 font-semibold">

                            <p> {productName}</p>
                        </div>
                    </div>
                    <div className="text-indigo-900 font-semibold text-right">
                        <p>$ {price}</p>
                    </div>
                    <div>
                        <input className=" w-16 ml-2 pl-2 py-1 border-2 border-black text-xl" name="quantity" defaultValue={quantity} type="number" min="1" required onChange={handelfield} />
                    </div>
                </div>
                <div className="text-indigo-900 font-semibold">
                </div>
                <hr className="my-6" />
                <div className="text-indigo-900 font-semibold">
                    <p className="text-right">Total : $ {totalquantity * price}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p><i class="far fa-trash-alt hover:text-red-800 border px-4 py-2 text-xl hover:border-red-800 cursor-pointer transition duration-500 rounded"></i></p>
                    <NavLink className="transition duration-500 bg-indigo-900 text-white px-10 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to={`/addToCartOrder/${_id}`}>
                        <button onClick={() => handelUpdatefield(_id)}>Check Out</button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default SingleAddToCart;