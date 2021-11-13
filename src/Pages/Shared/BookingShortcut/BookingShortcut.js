import React from 'react';
import { NavLink } from 'react-router-dom';
import './BookingShortcut.css'
const BookingShortcut = () => {
    return (
        <div className="d-bottom-area">
            <div className="full-width-all container m-auto text-center text-white py-24">
                <h2 className="text-2xl">Need a Shopping right now?</h2>
                <h1 className="text-4xl my-8 font-bold">Just Make a Choice & You're Done!</h1>
                <NavLink to="appointment">
                    <button className="border-2 font-bold py-2 px-4 mt-4 rounded hover:bg-white hover:text-pink-500">All Watches</button>
                </NavLink>
            </div>
        </div>
    );
};

export default BookingShortcut;