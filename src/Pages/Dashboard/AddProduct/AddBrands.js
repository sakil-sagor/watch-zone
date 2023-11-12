import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import blue from "../../../images/blue.gif";


const AddBrands = () => {
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        brandName: '',

    });


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // Other registration form submission logic

        fetch(' http://localhost:5000/addbrands', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    // toast.success("success");

                }
                setFormData({
                    productName: '',
                    image: ''
                });

                setLoading(false)
                if (data.error) {

                    // toast.error(" failed");
                }
            })

    };

    return (
        <div className=' min-h-screen'>
            <div className='full-width-all pt-4  pb-24 '>
                <div className='w-full md:2/4 lg:w-2/4 m-auto pt-12'>
                    <div className=' '>
                        <div className=' '>
                            <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                                <h2 className='text-2xl font-bold text-blue-700'>Add Category</h2>
                            </div>
                            <div className=' mt-4 '>

                                <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={handleSubmit}>
                                    <div className='flex flex-col w-full'>
                                        <label className=' text-gray-600 font-semibold block ' htmlFor='brandName'>
                                            Name
                                        </label>
                                        <input
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type="text"
                                            name="brandName"
                                            placeholder="Category Name"
                                            value={formData.brandName}
                                            onChange={handleInputChange}

                                        />
                                    </div>



                                    <div className=' mt-4 '>
                                        <div className='flex items-center justify-center h-10  bg-indigo-500 rounded'>
                                            <button className=' '>
                                                <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                            </button>
                                            <button className={`w-full h-full  text-white py-18 ${loading && "hidden"}`}>
                                                <span  >
                                                    Add Category
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div >
                        {/* <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            theme="light"
                        /> */}
                    </div >
                </div>
            </div>
        </div>
    );
};

export default AddBrands;