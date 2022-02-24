import React from 'react';
import Products from './Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <div className="full-width-all container m-auto py-6 min-h-screen	">
                <Products></Products>
            </div>

        </div>
    );
};

export default Shop;