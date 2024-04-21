import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../../images/blue.gif";

const AddBrands = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Other registration form submission logic

    fetch("https://fashion-zone-server-kappa.vercel.app/addbrands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("success");
          setFormData({
            category: "",
            subCategory: "",
          });
        }

        setLoading(false);
        if (data.error) {
          setFormData({
            category: "",
            subCategory: "",
          });

          toast.error(" failed");
        }
      });
  };

  // load all category
  // load all orders
  useEffect(
    () => [
      fetch("https://fashion-zone-server-kappa.vercel.app/allBrands")
        .then((res) => res.json())
        .then((data) => setAllCategory(data)),
    ],
    [loading]
  );
  const handleRemovecategory = async (id) => {
    if (id) {
      const url = `https://fashion-zone-server-kappa.vercel.app/category/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("success");
            const remainingData = allCategory.filter((user) => user._id !== id);
            setAllCategory(remainingData);
          }
        });
    }
  };

  return (
    <div className=" min-h-screen">
      <div className="full-width-all pt-4  pb-24 ">
        <div className="w-full  m-auto pt-12 flex gap-8">
          <div className="w-1/2 ">
            <div className=" ">
              <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                <h2 className="text-2xl font-bold text-blue-700">
                  Add Category
                </h2>
              </div>
              <div className=" mt-4 ">
                <form
                  className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col w-full">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="category"
                    >
                      Name
                    </label>

                    <select
                      required
                      className="py-2 px-4 w-full text-lg  required rounded-md "
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled selected>
                        Category{" "}
                      </option>
                      <option value="saree"> saree</option>
                      <option value="lungi"> lungi</option>
                      <option value="shawl">shawl</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="subCategory"
                    >
                      Name
                    </label>
                    <input
                      required
                      className="py-1 px-2 rounded-md border border-gray-300"
                      type="text"
                      name="subCategory"
                      placeholder="Sub-Category Name"
                      value={formData.subCategory}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className=" mt-4 ">
                    <div className="flex items-center justify-center h-10  bg-indigo-500 rounded">
                      <button className=" ">
                        <img
                          className={`w-8 text-center  mx-auto ${
                            !loading && "hidden"
                          }`}
                          src={blue}
                          alt=""
                        />
                      </button>
                      <button
                        className={`w-full h-full  text-white py-18 ${
                          loading && "hidden"
                        }`}
                      >
                        <span>Add Category</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <table className="w-full table-auto border border-spacing-y-6">
              <thead className="">
                <tr className="text-left border">
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Sub Category</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>

              {allCategory?.map((cat, index) => (
                <tr
                  key={cat.id}
                  className={index % 2 === 0 ? "bg-gray-200 " : ""}
                >
                  <td className="px-4 py-4  text-blue-500 ">{cat.category}</td>
                  <td className="px-4 py-4">{cat?.subCategory}</td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleRemovecategory(cat?._id)}
                      className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800 "
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
    </div>
  );
};

export default AddBrands;
