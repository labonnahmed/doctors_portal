import React from 'react';
import './Appointment.css'
import doctor from '../../../images/doctor.png'

const Appointment = () => {
    return (
        <div className='appointment-container grid grid-cols-12 gap-4 py-9'>
            <div className='col-span-5 max-md:hidden'>
                <img src={doctor} alt="" className='absolute max-md:hidden'/>
            </div>
            <div className='col-span-7 max-md:col-span-12 p-6 z-10'>
                <h6 className='text-primary font-medium mb-4'>APPOINTMENT</h6>
                <h3 className='text-5xl text-gray-200 font-semibold leading-7 max-md:leading-snug '>Make an appointment <br className='max-md:hidden' /> <br className='max-md:hidden' /> Today</h3>
                <p className='text-gray-300 text-xl leading-8 my-8'>It is a long established fact that a reader will be distractedby the readable <br /> content of a page when looking at its</p>
                <button type="button" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Appointment;