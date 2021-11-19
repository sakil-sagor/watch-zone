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
        const url = `http://localhost:5000/addToCart?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className="py-12">
            <div className="container full-width-all mx-auto ">
                <div className="px-2">
                    <div>cart - {carts.length}</div>
                    <h1>add to cart</h1>
                </div>
                {
                    carts.length ?
                        <div className="grid grid-cols-2 gap-5 px-2">

                            {
                                carts.map(cart => <SingleAddToCart key={cart._id} cart={cart}></SingleAddToCart>)
                            }

                        </div>
                        :
                        <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
                }


            </div>
        </div>
    );
};

export default AddToCart;