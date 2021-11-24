import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Product.css'
import swal from 'sweetalert';


const Product = (props) => {
    const { _id, InStock, productName, model, rating, price, img } = props.product;
    const [quentity, setQuentity] = useState(0);
    const { user } = useAuth();


    const addToCart = e => {
        const product = {
            productId: _id,
            email: user.email,
            img: img,
            productName: productName,
            price: price,
            quantity: 1,
            payment: false,
            status: false,

        }
        if (user.email) {
            fetch(' https://time-zone-78.herokuapp.com/addToCart', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        swal("Products added to cart!", " ", "success");
                    } else {
                        swal({
                            text: "Already Exist on add to cart!",
                            button: "Add Another!",
                        });


                    }
                })
        } else {
            swal("Oops!", "You are not loged in, Please Log in fast!", "");
        }

    }

    return (
        <div className=" ">
            <div className="shadow-xl bg-white rounded hover:shadow-2xl border p-2">
                <div className="px cart">

                    {
                        !InStock &&
                        <div className="limit-stock ">
                            <p className="text-2xl text-center ">Stock Out</p>
                        </div>
                    }
                    <img className="rounded  w-full imgage" src={img} alt="" />

                </div>
                <hr className="mt-2" />
                <div className="mt-2 flex justify-between">
                    <div>
                        <h1 className="text-indigo-900 font-semibold text-2xl">{productName}</h1>
                        <p className="text-gray-400  text-sm">Brand : {model}</p>
                    </div>
                    <div>
                        {
                            InStock ?
                                <button onClick={addToCart}> <i class="fas fa-cart-plus text-pink-800 hover:text-indigo-900 text-2xl font-bold">

                                </i></button>
                                :
                                <button > <i class="fas fa-cart-plus text-gray-800  text-2xl font-bold cursor-not-allowed"></i></button>
                        }
                    </div>
                </div>
                <div className="py-3">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-indigo-900 font-bold text-xl"> <i class="fas fa-star text-yellow-500"></i> {rating}</p>

                        </div>
                        <div className="text-gray-500">
                            <span className="text-2xl text-pink-800 font-bold">$ {price}</span>
                        </div>
                    </div>


                    <div className="flex pt-4 justify-between">
                        <NavLink className="transition duration-500 border border-indigo-900 text-indigo-900 bg-white hover:bg-indigo-900 hover:text-white px-3 py-2 rounded font-semibold  d-button " to={`shop/${_id}`}> Details</NavLink>
                        {
                            InStock ?
                                <NavLink className="transition duration-500 bg-indigo-900 text-white px-3 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to={`directOrder/${_id}`}>Order Now</NavLink>
                                :
                                <button disabled className="transition  cursor-not-allowed duration-500 bg-gray-500 text-white px-3 py-2 rounded font-semibold   d-button-solid border " >Order Now</button>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;