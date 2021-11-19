import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Payment from '../../Dashboard/Payment/Payment';
import OrderPayment from '../OrderPayment/OrderPayment';

const OrderNow = ({ product, orders }) => {
    const { user } = useAuth();
    const { _id, img, productId, productName, price } = product;



    const { quantity } = orders;
    const initailInfo = { userName: user.displayName, email: user.email }
    const [orderData, setOrderData] = useState(initailInfo)
    const history = useHistory();


    const handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...orderData }
        fieldData[field] = value;
        setOrderData(fieldData)
    }

    const unitPrice = parseInt(price) * parseInt(quantity);
    const fullOrder = {
        ...orderData,
        productName: productName,
        singlePrice: price,
        quantity: quantity,
        totalPrice: unitPrice,
        status: false,
        addToCartId: _id,

    }


    return (
        <div>
            {
                product?.price &&
                <div>
                    <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12"> Please fill up all the necessary inputs for your Valuable order.</h1>
                    {/* <form onSubmit={handelPlaceOrder}> */}
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                        <div className="div p-8 border-2 ">
                            <div>
                                <input required className="py-2 px-4 w-full text-lg border-2 border-black  rounded-md " name="userName" type="text" onBlur={handelfield} value={user.displayName} />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg border-2 border-black    rounded-md " name="email" type="email" onBlur={handelfield} value={user.email} />
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg border-2 border-black    rounded-md" name="phone" type="number" onBlur={handelfield} placeholder="Your Phone" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  border-2 border-black   rounded-md" name="address" type="text" step="0.01" onBlur={handelfield} placeholder="Your Address" />
                            </div>
                            <br />
                        </div>
                        <div className="px-2 md:px-4 py-6 border-2 text-lg">
                            <div className="lg:flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="w-24" src={img} alt="" />
                                    <div className="text-indigo-900 font-semibold">

                                        <p>Name : {productName}</p>
                                    </div>
                                </div>
                                <div className="text-indigo-900 font-semibold text-right">
                                    <p>$ {price}</p>
                                </div>
                            </div>
                            <div className="text-indigo-900 font-semibold">
                                <p className="text-right"> X {quantity} </p>
                            </div>
                            <hr className="my-6" />

                            <div className="text-indigo-900 font-semibold">
                                <p className="text-right">Total : $ {unitPrice}</p>
                            </div>
                            <div>
                                <OrderPayment fullOrder={fullOrder} totalprice={unitPrice}></OrderPayment>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <NavLink to={`/orderNow/${_id}`}>
                        <button className="transition w-3/4 mx-auto block  duration-500 bg-indigo-900 text-white px-12 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white   d-button-solid border-2 hover:border-indigo-900" type="submit"> Place Order</button>
                    </NavLink> */}
                    {/* </form> */}
                </div>
            }
        </div>
    );
};

export default OrderNow;