import React from 'react';
import pro1 from '../../../../images/pro1.png'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'


const SingleReview = (props) => {
    // font awesome icon 
    const element = <FontAwesomeIcon icon={faHandsHelping} />
    const { displayName, rating, feedback } = props.review;
    return (
        <div>
            <div className="shadow-2xl p-4 bg-indigo-200 rounded-lg">
                <div className="flex items-center">
                    <img style={{ cursor: 'pointer' }} className="w-12 rounded-full" src={pro1} alt="" />
                    <div className="ml-4">
                        <p className="text-xl font-semibold">{displayName}</p>
                        <p className="text-sm text-yellow-500">
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star star-icon"
                                fullSymbol="fas fa-star star-icon"
                            >
                            </Rating> <span className="text-indigo-900 font-semibold">( {rating} )</span>
                        </p>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg mt-4">
                    <p><i class="fas fa-quote-left text-2xl"></i></p>
                    <p className="text-gray-500">
                        {feedback.slice(0, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;