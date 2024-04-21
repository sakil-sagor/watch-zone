import React from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import "./Product.css";

const Product = (props) => {
  const { _id, InStock, productName, rating, price, img } = props.product;
  // const [quentity, setQuentity] = useState(0);
  const { user } = useAuth();

  const addToCart = (e) => {
    const product = {
      productId: _id,
      email: user.email,
      img: img,
      productName: productName,
      price: price,
      quantity: 1,
      payment: false,
      status: false,
    };
    if (user.email) {
      fetch("https://fashion-zone-server-kappa.vercel.app/addToCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            swal("Products added to cart!", " ", "success");
          } else {
            swal({
              text: "Already Exist on add to cart!",
              button: "Add Another!",
            });
          }
        });
    } else {
      swal("Oops!", "You are not loged in, Please Log in fast!", "");
    }
  };

  return (
    <div className=" ">
      <div className="shadow-xl bg-white rounded hover:shadow-2xl border p-2 flex  flex-col h-full">
        <div className="px cart product-img">
          {!InStock && (
            <div className="limit-stock ">
              <p className="text-2xl text-center ">Stock Out</p>
            </div>
          )}
          <img
            className="rounded "
            style={{ height: "100%", width: "100%" }}
            src={img}
            alt=""
          />
        </div>
        <hr className="mt-2" />
        <div className="mt-2 flex justify-between flex-grow">
          <div>
            <h1 className="text-indigo-900 font-semibold text-md">
              {productName}
            </h1>
          </div>
          <div>
            {InStock ? (
              <button onClick={addToCart}>
                <i class="fas fa-cart-plus text-pink-800 hover:text-indigo-900 text-2xl font-bold"></i>
              </button>
            ) : (
              <button>
                <i class="fas fa-cart-plus text-gray-800  text-2xl font-bold cursor-not-allowed"></i>
              </button>
            )}
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between ">
            <div className="">
              <p className="text-indigo-900 font-bold text-sm">
                <i class="fas fa-star text-yellow-500"></i> {rating}
              </p>
            </div>
            <div className="text-gray-500">
              <span className="text-md text-pink-800 font-bold">
                Tk {price}
              </span>
            </div>
          </div>

          <div className="flex pt-4 justify-between flwx">
            <NavLink
              className="transition duration-500 border border-indigo-900 text-indigo-900 text-sm bg-white hover:bg-indigo-900 hover:text-white px-2 py-2 rounded   d-button "
              to={`shop/${_id}`}
            >
              Details
            </NavLink>
            {InStock ? (
              <NavLink
                className="transition duration-500 bg-indigo-900 text-white px-2 py-2 rounded  hover:text-indigo-900 hover:bg-white text-sm  d-button-solid border hover:border-indigo-900"
                to={`directOrder/${_id}`}
              >
                Order Now
              </NavLink>
            ) : (
              <button
                disabled
                className="transition  cursor-not-allowed duration-500 bg-gray-500 text-white px-3 py-2 rounded text-sm   d-button-solid border "
              >
                Order Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
