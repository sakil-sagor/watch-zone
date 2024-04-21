import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

// footer page 

const Footer = () => {
    return (
        <div className="bg-gray-900  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container full-width-all m-auto pb-8 px-2">
                {/* left section  */}
                <div className="col-sapn- ">
                    <NavLink to="/home">
                        <img className="w-48" src={logo} alt="" />
                    </NavLink>


                </div>
                {/* middle section */}
                <div className="col-sapn-1 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white">Supports</h3>
                        <NavLink to='/aboutUs'>
                            <ul className="tab-list text-gray-300">
                                <li className="cursor-pointer hover:underline">Terams & Conditions</li>
                                <li className="cursor-pointer hover:underline">Privecy Policy</li>
                                <li className="cursor-pointer hover:underline">All Guidelines</li>
                                <li className="cursor-pointer hover:underline">History</li>
                                <li className="cursor-pointer hover:underline">Your Feadback </li>
                            </ul >
                        </NavLink>
                    </div >
                </div>
                {/* middle section  */}
                <div className="col-sapn-6 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white"> Links</h3>
                        <ul className="tab-list text-gray-300">
                            <li className="cursor-pointer hover:underline"><NavLink to="/login">Login</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/register">Register</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/aboutUs"> About Us</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/contactUs"> Contact Us</NavLink></li>
                        </ul >
                    </div >
                </div>
                {/* right section  */}
                <div className="col-sapn-12 text-white">
                    <p className='text-lg font-semibold my-3'>Address</p>
                    <div>
                        <p>Mouchak Market, 1st floor, I-104,</p>
                        <p>Ramna, Dhaka-1217</p>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='bg-pink-900 py-4'>

                </div>
                <div className='footer-right-color py-4'>

                </div>
            </div>
            {/* footer bottom  */}
            <div className="bg-black">
                <p className="py-4 text-center text-gray-500">©new-collectionbd 2020, Designed & Developed by <a className='text-pink-500' target='_blank' href="https://iitpark.com/" rel="noreferrer">i-it park</a></p>
            </div>
        </div>
    );
};

export default Footer;