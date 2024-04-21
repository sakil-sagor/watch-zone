import React from 'react';
import { Link } from "react-router-dom";
const SingleBanner = ({ banner }) => {
    const { img, rating, price } = banner;

    return (
        <div className='border rounded '>
            <Link to={`shop/${banner?._id}`}>
                <div className='h-96 rounded'>
                    <img className='h-96 rounded' src={img} alt="" />
                </div>
            </Link>
            {/* <div className=" bg-pink-800 py-2 px-2 absolute bottom-0 w-full opacity-90 flex justify-between items-center">
                <div>
                    <span className="text-white font-semibold">Price:   {price} </span>
                </div>
                <div>
                        {
                            <del className={` text-gray-300 mb-2 ${discount === "0" && 'opacity-0'}`}> {price}TK / <span className="text-xs">day</span></del>
                        }
                        <p className="mb-2 text-white font-bold text-lg">{price - ((price * discount) / 100)}TK / <span className="text-xs">day</span></p>

                    </div>
                <div className="">
                    <Rating
                        className='text-sm text-yellow-500 mb-2'
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star star-icon"
                        fullSymbol="fas fa-star star-icon"
                    >
                    </Rating>
                    <span className="text-white font-semibold">( {rating} )</span>
                </div>


            </div> */}

        </div>
    );
};

export default SingleBanner;