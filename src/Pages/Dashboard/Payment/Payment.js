import React from 'react';
import { NavLink } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="full-width-all container m-auto md:py-12 lg:py-32">
            <div className="pt-24 pb-24 text-green-700 text-center">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-wider"> Payment method comming soon ...! </h2>
                    <h3 className="text-lg text-gray-600 font-extrabold tracking-wider mt-4"> Please, Connect with us.</h3>
                </div>
                <div className="mt-16">
                    <NavLink className="text-indigo-900 font-semibold text-lg py-2 px-4 border-blue-800 border hover:bg-indigo-900 hover:text-white rounded-lg" to='/shop'>Back to Shop</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Payment;