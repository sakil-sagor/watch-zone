import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import SingleReview from './SingleReview/SingleReview';


const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    // load all orders 
    useEffect(() => [
        fetch('https://time-zone-78.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    ], [])

    const highNumber = reviews.length - 3;
    let numStart = Math.floor(Math.random() * highNumber) + 1
    return (
        <div className="py-24">
            <div className="container m-auto px-2 full-width-all">
                {/* page title  */}
                <div className="services-page-banner">
                    <div className="full-width-all container m-auto text-white">
                        <SectionTitle
                            title=" Customers Feedback"

                        ></SectionTitle>
                    </div>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
                    {
                        reviews.slice(numStart, numStart + 3).map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                    }
                </div>

            </div>

        </div>
    );
};

export default AllReviews;