import React from 'react';
import AllReviews from './AllReviews/AllReviews';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <hr />
            <Featured></Featured>
            <hr />
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;