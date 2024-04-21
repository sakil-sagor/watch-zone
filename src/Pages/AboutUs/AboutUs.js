import React from 'react';
import PageTitle from '../Shared/PageTitle';
import AboutSingleTab from './AboutSingleTab';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="bg-indigo-200">

            {/* Page title  */}
            <div className="login-page-banner text-white">
                <PageTitle title="About Us"
                    content="New-Collection is a very reputed and popular name  in Bangladesh and over world. "
                ></PageTitle>
            </div>

            {/* About page all section  */}

            <div className="container m-auto full-width-all py-24 px-2">
                <div className=" ">
                    {/* About page section  */}
                    <div className="py-16 shadow-xl  bg-white mb-24 p-4 rounded-lg">
                        <h1 className="text-4xl font-semibold text-indigo-900 ">  Embrace Elegance with New Collection – Your Ultimate Destination for Timeless Sarees..</h1>
                        <p className="text-gray-600 mt-8">At the heart of our business is a deep-rooted appreciation for the rich cultural heritage of Bangladesh. We draw inspiration from the diverse traditions and artistry that span the length and breadth of the country. Our commitment to preserving and promoting these age-old crafts is reflected in every weave, motif, and design that graces our sarees.
                            <br />
                        </p>
                    </div>
                    <div>
                        {/* About page section  */}
                        <div className="shadow-xl  bg-white  rounded-lg">
                            <div className=" p-4  ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">Quality Craftsmanship</h1>
                                <p className="text-justify   text-gray-600 ">   We understand that a saree is not just a piece of clothing; it's a work of art that transcends generations. That's why each saree in our collection is a testament to the skill and dedication of our master craftsmen. From the intricate hand-embroidery to the delicate handloom weaves, every detail is meticulously crafted to ensure you receive nothing short of perfection.
                                    <br />

                                </p>
                            </div>
                            <div className=" p-4 ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">       Timeless Elegance</h1>
                                <p className="text-justify   text-gray-600 ">


                                    In a world that's constantly evolving, the charm of a saree remains timeless. Our curated collection blends the classic with the contemporary, offering a range that caters to the modern woman while respecting the authenticity of traditional craftsmanship. Whether you're attending a grand celebration or an intimate gathering, our sarees are designed to make you stand out with grace and poise.
                                    <br />

                                </p>
                            </div>
                            <div className=" p-4 ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">                              Diverse Collection</h1>
                                <p className="text-justify   text-gray-600 ">




                                    Dive into our extensive range of sarees, each telling a unique story through its fabric, colors, and design. From the vibrant hues of silk to the understated elegance of cotton, our collection caters to every taste and occasion. Whether you're a connoisseur of Banarasi silk or a lover of handwoven Kanjeevarams, we have the perfect saree waiting for you.
                                    <br />

                                </p>
                            </div>
                            <div className=" p-4 ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">          Customer-Centric Approach</h1>
                                <p className="text-justify   text-gray-600 ">



                                    Our customers are at the heart of everything we do. We strive to provide a seamless shopping experience, ensuring that you find the perfect saree that not only complements your style but also celebrates your individuality. Our dedicated team is always ready to assist you, ensuring that your journey with New Collection is nothing short of delightful.







                                    <br />

                                </p>
                            </div>
                            <div className=" p-4 ">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">      Sustainability</h1>
                                <p className="text-justify   text-gray-600 ">


                                    As custodians of culture, we are committed to sustainable and ethical practices. Our sarees are crafted with utmost respect for the environment, and we actively promote fair trade practices to support the artisans who bring our creations to life. When you choose New Collection, you choose not just a piece of clothing but a conscious step towards preserving our cultural heritage.
                                    <br />

                                </p>
                            </div>
                            <div className=" p-4 pb-16">
                                <h1 className="text-4xl mb-8 font-semibold text-indigo-900 ">     Visit Us</h1>
                                <p className="text-justify   text-gray-600 ">


                                    Step into the world of timeless elegance by exploring our retail and wholesale store or visiting our physical location. Discover the allure of tradition and the allure of the contemporary, woven seamlessly into every saree at New Collection.

                                    Embrace the beauty of tradition. Embrace the allure of New Collection.
                                    <br />

                                </p>
                            </div>

                        </div>

                        {/* about page props AboutSingle component here */}

                        <div className="my-24">
                            <h1 className="text-4xl mb-8 text-center font-semibold text-indigo-900 "></h1>
                            <div className="grid md:grid-cols-2 gap-8">
                                <AboutSingleTab
                                    title="Our Mission"
                                    desc="At New Collection, our mission is to celebrate the timeless elegance of Bangladeshi heritage Sharee and Indian sarees, preserving and promoting the rich cultural heritage embedded in each thread. We are dedicated to providing our customers with a curated collection that seamlessly blends tradition and trend, fostering a sense of pride and grace in every woman who adorns our sarees."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title="Our Vision"
                                    desc="Our vision at New Collection is to be the epitome of excellence in the world of sarees. We aspire to be the preferred choice for individuals seeking not just clothing but a connection to tradition, craftsmanship, and enduring style. We envision a global community that recognizes and embraces the cultural significance woven into each saree we offer."
                                ></AboutSingleTab>

                            </div>
                        </div>
                        {/* About page bottom area  */}
                        <div className="shadow-xl  bg-white grid grid-cols-12  items-center about-bottom-banner border border-white">
                            <div className="sm:ml-8 pb-24 pt-16 col-span-12 sm:col-span-8 py-4 px-2">
                                <h1 className="text-3xl mb-8 font-semibold text-white ">
                                    Our Goals:
                                </h1>
                                <div className='p-4'>
                                    <p className='mb-2 text-white font-semibold text-lg'>1.     Quality Craftsmanship:</p>
                                    <ul className='text-white  '>
                                        <li>
                                            - To consistently deliver sarees of the highest quality, showcasing the impeccable craftsmanship of skilled artisans.
                                        </li>
                                        <li>
                                            -  To continually innovate and introduce new designs while preserving the authenticity of traditional weaving techniques.
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-4'>
                                    <p className='mb-2 text-white font-semibold text-lg'>     3.     Cultural Preservation:</p>
                                    <ul className='text-white  '>
                                        <li>
                                            -     To actively contribute to the preservation of traditional Bangladeshi heritage Sharee and Indian sarees textile arts and crafts.

                                        </li>
                                        <li>

                                            -       To support and uplift local artisans and weavers, promoting fair trade practices and sustainable production methods.
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-4'>
                                    <p className='mb-2 text-white font-semibold text-lg'>     4.     Global Reach:</p>
                                    <ul className='text-white  '>
                                        <li>
                                            -  To expand our reach globally, making our collection accessible to saree enthusiasts around the world.
                                        </li>
                                        <li>


                                            -    To participate in international events and collaborations, promoting Bangladeshi heritage Sharee and Indian sarees on the global stage.
                                        </li>
                                    </ul>
                                </div>


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




