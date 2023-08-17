import React from 'react';

const AppointmentForm = ({ booking, selectedDate, closeModal }) => {

    const handleAppointment = (e) => {
        const PatientInfo = {
            // booking,
            date: selectedDate.toDateString(),
            Name: e.target[0].value,
            gender: e.target[1].value,
            phone: e.target[2].value,
            email: e.target[3].value,
            age: e.target[4].value
        }

        fetch('http://localhost:8000/takeAppoinment', {
            method: 'POST',
            body: JSON.stringify(PatientInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));


        closeModal();

        e.preventDefault();
    }

    return (
        <>
            <div className='text-center mb-6'>
                <h2 className=' text-2xl text-primary font-medium'>{booking.subject} </h2>
                <small>{selectedDate.toDateString()}</small>
            </div>
            <form onSubmit={handleAppointment}>
                <div className="mb-4">
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                    <select id="gender" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Gender" required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className="mb-4">
                    <input type="tel" id="Phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Phone" required />
                </div>
                <div className="mb-4">
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                    <input type="number" id="date" min="2" max="100" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Age" required />
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 float-right">SEND</button>
            </form >
        </>
    );
};

export default AppointmentForm;