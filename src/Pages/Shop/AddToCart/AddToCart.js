import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import SingleAddToCart from '../SingleAddToCart/SingleAddToCart';

const AddToCart = () => {
    const [carts, setCarts] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const url = `https://fashion-zone.iitpark.com/addToCart?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])


    return (
        <div className="py-16 min-h-screen">


            <div className="container full-width-all mx-auto ">
                <div>
                    <h1 className="text-left text-2xl text-indigo-900 font-semibold mb-12">You Can Place Order from your Cart Products!</h1>
                </div>
                <hr />
                <div className='pt-12'>
                    {
                        !carts.length &&
                        <div>
                            <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Oops! You Have no any Cart Products.</h1>
                            <div className="mt-24">
                                <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Want to make some Shop...?   </h1>
                                <p className="text-center"><NavLink className="transition duration-500 bg-indigo-900 text-white px-10 py-3 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to='/shop'>Shop Now</NavLink></p>
                            </div>
                        </div>

                    }

                    {
                        <div>
                            {
                                carts.length &&
                                <div>
                                    <div className="grid grid-cols-2 gap-5 px-2">

                                        {
                                            carts.map(cart => <SingleAddToCart key={cart._id} cart={cart} carts={carts} setCarts={setCarts} ></SingleAddToCart>)
                                        }
                                    </div>
                                </div>


                            }
                        </div>

                    }
                </div>
            </div>



            {/*    <div className="container full-width-all mx-auto ">
                <div>
                    {
                        carts.length ?
                            <div>
                                {
                                    carts.length === 0 ? <div> <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">You Have no any Cart Products !</h1>
                                        <div className="mt-24">
                                            <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Want to make some Shop...   </h1>
                                            <p className="text-center"><NavLink className="transition duration-500 bg-indigo-900 text-white px-10 py-3 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to='/shop'>Shop Now</NavLink></p>
                                        </div>
                                    </div>
                                        :

                                        <div className="grid grid-cols-2 gap-5 px-2">

                                            {
                                                carts.map(cart => <SingleAddToCart key={cart._id} cart={cart} carts={carts} setCarts={setCarts} ></SingleAddToCart>)
                                            }

                                        </div>
                                }
                            </div>

                            :
                            <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
                    }
                </div>



            </div> */}

        </div >
    );
};

export default AddToCart;