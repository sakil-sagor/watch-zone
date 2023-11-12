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
import h1 from '../../../images/h1.png';
import h2 from '../../../images/h2.png';
import h3 from '../../../images/h3.png';
import h4 from '../../../images/h4.png';
import h5 from '../../../images/h5.png';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const banners = [
    { _id: 1, img: h1, titleOne: "Time -Zone.", titleTwo: "Rendering the meaning - of time", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 2, img: h2, titleOne: "Modern -Life.", titleTwo: "Enojoy your life with - more power", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 3, img: h3, titleOne: "Get -Smart.", titleTwo: "Make you path with Exclusive one", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 4, img: h4, titleOne: "Simple World", titleTwo: "Rendering the meaning - of time", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 5, img: h5, titleOne: "Time -Zone.", titleTwo: "Rendering the meaning - of time", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
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