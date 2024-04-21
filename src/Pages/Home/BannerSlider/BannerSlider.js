import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Shared/SectionTitle";
import SingleBanner from "./SingleBanner";
// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/swiper-bundle.min.css";
import "./BannerSlider.css";
// all banner images

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import useProducts from "../../../Hooks/useProducts";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const BannerSlider = () => {
  const [products] = useProducts();
  return (
    <div>
      <div className="py-24">
        <div className="container m-auto px-2 full-width-all">
          {/* page title  */}
          <div className="services-page-banner">
            <div className="full-width-all container m-auto text-white">
              <SectionTitle title="Your Best Deals" content=""></SectionTitle>
            </div>
          </div>

          <div className="slider-group-banner">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper "
            >
              <div>
                {products?.slice(0, 20).map((banner) => (
                  <SwiperSlide>
                    <SingleBanner
                      key={banner._id}
                      banner={banner}
                    ></SingleBanner>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
