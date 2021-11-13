import React from 'react';

// page title section 

const PageTitle = (props) => {
    const { title, content } = props;
    return (
        <div className="py-6 md:py-12 lg:py-20 leading-10 px-2">
            <div className="container m-auto full-width-all">
                <h2 className="font-bold w-ful sm:w3/4 lg:w-2/4 text-4xl tracking-wide	">{title}</h2>
                <hr className="w-12 my-4  border" />
                <p className="w-full  sm:w-3/4 md:w-2/4 my-3 font-medium text-base tracking-wide text-2xl">{content}</p>

            </div>
        </div>
    );
};

export default PageTitle;