import React from 'react';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import SectionTitle from '../../Shared/SectionTitle';
import spin from '../../../images/9.gif'
import Product from '../../Shop/Product/Product';

const HomeProducts = () => {
    const [products] = useProducts([]);

    const highNumber = products?.length - 8;
    let numStart = Math.floor(Math.random() * highNumber) + 1

    return (
        <div className="py-24 our-doctors-container">
            <div className="container m-auto full-width-all ">
                {/* page title  */}
                <div className="services-page-banner">
                    <div className="full-width-all container m-auto text-white">
                        <SectionTitle
                            title="Featured Products"
                            content="Amazing products added recently in our catalog"
                        ></SectionTitle>
                    </div>
                </div>
                <div>
                    {
                        products.length ?
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ">
                                {
                                    products.slice(numStart, numStart + 8).map(product => <Product key={product._id} product={product}> </Product>)
                                }
                            </div>
                            :
                            <div ><img className="m-auto block" src={spin} alt="" /></div>
                    }
                </div>
                <div className="mt-16 text-center ">
                    <NavLink className="rounded-full py-3 px-6 border text-indigo-900 text-lg font-semibold border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-500 ease-in-out " to="/shop"> Find more Products</NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;