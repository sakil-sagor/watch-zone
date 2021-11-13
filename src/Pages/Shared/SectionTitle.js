import React from 'react';

// section title 

const SectionTitle = (props) => {
    const { title, content, color } = props;
    return (
        <div>
            <div className="px-2 lg:px-0 pb-12 text-center" >
                <h1 className={`text-4xl md:text-5xl text-indigo-900  ${color} `}>{title}</h1>
                <br />
                <hr className="w-24 border-indigo-900 border-t-2 mx-auto" />
                <br />
                <h4 className={`text-xl w-full sm:w3/4 text-indigo-900  ${color} `}>{content}</h4>

            </div >
        </div >
    );
};

export default SectionTitle;



