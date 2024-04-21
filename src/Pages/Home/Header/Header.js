import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSingle from './HeaderSingle';
// Import Swiper styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/swiper-bundle.min.css';
// import './BannerSlider.css'
// all banner images 
import h9 from '../../../images/b2.webp';
import h2 from '../../../images/b3.jpg';
import h3 from '../../../images/b4.jpg';
import h4 from '../../../images/b5.jpg';
import h5 from '../../../images/b6.png';
import h6 from '../../../images/b7.jpg';
import h7 from '../../../images/b8.jpg';
import h8 from '../../../images/b9.jpg';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const banners = [
    { _id: 3, img: h3, titleOne: "", titleTwo: "", description: "" },
    // { _id: 1, img: h1, titleOne: "", titleTwo: "", description: "" },
    { _id: 2, img: h2, titleOne: "", titleTwo: "", description: "" },
    { _id: 4, img: h4, titleOne: "", titleTwo: "", description: "" },
    { _id: 5, img: h5, titleOne: "", titleTwo: "", description: "" },
    { _id: 6, img: h6, titleOne: "", titleTwo: "", description: "" },
    { _id: 7, img: h7, titleOne: "", titleTwo: "", description: "" },
    { _id: 8, img: h8, titleOne: "", titleTwo: "", description: "" },
    { _id: 9, img: h9, titleOne: "", titleTwo: "", description: "" },
]

const Header = () => {
    return (
        <div>
            <div>
                <div className="slider-group-banner">
                    <Swiper slidesPerView={1} spaceBetween={0} autoplay={{
                        "delay": 4000,
                        "disableOnInteraction": false
                    }}
                        breakpoints={{
                            320: {
                                "slidesPerView": 1,
                                "spaceBetween": 0,
                                "centeredSlides": true
                            },
                            768: {
                                "slidesPerView": 1,
                                "spaceBetween": 0,
                                "centeredSlides": true
                            },
                            1000: {
                                "slidesPerView": 1,
                                "spaceBetween": 0,

                            },

                        }}
                        className="mySwiper ">
                        <div className=' '>
                            {
                                banners.map(banner =>
                                    <SwiperSlide >
                                        <HeaderSingle key={banner._id} banner={banner}></HeaderSingle>
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

export default Header;