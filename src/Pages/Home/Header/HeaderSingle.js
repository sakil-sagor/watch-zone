import React from 'react';
import './Banner.css';

const HeaderSingle = (props) => {
    const { img, titleOne, titleTwo, description } = props.banner;
    return (
        <>
            <div className=" w-full h-[70vh] lg:h-[90vh] ">
                <img className='h-full w-full' src={img} alt="" />
            </div>
            <div className='w-full h-full absolute bg-black opacity-30'>

            </div>
            <div className="container m-auto px-2 py-8 lg:py-24 absolute">
                <div className="   items-center ">
                    <div className="col-span-6 text-balck text-left py-4 text-center" >
                        <h1 className="text-2xl md:text-6xl font-extrabold text-center"> <span className="text-white">{titleOne}</span> </h1>
                        <br />
                        <h1 className="text-3xl md:text-5xl  text-white font-bold">{titleTwo}</h1>
                        <br />
                        <h4 className="text-xl py-6 text-white hidden md:block">{description}</h4>
                        {/* <Link to='/shop' >
                            <button className=' border text-white duration-500 text-xl px-4 py-3 mt-3 rounded font-bold hover:bg-white  hover:text-blue-900 border-white'>
                                Exprole Now
                            </button>
                        </Link> */}
                    </div >

                </div>
            </div>
        </>
    );
};

export default HeaderSingle;