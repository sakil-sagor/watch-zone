import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Services/Service/Service';

const PopulerServices = () => {
    const [services] = useServices([]);
    const highNumber = services.length - 3;
    let numStart = Math.floor(Math.random() * highNumber) + 1
    return (
        <div className="grid grid-col-12 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 xl:px-0">
            {
                services.slice(numStart, numStart + 3).map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>

    );
};

export default PopulerServices;