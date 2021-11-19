import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAddToCart from '../../../Hooks/useAddToCart';
import useAuth from '../../../Hooks/useAuth';
import SingleAddToCart from '../SingleAddToCart/SingleAddToCart';
import spin from '../../../images/9.gif'

const AddToCart = () => {
    const [carts, setCarts] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const url = `https://time-zone-78.herokuapp.com/addToCart?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])






    return (
        <div className="py-16 min-h-screen">
            <div className="container full-width-all mx-auto ">
                {
                    carts.length === 0 ? <div> <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">You Have no any Cart Products !</h1></div>
                        :
                        <div>
                            {
                                carts.length ?
                                    <div className="grid grid-cols-2 gap-5 px-2">

                                        {
                                            carts.map(cart => <SingleAddToCart key={cart._id} cart={cart} carts={carts} setCarts={setCarts} ></SingleAddToCart>)
                                        }

                                    </div>
                                    :
                                    <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
                            }
                        </div>
                }


            </div>
        </div >
    );
};

export default AddToCart;