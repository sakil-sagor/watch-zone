import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import OrderNow from "../OrderNow/OrderNow";
import ProductTab from "./ProductTab/ProductTab";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    const url = `https://fashion-zone-server-kappa.vercel.app/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const [orders, setOrders] = useState({});

  const handelfield = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (value > 0) {
      const fieldData = { ...orders };
      fieldData[field] = value;
      setOrders(fieldData);
    } else {
      setOrders({});
    }
  };
  const [orederNow, setOrderNow] = useState(false);

  return (
    <div className="py-24 ">
      <div className="full-width-all container m-auto ">
        <div>
          {!orederNow && (
            <div>
              <div className="grid md:grid-cols-12 gap-x-8">
                <div className="div p-8 border md:col-span-5">
                  <img src={product.img} alt="" />
                </div>
                <div className="p-8 border text-lg md:col-span-7">
                  {/* <form onSubmit={handelOrder}> */}

                  <h1 className="text-2xl font-semibold uppercase text-indigo-900 mb-2">
                    {product?.productName}
                  </h1>
                  <p className="text-gray-500 text-sm capitalize">
                    Category : {product?.Category}
                  </p>
                  <br />
                  <p className="text-indigo-900 font-semibold">
                    Rating {product?.rating}{" "}
                    <i class="fas fa-star text-yellow-500"></i>{" "}
                  </p>
                  <br />
                  <h1 className="text-xl font-semibold text-indigo-900">
                    Tk {product?.price}
                  </h1>
                  <br />

                  <hr />

                  <br />
                  <h1 className=" ">
                    Gender :{" "}
                    <span className="text-indigo-900 font-semibold">
                      {product?.Gender}
                    </span>
                  </h1>
                  <h1 className=" ">
                    Color :{" "}
                    <span className="text-indigo-900 font-semibold">
                      {product?.color}
                    </span>
                  </h1>
                  <h1 className=" ">
                    Stock :
                    <span
                      className={
                        product?.InStock
                          ? "text-indigo-900 font-semibold"
                          : "text-red-700 font-semibold"
                      }
                    >
                      {" "}
                      {product?.InStock ? "Avaiable" : "Out of Stock"}
                    </span>
                  </h1>

                  {/* <p className="text-gray-500">{product?.description}</p> */}
                  <br />
                  <hr />
                  <br />
                  <div className="flex items-center ">
                    <p>Quantity :</p>
                    {product?.InStock ? (
                      <input
                        className=" w-24 ml-4 pl-4 py-1 border-2 border-black text-xl"
                        name="quantity"
                        type="number"
                        min="1"
                        required
                        onChange={handelfield}
                      />
                    ) : (
                      <input
                        className=" w-24 ml-4 pl-4 py-1 border-2 border-gray text-xl cursor-not-allowed"
                        disabled
                        name="quantity"
                        type="number"
                        min="1"
                        required
                        onClick={handelfield}
                      />
                    )}
                  </div>
                  <br />

                  {orders.quantity ? (
                    <button
                      onClick={() => setOrderNow(true)}
                      className="transition w-3/4 mx-auto block  duration-500 bg-indigo-900 text-white px-12 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white   d-button-solid border-2 hover:border-indigo-900"
                    >
                      {" "}
                      Buy Now
                    </button>
                  ) : (
                    <button
                      title="Please select your product quentity"
                      disabled
                      className="transition cursor-not-allowed w-3/4 mx-auto block  duration-500 bg-gray-500 text-white px-12 py-2 rounded font-semibold  d-button-solid border-2 "
                    >
                      {" "}
                      Buy Now
                    </button>
                  )}
                  {/* </form> */}
                </div>
              </div>
              <div>
                <ProductTab key={product._id} product={product}></ProductTab>
              </div>
            </div>
          )}
        </div>

        <div>
          {orederNow && (
            <PrivateRoute>
              <OrderNow
                key={product._id}
                product={product}
                setOrderNow={setOrderNow}
                orders={orders}
              ></OrderNow>
            </PrivateRoute>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
