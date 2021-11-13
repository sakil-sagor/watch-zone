import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, InStock, name, model, rating, price, img } = props.product;

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
                <div className="mt-2">
                    <h1 className="text-indigo-900 font-semibold text-2xl">{name}</h1>
                    <p className="text-gray-400  text-sm">Brand : {model}</p>
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
                                <NavLink className="transition duration-500 bg-indigo-900 text-white px-3 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to={`bookNow/${_id}`}>Order Now</NavLink>
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