import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const initialValu = {
    InStock: true,
  };
  const [productData, setProductData] = useState(initialValu);
  const [allCategory, setAllCategory] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryName, setCategoryName] = useState("saree");

  const handelfield = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const fieldData = { ...productData };
    fieldData[field] = value;
    setProductData(fieldData);
  };

  const getCategory = useRef("");

  const getGender = useRef("");
  const getDes = useRef("");
  const getName = useRef("");

  const getPrice = useRef("");
  const getRating = useRef("");
  const getColor = useRef("");
  const getSubCategory = useRef("");

  // load all orders
  useEffect(
    () => [
      fetch("https://fashion-zone-server-kappa.vercel.app/allBrands")
        .then((res) => res.json())
        .then((data) => setAllCategory(data)),
    ],
    []
  );

  const uploadImageToImgBB = async (imageFile) => {
    const apiKey = "9412af495941411a92b93242ceea1281";
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === 200) {
        const imageUrl = data.data.url;
        setImageUrl(imageUrl);
        return imageUrl;
      } else {
        console.error("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  const sareeSubCategory = allCategory.filter(
    (cat) => cat.category === "saree"
  );
  const lugniSubCategory = allCategory.filter(
    (cat) => cat.category === "lungi"
  );
  const shawlSubCategory = allCategory.filter(
    (cat) => cat.category === "shawl"
  );

  const handelRegister = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadImageToImgBB(imageFile);
    // state.image = imageUrl
    const product = { ...productData, img: imageUrl };

    fetch("https://fashion-zone-server-kappa.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("success");
          getCategory.current.value =
            getGender.current.value =
            getDes.current.value =
            getName.current.value =
            getPrice.current.value =
            getRating.current.value =
            getColor.current.value =
            getSubCategory.current.value =
              "";
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-blue-100 py-24 rounded-lg">
        <div className="m-auto container full-width-all ">
          <h2 className="text-center text-3xl"> Add a new Product </h2>
          <div className="m-auto md:w-8/12 px-2">
            <form onSubmit={handelRegister} className="register-form mt-6">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <select
                    required
                    className="py-2 px-4 w-full text-lg  rounded-md "
                    name="Category"
                    onChange={handelfield}
                    onBlur={(e) => setCategoryName(e.target.value)}
                    ref={getCategory}
                  >
                    <option className="" value="" disabled selected>
                      Select Product Category{" "}
                    </option>

                    <option value="saree"> saree</option>
                    <option value="lungi"> lungi</option>
                    <option value="shawl">shawl</option>
                  </select>
                </div>

                <div className="w-1/2">
                  <select
                    required
                    className="py-2 px-4 w-full text-lg  rounded-md "
                    name="subCategory"
                    onBlur={handelfield}
                    ref={getSubCategory}
                  >
                    <option className="" value="" disabled selected>
                      Select Product Category{" "}
                    </option>
                    {categoryName === "saree" &&
                      sareeSubCategory.map((category, ind) => (
                        <option key={ind}> {category?.subCategory}</option>
                      ))}
                    {categoryName === "lungi" &&
                      lugniSubCategory.map((category, ind) => (
                        <option key={ind}> {category?.subCategory}</option>
                      ))}
                    {categoryName === "shawl" &&
                      shawlSubCategory.map((category, ind) => (
                        <option key={ind}> {category?.subCategory}</option>
                      ))}
                  </select>
                </div>
              </div>
              {/* <div>
                                <select required className="py-2 px-4 w-full text-lg  rounded-md " name="Category" onBlur={handelfield} ref={getCategory}>
                                    <option className='' value="" disabled selected>Select Product Category </option>

                                    <option value='saree'> saree</option>
                                    <option value="lungi"> lungi</option>
                                    <option value='shawl'>shawl</option>

                                </select>
                            </div> */}
              <br />
              <div>
                <input
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md "
                  name="productName"
                  type="text"
                  onBlur={handelfield}
                  ref={getName}
                  placeholder="Product Name"
                />
              </div>{" "}
              <br />
              <div>
                <input
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md"
                  name="price"
                  type="number"
                  step="0.01"
                  onBlur={handelfield}
                  ref={getPrice}
                  placeholder="Price"
                />
              </div>
              <br />
              <div>
                <input
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md"
                  name="rating"
                  type="number"
                  onBlur={handelfield}
                  ref={getRating}
                  placeholder="Product rating ( 0 - 5 )"
                  step="0.01"
                  min="0"
                  max="5"
                />
              </div>
              <br />
              <div>
                <select
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md "
                  name="Gender"
                  onBlur={handelfield}
                  ref={getGender}
                >
                  <option value="" disabled selected>
                    Gender{" "}
                  </option>
                  <option> Male</option>
                  <option> Female</option>
                  <option> Male & Female</option>
                </select>
              </div>
              <br />
              <div>
                <input
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md"
                  name="color"
                  type="text"
                  onBlur={handelfield}
                  ref={getColor}
                  placeholder="Product color"
                />
              </div>{" "}
              <br />
              <div className="w-1/2">
                <label
                  className=" text-gray-600 font-semibold block  "
                  for="image"
                >
                  Image
                </label>
                <input
                  type="file"
                  required
                  accept="image/*"
                  id="image"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </div>
              <br />
              <div>
                <input
                  required
                  className="py-2 px-4 w-full text-lg  rounded-md"
                  name="description"
                  type="text"
                  step="0.01"
                  onBlur={handelfield}
                  ref={getDes}
                  placeholder="Description"
                />
              </div>{" "}
              <br />
              <div>
                <input
                  className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800"
                  type="submit"
                  value="Add Service"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
    </div>
  );
};

export default AddProduct;
