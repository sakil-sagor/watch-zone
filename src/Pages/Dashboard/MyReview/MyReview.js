import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyReview = () => {
    const { user } = useAuth();
    const intialValue = { displayName: user?.displayName, email: user?.email }
    const [review, setReview] = useState(intialValue)

    let handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...review }
        fieldData[field] = value;
        setReview(fieldData)

    }

    const handelReview = e => {
        const reviews = { ...review }
        fetch(' https://fashion-zone-server.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("successfully published your feedback.")

                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="bg-blue-100 py-24">
                <div className="m-auto container full-width-all m-auto">
                    <h2 className="text-center text-3xl"> Post Your Feedback </h2>
                    <div className="m-auto md:w-8/12 px-2">
                        <form onSubmit={handelReview} className="register-form mt-6">
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="displayName" type="text" onBlur={handelfield} value={user?.displayName} />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="email" type="email" onBlur={handelfield} value={user?.email} />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md" name="rating" type="number" step="0.01" onBlur={handelfield} min="0" max="5" placeholder="Your rating ( 0 - 5 )" />
                            </div> <br />
                            <div>
                                <textarea required className="py-2 px-4 w-full text-lg  rounded-md" name="feedback" type="text" onBlur={handelfield} placeholder="Your feedback"></textarea>
                            </div>
                            <br />
                            <input className="py-2 px-4 text-lg text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" type="submit" value="Add Review" />

                        </form>
                    </div>
                </div >
            </div >
        </div >



    );
};

export default MyReview;