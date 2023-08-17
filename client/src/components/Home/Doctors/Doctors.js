import React from 'react';
import data from '../HomeData/Doctors.json'

const Doctors = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <h6 className='text-center text-primary font-bold'>OUR DOCTORS</h6>
            <div className='grid grid-cols-3 gap-8 my-10 p-10'>
                {
                    data.map(doctor =>
                        <div>
                            <img src={require('../../../images/doctor-small.png')} alt="" />
                            <div className='text-center mt-4'>
                                <h6 className='text-gray-800 font-bold'>{doctor.name}</h6>
                                <small className='text-gray-500'>{doctor.phone}</small>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;