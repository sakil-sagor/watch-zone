import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import FaqTab from '../FaqTab/FaqTab';
import './ProductTab.css';


const ProductTab = (props) => {
    const { CaseMetal, DisplayType, WaterResistance, description, Warranty } = props.product;
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }
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
        fetch(' https://fashion-zone.iitpark.com/reviews', {
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
        <div className="course-area-all ">
            <div>
                <ul className="course-tab-list">
                    <li className={toggleState === 1 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(1)} >Description</li>
                    <li className={toggleState === 2 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(2)}>Warranty</li>
                    <li className={toggleState === 3 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(3)}>FAQ</li>
                    <li className={toggleState === 4 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(4)}>Review</li>
                </ul >
            </div >

            <div className="tab-content-container">
                <div className={toggleState === 1 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div className="p-4 md:p-8">
                        <h2 className="text-2xl mb-4 font-bold">Full Overview</h2>
                        <p className="text-gray-500 text-base leading-8 text-justify"> {description} </p>
                    </div>
                </div>
                <div className={toggleState === 2 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div className=" p-4 md:p-8">
                        <h2 className="text-2xl font-bold">Warranty System</h2>
                        <p className="py-4 text-gray-500 text-base leading-8 text-justify">{Warranty}</p>
                    </div>

                </div>

                {/* faq question area  */}
                <div className={toggleState === 3 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div className=" p-4 md:p-8">
                        <div>
                            <FaqTab
                                question="Which kind of body material?"
                                answer={CaseMetal}
                            >
                            </FaqTab>
                        </div>
                        <div>
                            <FaqTab
                                question="Which Kind of desplay?"
                                answer={DisplayType}
                            >
                            </FaqTab>
                        </div>
                        <div>
                            <FaqTab
                                question="Ability to withstand maximum water pressure??"
                                answer={WaterResistance}
                            >
                            </FaqTab>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 4 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div className="p-4 md:p-8">
                        <form onSubmit={handelReview} className="register-form mt-6">
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="displayName" type="text" onBlur={handelfield} placeholder="Your Name" />
                            </div> <br />
                            <div>
                                <input required className="py-2 px-4 w-full text-lg  rounded-md " name="email" type="email" onBlur={handelfield} placeholder="Your Email" />
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
                </div>
            </div>

        </div >
    );
};

export default ProductTab;




