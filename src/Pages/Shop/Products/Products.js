import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const size = 12;
    useEffect(() => {
        const url = ` https://time-zone-78.herokuapp.com/products?search=${searchInput}&&page=${page}&&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data.products);
                const count = data.count;
                setTotalResult(count)
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [page, searchInput])

    const handelSearch = e => {
        setSearchInput(e.target.value);
        setPage(0);
    }
    return (
        <div>
            <div className="text-center pb-2">
                <input type="text" className="py-2 px-3 text-lg border-black border md:w-1/2  mx-auto  my-6 rounded-full " placeholder="Serch your choice..." onChange={handelSearch} />

            </div>

            <div>
                {searchInput &&
                    <div className="pb-3">
                        <div>
                            <p className=""><span className="text-green-700 font-semibold">Showing Result</span> : <span className="font-semibold text-lg">"{totalResult}"</span> items founded for <span className="font-semibold text-lg">'{searchInput}'</span></p>
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
            <div className="pagination mt-12 text-center">
                {
                    [...Array(pageCount).keys()].map(number =>
                        <button className={number === page ? "px-2 mx-2 border-2 rounded text-white bg-indigo-900 border-indigo-900" : " px-2 mx-2 border-2 rounded bg-gray-100 border-indigo-900"}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1} </button>)
                }

            </div>
        </div>
    );
};

export default Products;   