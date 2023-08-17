import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
import Bookings from '../BookAppoitment/Bookings';
import Footer from '../../ShareComponents/Footer/Footer';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [modalIsOpen, setIsOpen] = useState(false);
    const [booking, setBooking] = useState({})

    const handleSelectedDate = (date) => {
        setSelectedDate(date)
    }

    return (
        <div>
            <AppointmentHeader
                handleSelectedDate={handleSelectedDate}
                selectedDate={selectedDate} />
            <Bookings
                selectedDate={selectedDate}
                setIsOpen={setIsOpen}
                setBooking={setBooking} />
            <AppointmentInfo
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                selectedDate={selectedDate}
                booking= {booking} />
            <Footer />
        </div>
    );
};

export default Appointment;