import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'
import ban27 from '../../../images/27.jpg'

// home page banner 

const Banner = () => {
    return (
        <div className=" banner-home ">
            <div className="">


                <div className="container m-auto px-2 py-24 md:py-20 lg:py-40 full-width-all banner-container">
                    <div className="slider h-4/5   grid grid grid-cols-12">
                        <div className="col-span-12 md:col-span-10 lg:col-span-8 text-balck" >
                            <h1 className="text-2xl md:text-3xl font-extrabold"> <span className="text-indigo-900">Time -Zone.</span> </h1>
                            <br />
                            <h1 className="text-3xl md:text-5xl text-indigo-900 font-bold">Rendering the meaning <br /> - of time</h1>
                            <br />
                            <h4 className="text-xl my-10">We provide travelers with an authentic Jordanian experience that <br /> they can remember for the rest of their lives</h4>
                            <NavLink className="rounded-full py-3 px-5 border-2 border-indigo-900 text-indigo-800 text-lg font-semibold  hover:bg-indigo-900 hover:border-indigo-900 hover:text-white transition duration-500 ease-in-out " to="/shop"> Explore Destination</NavLink>
                        </div >
                        <div className="md:col-span-4 lg:col-span-4">
                            {/* <img src={ban27} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;