import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import Featured from './Featured/Featured';
import Header from './Header/Header';
import HomeProducts from './HomeProducts/HomeProducts';
import LocationFind from './LocationFind/LocationFind';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <BannerSlider></BannerSlider>
            <hr />
            <HomeProducts></HomeProducts>
            <hr />
            <ProductCategory></ProductCategory>
            <hr />
            <Featured></Featured>
            <hr />
            {/* <AllReviews></AllReviews> */}
            <hr />
            <LocationFind></LocationFind>
        </div>
    );
};

export default Home;