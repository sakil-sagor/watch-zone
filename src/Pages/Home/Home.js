import React from 'react';
import AllReviews from './AllReviews/AllReviews';
import Banner from './Banner/Banner';
import BannerSlider from './BannerSlider/BannerSlider';
import Featured from './Featured/Featured';
import HomeProducts from './HomeProducts/HomeProducts';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <BannerSlider></BannerSlider>
            <hr />
            <HomeProducts></HomeProducts>
            <hr />
            <ProductCategory></ProductCategory>
            <hr />
            <Featured></Featured>
            <hr />
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;