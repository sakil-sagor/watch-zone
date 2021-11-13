import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import spin from '../../../images/9.gif'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(0)



    useEffect(() => [
        fetch('https://time-zone-78.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    ], [update])

    let handelAccept = (id) => {
        const proceed = window.confirm("Are you sure, You want to Accept this order?")
        if (proceed) {

            const url = `https://time-zone-78.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful.')
                        // const remainingData = orders.map(user => user)
                        setUpdate(update + 1)

                    }
                })
        }
    };


    // order delete system 
    const handelCancel = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = `https://time-zone-78.herokuapp.com/products/${id}`;
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.')
                        const remainingData = products.filter(user => user._id !== id)
                        setProducts(remainingData)

                    }
                });
        }
    }


    return (
        <div className="py-16">
            <div className="m-auto container full-width-all">
                {
                    products.length ?
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 gap-y-8 ">
                            {
                                products.map(product =>
                                    <div key={product._id}>
                                        <div className="">
                                            <div className={!product?.InStock ? "bg-red-200 shadow-xl bg-white rounded hover:shadow-2xl p-2 border" : "shadow-xl bg-white rounded hover:shadow-2xl p-2 border"}>
                                                <div className="flex">
                                                    <div className="">
                                                        <img className="rounded w-28" src={product?.img} alt="" />
                                                    </div>

                                                    <div>
                                                        <div className="ml-1">
                                                            <h1 className="text-indigo-900 font-bold text-xl">{product?.name}</h1>
                                                            <p className="text-gray-400  ">{product?.model}</p>
                                                        </div>
                                                        {
                                                            !product?.InStock ?
                                                                <div>
                                                                    <h1 className="text-red-800 font-bold mt-6 ml-1 text-xl"> Please Update Stock!</h1>
                                                                </div>
                                                                :
                                                                <div className="flex justify-between mt-2">
                                                                    <div className="">
                                                                        <p className="text-indigo-900 font-bold text-xl"> <i class="fas fa-star text-yellow-500"></i> {product?.rating}</p>

                                                                    </div>
                                                                    <div className="text-gray-500">
                                                                        <span className="text-xl text-pink-800 font-bold">$ {product?.price}</span>
                                                                    </div>
                                                                </div>
                                                        }


                                                    </div>


                                                </div>
                                                <div className="p-3">
                                                    <div className="flex pt-4 justify-between text-white">
                                                        {
                                                            product?.InStock && <button className="bg-indigo-900 hover:bg-indigo-800 text-sm px-2 py-1 rounded-lg" onClick={() => handelAccept(product._id)}>Out of Stock</button>
                                                        }
                                                        <button className="bg-indigo-900 hover:bg-indigo-800 text-sm px-3 py-2 rounded-lg">Update</button>
                                                        <button className="bg-indigo-900 hover:bg-indigo-800 text-sm px-3 py-2 rounded-lg" onClick={() => handelCancel(product?._id)}>Delete</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <div ><img className="m-auto w-20 mt-24 block" src={spin} alt="" /></div>
                }
            </div>
        </div>
    );
};

export default ManageProducts;