import React from 'react';

const SingleBanner = (props) => {
    const { img } = props.banner;
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default SingleBanner;