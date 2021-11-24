import React, { useEffect, useRef, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import spin from '../../../images/9.gif'

const Products = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const getName = useRef('');
    useEffect(() => {
        const url = `http://localhost:5000/products?search=${searchInput}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [searchInput])

    const handelSearch = e => {
        setSearchInput(getName.current.value);
    }

    return (
        <div>
            <div className="text-center pb-2">
                <input type="text" className="py-2 px-3 text-lg border-black border md:w-1/2  mx-auto  my-6 rounded-l-full " placeholder="Serch your choice..." ref={getName} />
                <input style={{ marginLeft: "-10px" }} type="submit" value="Search" className="uppercase py-2 px-5 text-lg border-black border cursor-pointer mx-auto  bg-indigo-800 hover:bg-indigo-900 text-white rounded-r-full" onClick={handelSearch} />
            </div>

            <div>
                {searchInput &&
                    <div className="pb-3">
                        <div>
                            <p className=""><span className="text-green-700 font-semibold">Showing Result</span> : <span className="font-semibold text-lg">"{searchResult.length}"</span> items founded for <span className="font-semibold text-lg">'{searchInput}'</span></p>
                        </div>
                    </div>
                }
            </div>
            <hr />
            <div className="pt-6">
                {

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ">
                        {
                            searchResult.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>

                }
            </div>
        </div>
    );
};

export default Products;