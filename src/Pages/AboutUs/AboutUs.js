import React from 'react';
import PageTitle from '../Shared/PageTitle';
import AboutSingleTab from './AboutSingleTab';
import './AboutUs.css'
import d3 from '../../images/4.jpg'

const AboutUs = () => {
    return (
        <div className="bg-indigo-200">

            {/* Page title  */}
            <div className="login-page-banner text-white">
                <PageTitle title="About Us"
                    content="TIME ZONE is a very reputed and popular name for world class watches and writing instruments in Bangladesh. "
                ></PageTitle>
            </div>

            {/* About page all section  */}

            <div className="container m-auto full-width-all py-24 px-2">
                <div className=" ">
                    {/* About page section  */}
                    <div className="py-16 shadow-xl  bg-white mb-24 p-4 rounded-lg">
                        <h1 className="text-4xl font-semibold text-indigo-900 ">  Fashion Zone Watch Company LTD.</h1>
                        <p className="text-gray-600 mt-8">We provide international  products &  many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations.
                            <br />
                            <br />
                            Watches World Limited, a retail and a distribution house, with this concept started its journey in the year 2012 as a small entity in this country under one of the biggest conglomerates to be the sole enterprises to cater the world famous BRANDS of watches and accessories for easy access to the residents and citizen of Bangladesh.</p>
                    </div>
                    <div>
                        {/* About page section  */}
                        <div className="shadow-xl  bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4  rounded-lg">
                            <div className="pb-24 pt-16 p-4 lg:col-span-7 ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">Time will make your life...</h1>
                                <p className="text-justify   text-gray-600 ">   TIME ZONE is a very reputed and popular name for world class watches and writing instruments in Bangladesh.
                                    <br />
                                    <br />
                                    Watches World Limited, a retail and a distribution house, with this concept started its journey in the year 2012 as a small entity in this country under one of the biggest conglomerates to be the sole enterprises to cater the world famous BRANDS of watches and accessories for easy access to the residents and citizen of Bangladesh.</p>
                            </div>
                            <div className=" lg:col-span-5">
                                <img className="w-full rounded-bl-3xl" src={d3} alt="" />
                            </div>
                        </div>

                        {/* about page props AboutSingle component here */}

                        <div className="my-24">
                            <h1 className="text-4xl mb-8 text-center font-semibold text-indigo-900 ">Our Values</h1>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <AboutSingleTab
                                    title="Best Guide"
                                    desc="We give you the subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title="Package Offer"
                                    desc="We provide you the best prices package. Analyzing the radon or radon progeny concentrations calibrating radon or radon progeny measurement devices."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title=" Money-Back Guranty"
                                    desc="For people requiring additional follow up, the we provides rapid access to professionals specialized in Traveling and treating places."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title="After Services"
                                    desc="We make the  bridge between science and nature. And we make it. Also it underpins every aspect of travel care, from  testing and treatment.  "
                                ></AboutSingleTab>
                            </div>
                        </div>
                        {/* About page bottom area  */}
                        <div className="shadow-xl  bg-white grid grid-cols-12  items-center about-bottom-banner border border-white">
                            <div className="sm:ml-8 pb-24 pt-16 col-span-12 sm:col-span-8 py-4 px-2">
                                <h1 className="text-3xl mb-8 font-semibold text-white ">
                                    The better we do, the more good we can do.
                                </h1>
                                <p className="text-justify   text-white ">
                                    Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 20 million learners in 195 countries, Alison is changing how the world learns and up-skills.
                                    <br />
                                    <br />

                                    We are committed to equality and access to education and skills training irrespective of gender, geography, economic status or any other barriers that can so often stunt potential. So we offer a range of free courses that meet the many diverse needs of our learners. The UN declared in Article 26 of the 1946 Declaration of Human Rights that “Education shall be free…”. This statement will always inspire us.
                                    <br />
                                    <br />
                                    Alison was founded by Alison CEO, Mike Feerick. Mike is a businessman, but one with a difference. He believes in social impact, and that you can build a financially successful business focused on meeting a huge global social need, making education and skills training more accessible for everyone. He invites anyone who believes that too, to support the Alison mission.
                                    <br />
                                    <br />
                                    Alison is free of charge to you. But it’s still a business – albeit a socially-focused one. We are a social enterprise making our money through advertising, merchandise, and the sale of Certificates and Diplomas, should a graduate choose to buy one.
                                </p>
                            </div>
                            <div className="sm:col-span-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;




