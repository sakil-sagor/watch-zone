import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import spin from '../../../images/9.gif'

const Products = () => {
    const [products] = useProducts([]);

    return (
        <div>
            {
                products.length ?
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                    :
                    <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
            }
        </div>
    );
};

export default Products;