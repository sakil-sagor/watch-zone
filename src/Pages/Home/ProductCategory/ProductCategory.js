import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import LeptopCategory from './LeptopCategory/LeptopCategory';
import MobileCategory from './MobileCategory/MobileCategory';
import WatchCategory from './WatchCategory/WatchCategory';

const ProductCategory = () => {
    return (
        <div className="py-24 ">
            <div className="container m-auto full-width-all ">
                {/* page title  */}
                <div className="services-page-banner">
                    <div className="full-width-all container m-auto text-white">
                        <SectionTitle
                            title="All Products By Categories"
                        ></SectionTitle>
                    </div>
                    <div>
                        <WatchCategory></WatchCategory>
                        <MobileCategory></MobileCategory>
                        <LeptopCategory></LeptopCategory>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;