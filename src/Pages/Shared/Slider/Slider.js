import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import 'swiper/swiper-bundle.min.css'

import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
import img1 from '../../../images/1.jpg'
import img3 from '../../../images/3.jpg'
import img6 from '../../../images/6.jpg'
import './Slider.css'

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
    return (
        <>
            <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">

                <SwiperSlide>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;