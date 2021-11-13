import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({})

    const handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...productData, InStock: true }
        fieldData[field] = value;

        setProductData(fieldData)
    }

    const handelRegister = e => {
        const product = { ...productData }
        console.log(product);
        fetch(' https://time-zone-78.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("success")
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
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="name" type="text" onBlur={handelfield} placeholder="Product Name" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="model" type="text" onBlur={handelfield} placeholder="Product model" />
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="price" type="number" step="0.01" onBlur={handelfield} placeholder="Price" />
                            </div>
                            <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="rating" type="text" onBlur={handelfield} placeholder="Product rating" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="Gender" type="text" onBlur={handelfield} placeholder="Gender" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="color" type="text" onBlur={handelfield} placeholder="Product color" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="DisplayType" type="text" onBlur={handelfield} placeholder="Product Display Type" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="CaseMetal" type="text" onBlur={handelfield} placeholder="Product Case Metal" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="WaterResistance" type="text" onBlur={handelfield} placeholder="Water Resistance" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="img" type="text" onBlur={handelfield} placeholder=" IMG url" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="Warranty" type="text" onBlur={handelfield} placeholder=" Warranty" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="description" type="text" step="0.01" onBlur={handelfield} placeholder="Description" />
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