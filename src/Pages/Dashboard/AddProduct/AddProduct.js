import React, { useState } from 'react';
import { useRef } from 'react';

const AddProduct = () => {
    const initialValu = {
        InStock: true,
        WaterResistance: '3 ATM',
        Warranty: '1 Year Brand Warranty (For detail, please see warratny information page under help center)'
    }
    const [productData, setProductData] = useState(initialValu)

    const handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...productData }
        fieldData[field] = value;
        setProductData(fieldData)
    }

    const getCategory = useRef('');
    const getDisplayType = useRef('');
    const getCaseTyoe = useRef('');
    const getGender = useRef('');
    const getDes = useRef('');
    const getName = useRef('');
    const getModel = useRef('');
    const getPrice = useRef('');
    const getRating = useRef('');
    const getColor = useRef('');
    const getImg = useRef('');

    const handelRegister = e => {
        const product = { ...productData }

        fetch(' https://time-zone-78.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert("success")
                    getDisplayType.current.value = getCategory.current.value = getCaseTyoe.current.value = getGender.current.value = getDes.current.value = getName.current.value = getModel.current.value = getPrice.current.value = getRating.current.value = getColor.current.value = getImg.current.value = '';
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <div className="bg-blue-100 py-24 rounded-lg">
                <div className="m-auto container full-width-all m-auto">
                    <h2 className="text-center text-3xl"> Add a new Product </h2>
                    <div className="m-auto md:w-8/12 px-2">
                        <form onSubmit={handelRegister} className="register-form mt-6">
                            <div>
                                <select required className="py-2 px-4 w-full text-lg  rounded-md " name="Category" onBlur={handelfield} ref={getCategory}>
                                    <option className='' value="" disabled selected>Select Product Category </option>
                                    <option> mobile</option>
                                    <option> leptop</option>
                                    <option> watch</option>

                                </select>
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="productName" type="text" onBlur={handelfield} ref={getName} placeholder="Product Name" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="model" type="text" onBlur={handelfield} ref={getModel} placeholder="Product model" />
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="price" type="number" step="0.01" onBlur={handelfield} ref={getPrice} placeholder="Price" />
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="rating" type="number" onBlur={handelfield} ref={getRating} placeholder="Product rating ( 0 - 5 )" step="0.01" min="0" max="5" />
                            </div>
                            <br />
                            <div>
                                <select required className="py-2 px-4 w-full text-lg  rounded-md " name="Gender" onBlur={handelfield} ref={getGender}>
                                    <option value="" disabled selected>Gender </option>
                                    <option> Male</option>
                                    <option> Female</option>
                                    <option> Male & Female</option>

                                </select>
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="color" type="text" onBlur={handelfield} ref={getColor} placeholder="Product color" />
                            </div> <br />
                            <div>
                                <select required className="py-2 px-4 w-full text-lg  rounded-md " name="DisplayType" onBlur={handelfield} ref={getDisplayType}>
                                    <option value="" disabled selected>Product Display Type</option>
                                    <option> Digital</option>
                                    <option> Analog</option>

                                </select>
                            </div>
                            <br />
                            <div>
                                <select required className="py-2 px-4 w-full text-lg  rounded-md " name="CaseMetal" onBlur={handelfield} ref={getCaseTyoe}>
                                    <option value="" disabled selected>Product Case Metal</option>
                                    <option> STAINLESS STEEL</option>
                                    <option> Leather</option>
                                    <option> Glass Body</option>
                                    <option> Plastic Body</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="img" type="text" onBlur={handelfield} ref={getImg} placeholder=" IMG url" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="description" type="text" step="0.01" onBlur={handelfield} ref={getDes} placeholder="Description" />
                            </div> <br />
                            <div>
                                <input className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>
                </div >

            </div >
        </div>
    );
};

export default AddProduct;