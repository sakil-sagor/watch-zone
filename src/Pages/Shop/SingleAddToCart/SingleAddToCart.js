import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const SingleAddToCart = ({ cart, carts, setCarts }) => {
  const { _id, img, productId, productName, price, quantity } = cart;
  const [totalquantity, setTotalQuantity] = useState(quantity);

  const handelfield = (e) => {
    setTotalQuantity(e.target.value);
  };

  const handelUpdatefield = (id) => {
    const fullAddToCart = { quantity: totalquantity };
    const url = `https://fashion-zone-server-kappa.vercel.app/addToCart/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullAddToCart),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // add to cart delete
  const handelCancel = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete it?");
    if (proceed) {
      fetch(`https://fashion-zone-server-kappa.vercel.app/addToCart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal("Successfully Delete it!", "", "success");
            const remainingData = carts.filter((user) => user._id !== id);
            setCarts(remainingData);
          }
        });
    }
  };

  return (
    <div>
      <div className="px-2 md:px-4 py-6 border shadow-2xl">
        <div className="lg:flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-16" src={img} alt="" />
            <div className="text-indigo-900 font-semibold">
              <p>{productId}</p>
              <p> {productName}</p>
            </div>
          </div>
          <div className="text-indigo-900 font-semibold text-right">
            <p>Tk {price}</p>
          </div>

          <div>
            <input
              className="cart-input w-16 ml-2 pl-2 py-1  text-xl"
              name="quantity"
              defaultValue={quantity}
              type="number"
              min="1"
              required
              onChange={handelfield}
              onClick={() => handelUpdatefield(_id)}
            />
          </div>
        </div>

        <hr className="my-3" />
        <div className="text-indigo-900 font-semibold">
          <p className="text-right mb-3">Total : $ {totalquantity * price}</p>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => handelCancel(_id)}>
            <i class="far fa-trash-alt hover:text-red-800 border px-4 py-2 text-xl hover:border-red-800 cursor-pointer transition duration-500 rounded"></i>
          </button>
          <NavLink
            className="transition duration-500 bg-indigo-900 text-white px-10 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900"
            to={`/addToCartOrder/${_id}`}
          >
            <button>Check Out</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleAddToCart;
