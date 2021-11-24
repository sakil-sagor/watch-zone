import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Products from './Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <div className="shop-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <PageTitle
                        title="Choose your best one"
                        content="We have the Best Products and Offers for you."
                    ></PageTitle>

                </div>
            </div>
            <div className="full-width-all container m-auto py-6 min-h-screen	">
                <div>
                    <Products></Products>
                </div>
            </div>

        </div>
    );
};

export default Shop;