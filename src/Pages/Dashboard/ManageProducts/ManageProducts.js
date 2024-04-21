import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spin from "../../../images/9.gif";

const ManageProducts = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const size = 20;
  useEffect(() => {
    setLoading(true);
    const url = `https://fashion-zone-server-kappa.vercel.app/products?search=${searchInput}&&page=${page}&&size=${size}&&sortDirection=asc&&category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.products);
        const count = data.count;
        setTotalResult(count);
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setLoading(false);
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page, searchInput, category, update]);

  const handelSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  // stock out function
  let handelStockOut = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to Stock Out this Product?"
    );
    if (proceed) {
      const stock = { InStock: false };
      const url = `https://fashion-zone-server-kappa.vercel.app/products/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(stock),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("success");
            // const remainingData = orders.map(user => user)
            setUpdate(update + 1);
          }
        });
    }
  };

  // stock in fucntion
  let handelStockIn = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to Stock in this Product?"
    );
    if (proceed) {
      const stock = { InStock: true };
      const url = `https://fashion-zone-server-kappa.vercel.app/products/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(stock),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("success");
            // const remainingData = orders.map(user => user)
            setUpdate(update + 1);
          }
        });
    }
  };

  // order delete system
  const handelCancel = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete it?");
    if (proceed) {
      const url = `https://fashion-zone-server-kappa.vercel.app/products/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("success");
            const remainingData = searchResult.filter(
              (user) => user._id !== id
            );
            setSearchResult(remainingData);
          }
        });
    }
  };

  return (
    <div className="py-2">
      <div className="m-auto ">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center pb-2">
              <input
                type="text"
                className="py-2 px-3 text-lg border-black border md:w-2/3    my-2 rounded-full "
                placeholder="Serch your choice..."
                onChange={handelSearch}
              />
            </div>
            <div>
              <div>
                <div className="flex items-center justify-between mt-4 px-2">
                  {/* <p>Total Result: <span>{total}</span></p> */}
                  <div>
                    <label htmlFor="">Sort By </label>

                    <select
                      className="border  border-gray-300 py-2  text-gray-600 bg-sky-50 rounded-full px-3"
                      name="religion"
                      id="religion"
                      required
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option className="" disabled selected>
                        --Sort By Category--
                      </option>
                      <option value="">All</option>
                      <option value="saree">Saree</option>
                      <option value="lungi">lungi</option>
                      <option value="shawl">Shawl</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {searchInput && (
              <div className="pb-3">
                <div>
                  <p className="">
                    <span className="text-green-700 font-semibold">
                      Showing Result
                    </span>{" "}
                    :{" "}
                    <span className="font-semibold text-lg">
                      "{totalResult}"
                    </span>{" "}
                    items founded for{" "}
                    <span className="font-semibold text-lg">
                      '{searchInput}'
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {!loading ? (
          <div>
            {searchResult.length ? (
              <div className="">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-8 gap-y-8 ">
                  {searchResult?.map((product) => (
                    <div key={product._id}>
                      <div className="">
                        <div
                          className={
                            !product?.InStock
                              ? "bg-red-200 shadow-xl bg-white rounded hover:shadow-2xl p-2 border"
                              : "shadow-xl bg-white rounded hover:shadow-2xl p-2 border"
                          }
                        >
                          <div className="flex">
                            <div className="">
                              <img
                                className="rounded w-28"
                                src={product?.img}
                                style={{ height: "112px", width: "120px" }}
                                alt=""
                              />
                            </div>

                            <div>
                              <div className="ml-1">
                                <h1 className="text-indigo-900 font-semibold">
                                  {product?.productName}
                                </h1>
                                <p className="text-gray-400  ">
                                  {product?.model}
                                </p>
                              </div>
                              {!product?.InStock ? (
                                <div>
                                  <h1 className="text-red-800 font-bold  ml-1 text-lg">
                                    {" "}
                                    Stock Out!
                                  </h1>
                                </div>
                              ) : (
                                <div className="flex justify-between mt-2">
                                  <div className="">
                                    {/* <p className="text-indigo-900 font-bold text-xl"> <i class="fas fa-star text-yellow-500"></i> {product?.rating}</p> */}
                                  </div>
                                  <div className="text-gray-500">
                                    <span className=" text-pink-800 font-bold">
                                      Tk {product?.price}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="p-3">
                            <div className="flex pt-4 justify-between text-white">
                              <button
                                className="bg-indigo-900 hover:bg-indigo-800 text-sm px-3 py-2 rounded-lg"
                                onClick={() => handelCancel(product?._id)}
                              >
                                Delete
                              </button>
                              {product?.InStock ? (
                                <button
                                  className="bg-indigo-900 hover:bg-indigo-800 text-sm px-2 py-1 rounded-lg"
                                  onClick={() => handelStockOut(product._id)}
                                >
                                  Out of Stock
                                </button>
                              ) : (
                                <button
                                  className="bg-indigo-900 hover:bg-indigo-800 text-sm px-2 py-1 rounded-lg"
                                  onClick={() => handelStockIn(product._id)}
                                >
                                  Stock In
                                </button>
                              )}
                              {/* <button className="bg-indigo-900 hover:bg-indigo-800 text-sm px-3 py-2 rounded-lg">Update</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pagination mt-12 text-center">
                  {[...Array(pageCount).keys()].map((number) => (
                    <button
                      className={
                        number === page
                          ? "px-2 mx-2 border-2 rounded text-white bg-indigo-900 border-indigo-900"
                          : " px-2 mx-2 border-2 rounded bg-gray-100 border-indigo-900"
                      }
                      key={number}
                      onClick={() => setPage(number)}
                    >
                      {number + 1}{" "}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-24 text-center">
                <p className="font-semibold text-4xl ">No Result found...</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <img className="m-auto w-20 mt-24 block" src={spin} alt="" />
          </div>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
    </div>
  );
};

export default ManageProducts;
