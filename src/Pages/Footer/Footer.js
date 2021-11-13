import React from 'react';
import { NavLink } from 'react-router-dom';

// footer page 

const Footer = () => {
    return (
        <div className="bg-indigo-900 pt-10  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container full-width-all m-auto pb-8 px-2">
                {/* left section  */}
                <div className="col-sapn- ">
                    <NavLink to="/home">
                        <h1 className="text-4xl font-bold text-white ">Time- <span className="text-blue-300">Zone</span> </h1>
                    </NavLink>
                    <p className="py-8 text-white font-semibold">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family.</p>
                    <NavLink className="text-blue-300 font-semibold text-lg uppercase hover:text-white" to="/appointment">Shopping Now <i class="fas fa-arrow-right ml-1"></i></NavLink>
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
                            <li className="cursor-pointer hover:underline"><NavLink to="/services"> Services</NavLink></li>
                        </ul >
                    </div >
                </div>
                {/* right section  */}
                <div className="col-sapn-12 ">
                    <div className="bg-indigo-200 border-l-4 border-pink-600 rounded-lg p-4">
                        <i class="fas fa-headset text-pink-700 text-6xl"></i>
                        <h1 className="text-2xl font-bold text-indigo-900 py-8">Emergency Cases</h1>
                        <p className="text-gray-500">Please feel welcome to contact our friendly reception staff with any general or travel enquiry call us.</p>
                        <div className="flex items-center justify-start   text-gray-600 py-8 ">
                            <p><i class="fas fa-phone text-3xl text-pink-700  mr-4"></i></p>
                            <h3 className="text-lg font-bold">+8801712 365764</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer bottom  */}
            <div className="bg-gray-900">
                <p className="py-4 text-center text-gray-500">© 2020 DataSoft, All Rights Reserved. With Love by time-zone.com</p>
            </div>
        </div>
    );
};

export default Footer;