import React, { useEffect, useState } from "react";
import spin from "../../../images/9.gif";
import Product from "../Product/Product";

const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const size = 20;
  useEffect(() => {
    setLoading(true);
    const url = `https://fashion-zone-server-kappa.vercel.app/products?search=${searchInput}&&page=${page}&&size=${size}&&sortDirection=asc&&Category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data?.products);
        const count = data?.count;
        setTotalResult(count);
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setLoading(false);
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page, searchInput, category]);

  const handelSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="text-center pb-2">
          <input
            type="text"
            className="py-2 px-3 text-lg border-black border w-full    my-2 rounded-full "
            placeholder="Serch your choice..."
            onChange={handelSearch}
          />
        </div>
        <div className="">
          <div className="">
            <div className="flex  justify-end mt-4 px-2">
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
                : <span className="font-semibold text-lg">"{totalResult}"</span>{" "}
                items founded for{" "}
                <span className="font-semibold text-lg">'{searchInput}'</span>
              </p>
            </div>
          </div>
        )}
      </div>
      <hr />
      {!loading ? (
        <div>
          {searchResult.length ? (
            <div>
              <div className="pt-6">
                {
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ">
                    {searchResult.map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))}
                  </div>
                }
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
  );
};

export default Products;
