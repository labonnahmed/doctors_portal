import React from 'react';
import Calendar from '../Calendar/Calendar';

const Appointment = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <Calendar />
        </div>
    );
};

export default Appointment;