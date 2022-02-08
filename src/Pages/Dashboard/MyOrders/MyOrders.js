import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import spin from '../../../images/9.gif'
import swal from 'sweetalert';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://time-zone-78.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    // order delete system 
    const handelCancel = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = `https://time-zone-78.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Successfully Placed the order !", "", "success");
                        const remainingData = orders.filter(user => user._id !== id)
                        setOrders(remainingData)
                    }
                });
        }
    }

    return (
        <div className="py-16">
            <div className="full-width-all container m-auto px-2">
                <div>
                    <h1 className="text-left text-2xl text-indigo-900 font-semibold mb-12">My All Orders</h1>
                </div>
                <hr />
                <div className="min-h-screen pt-12">

                    {
                        orders.length !== 0 ?

                            <div >

                                <div>
                                    {
                                        orders.length ?
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {
                                                    orders.map(order =>
                                                        <div key={order._id}>
                                                            <div className="shadow-2xl bg-indigo-200 p-4 text-sm rounded-lg">
                                                                <div className="flex justify-between">
                                                                    <div>
                                                                        <p className="font-semibold text-base"> {order?.productName}</p>
                                                                        <p>  <span className="text-pink-800">{order._id}</span></p>
                                                                    </div>
                                                                    <div className="flex justify-between items-center">

                                                                        {
                                                                            order.status ? <button className="bg-green-800 py-2 px-4 rounded-lg text-white ">Approved</button>
                                                                                :
                                                                                <button className="bg-pink-500 py-2 px-4 rounded-lg text-white ">Pending</button>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <hr className="my-2" />
                                                                <div>
                                                                    <p>Name : {order?.userName}</p>
                                                                </div>
                                                                <div>
                                                                    <p> Email : {order?.email}</p>
                                                                </div>
                                                                <div>
                                                                    <p> Quentity : <span className="text-pink-800 text-xl">{order?.quantity}</span></p>
                                                                </div>
                                                                <div>
                                                                    <p> Total Price : <span className="text-pink-800 text-xl">{order?.totalPrice}</span></p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <button className="bg-red-800 py-2 px-4 rounded-lg text-white uppercase w-full" onClick={() => handelCancel(order._id)}>Delete</button>
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
                            :
                            <div>
                                <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">You have No Orders Yet!</h1>
                            </div>

                    }
                </div>

            </div>

        </div >
    );
};

export default MyOrders;