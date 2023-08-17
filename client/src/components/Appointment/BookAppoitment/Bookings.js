import React from 'react';
import BookingsData from '../AppointmentData/BookingData.json'

const Bookings = ({ selectedDate, setIsOpen, setBooking }) => {
    function openModal(data) {
        setBooking(data)
        setIsOpen(true);
    }

    return (
        <div className='mt-20'>
            <h3 className='text-primary font-medium text-3xl text-center'>Available Appointments on {selectedDate.toDateString()}</h3>
            <div className='grid md:grid-cols-3 gap-6 w-auto md:w-10/12 mx-auto mt-4'>
                {
                    BookingsData.map(data =>
                        <div className='text-center border border-gray-100 shadow-lg shadow-gray-300 rounded-md my-6 py-8'>
                            <h6 className="text-primary font-bold text-xl">{data.subject}</h6>
                            <p className='text-gray-700 font-medium text-md'>{data.VisitingHour}</p>
                            <small className='text-gray-400'>{data.totalSpace} space Available</small>
                            <br />
                            <button type="button" onClick={() => openModal(data)} className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4 mx-auto">BOOK APPOINTMENT</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Bookings;