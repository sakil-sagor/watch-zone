import React from 'react';
import { NavLink } from 'react-router-dom';
import ban1 from '../../../images/25.jpg'
import ban2 from '../../../images/26.jpg'
import ban3 from '../../../images/23.jpg'
import ban4 from '../../../images/24.jpg'
import SectionTitle from '../../Shared/SectionTitle';

const Featured = () => {
    return (
        <div className="py-24 ">
            <div className="container full-width-all mx-auto px-2">
                {/* page title  */}
                <div className="services-page-banner">
                    <div className="full-width-all container m-auto text-white">
                        <SectionTitle
                            title="Most Visited Categories"
                            content=""
                        ></SectionTitle>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 ">
                    <NavLink to='/shop'>
                        <img src={ban1} className="rounded-lg w-full" alt="" />
                    </NavLink>
                    <NavLink to='/shop'>
                        <img src={ban2} className="rounded-lg w-full" alt="" />
                    </NavLink>
                    <NavLink to='/shop'>
                        <img src={ban3} className="rounded-lg w-full" alt="" />
                    </NavLink>
                    <NavLink to='/shop'>
                        <img src={ban4} className="rounded-lg w-full" alt="" />
                    </NavLink>

                </div>
            </div>

        </div>
    );
};

export default Featured;