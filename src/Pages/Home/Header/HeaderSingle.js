import React from 'react';
import './Banner.css'

const HeaderSingle = (props) => {
    const { img, titleOne, titleTwo, description } = props.banner;
    return (
        <div className=" banner-home ">
            <div className="container m-auto px-2 py-8 lg:py-24 full-width-all">
                {/* <div className="   grid  grid-cols-12 items-center">
                    <div className="col-span-6 md:col-span-8 lg:col-span-7 text-balck text-left" >
                        <h1 className="text-2xl md:text-3xl font-extrabold"> <span className="text-indigo-900">{titleOne}</span> </h1>
                        <br />
                        <h1 className="text-3xl md:text-5xl text-indigo-900 font-bold">{titleTwo}</h1>
                        <br />
                        <h4 className="text-xl my-10">{description}</h4>

                    </div >
                    <div className="col-span-6 md:col-span-4 lg:col-span-5" >
                        <div style={{ height: "500px", width: "500px" }}>
                            <img style={{ height: "100%", width: "100%" }} src={img} alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="   md:grid  grid-cols-12 items-center">
                    <div className="col-span-6 text-balck text-left py-4" >
                        <h1 className="text-2xl md:text-3xl font-extrabold"> <span className="text-indigo-900">{titleOne}</span> </h1>
                        <br />
                        <h1 className="text-3xl md:text-5xl text-indigo-900 font-bold">{titleTwo}</h1>
                        <br />
                        <h4 className="text-xl my-10 hidden md:block">{description}</h4>
                    </div >
                    <div className="col-span-6 flex items-center header-banner" >
                        <img className='header-banner-img' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeaderSingle;