import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import spin from '../../../images/9.gif';


const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [update, setUpdate] = useState(0)

    // load all orders 
    useEffect(() => [
        fetch('https://fashion-zone.iitpark.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    ], [update])

    // update order status 
    let handelAccept = (id) => {
        const url = `https://fashion-zone.iitpark.com/orders/${id}`;
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
                    swal("Order Updated", "", "success", {
                        button: "Ok",
                    });
                    // const remainingData = orders.map(user => user)
                    setUpdate(update + 1)
                }
            })
    };

    // order delete system 
    const handelCancel = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = `https://fashion-zone.iitpark.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Successfully deleted Order.", " ", "success", {
                            button: "Ok",
                        });

                        const remainingData = orders.filter(user => user._id !== id)
                        setOrders(remainingData)
                    }
                });
        }
    }

    return (
        <div className="py-16 px-2">
            <div className=" ">
                <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">You can Delete,Edit or Approve users all orders from here</h1>
                {
                    orders.length ?
                        <div>
                            {
                                orders.length ?
                                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                                        {
                                            orders.map(order =>
                                                <div key={order._id}>


                                                    <div className={order.status ? "shadow-2xl bg-indigo-200 p-4 text-sm rounded-lg" : "shadow-2xl bg-red-200 p-4 text-sm rounded-lg"}>
                                                        <div className="flex justify-between">
                                                            <div>
                                                                <p className="font-semibold text-base"> {order?.productName}</p>
                                                                <p> <span className="text-pink-800">{order._id}</span></p>
                                                            </div>
                                                            <div className="flex justify-between items-center">

                                                                {
                                                                    !order.status && <button className="bg-pink-500 py-2 px-4 rounded-lg text-white ">Pending</button>
                                                                }
                                                            </div>
                                                        </div>
                                                        <hr className="my-2" />

                                                        <div>
                                                            <p> Email : {order?.email}</p>

                                                        </div>

                                                        <div>
                                                            <p> Quentity : <span className="text-pink-800 text-xl">{order?.quantity}</span></p>

                                                        </div>
                                                        <div>
                                                            <p> Total Price : <span className="text-pink-800 text-xl">{order?.totalPrice}</span></p>

                                                        </div>



                                                        <div className="flex justify-between mt-2 items-center">
                                                            {
                                                                !order.status && <button className="bg-green-800 py-2 px-4 rounded-lg text-white hover:bg-green-600 " onClick={() => handelAccept(order._id)}>Approve </button>
                                                            }

                                                            <button className={!order.status ? "bg-red-800 py-2 px-4 rounded-lg text-white hover:bg-red-600" : "bg-red-800 hover:bg-red-600 py-2 px-4 rounded-lg text-white  w-full"} onClick={() => handelCancel(order._id)}>Delete Order</button>
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
                        :
                        <div>
                            <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Opps! There are no Any Orders Yet. </h1>

                        </div>
                }
            </div>
        </div >
    );
};

export default ManageOrders;