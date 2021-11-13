import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './ProfileShortcut.css'

// profile area 

const ProfileShortcut = () => {
    const { user, admin, logOut } = useAuth();

    return (
        <div className="profile-shortcut bg-pink-700 shadow-2xl">
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                {
                    user.displayName ? <h1 className="text-lg font-semibold text-indigo-900">{user.displayName}</h1> : ''
                }
                <div>
                    <NavLink to='/viewProfile'>
                        <button className="py-2 px-3 bg-indigo-900 text-white rounded-full my-4 hover:bg-indigo-800" >View Profile</button>
                    </NavLink>
                </div>
            </div>
            <hr />


            <div>
                <NavLink to="/payment" className="text-indigo-900 font-semibold hover:text-indigo-700 block text-white mt-3">Payment</NavLink>
            </div>
            <div>
                <NavLink to="/myOrders" className="text-indigo-900 font-semibold hover:text-indigo-700  block text-white mt-3">My Orders</NavLink>
            </div>
            <div>
                <NavLink to="/myReview" className="text-indigo-900 font-semibold hover:text-indigo-700  block text-white mt-3">My Review</NavLink>
            </div>
            {
                admin &&

                <div>

                    <div>
                        <NavLink to="/dashboard" className="text-indigo-900 font-semibold hover:text-indigo-700 block  text-white mt-3">Admin Dashboard</NavLink>
                    </div>
                </div>

            }
            <div>
                <button className="text-indigo-900 font-semibold hover:text-indigo-700 text-white mt-3" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
};

export default ProfileShortcut;