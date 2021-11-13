import React from 'react';
import Doctor from '../Doctors/Doctor/Doctor';
import useDoctors from '../../Hooks/useDoctor'

// shared doctors for all 

const SingleDoctorsAll = () => {
    const [doctors] = useDoctors();
    let numStart = Math.floor(Math.random() * 11) + 1
    return (
        <div className="grid grid-col-12 md:grid-cols-2 gap-8 px-2 xl:px-0">
            {
                doctors.slice(numStart, numStart + 2).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
    );
};

export default SingleDoctorsAll;