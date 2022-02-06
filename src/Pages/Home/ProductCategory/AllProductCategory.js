import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../../Shop/Product/Product';

const AllProductCategory = (props) => {
    const { Category } = props;
    const [products] = useProducts([]);
    const singleCategory = products.filter(a => a.Category === Category)
    return (
        <div>
            <div>

                <h2 className="font-bold w-ful sm:w3/4 lg:w-2/4 text-4xl tracking-wide capitalize">{Category}</h2>
            </div>
            <hr className=" my-4  border" />
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2'>
                    {
                        singleCategory.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllProductCategory;