import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import SingleReview from './SingleReview/SingleReview';



// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/swiper-bundle.min.css';
import './AllReview.css';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    // load all orders 
    useEffect(() => [
        fetch('https://fashion-zone.iitpark.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    ], [])

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
                <div className="slider-all-review">
                    <Swiper slidesPerView={3} spaceBetween={30} autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                        breakpoints={{
                            320: {
                                "slidesPerView": 1,
                                "spaceBetween": 10
                            },
                            600: {
                                "slidesPerView": 2,
                                "spaceBetween": 20
                            },
                            1000: {
                                "slidesPerView": 3,
                                "spaceBetween": 40
                            },

                        }}
                        className="mySwiper ">
                        <div >
                            {
                                reviews.map(review =>
                                    <SwiperSlide >
                                        <SingleReview key={review._id} review={review}></SingleReview>
                                    </SwiperSlide>
                                )
                            }
                        </div>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;