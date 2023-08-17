import React from 'react';
import Navbar from '../../ShareComponents/Navbar/Navbar';
import AppintmentHeaderMain from './AppintmentHeaderMain';

const AppointmentHeader = ({ handleSelectedDate, selectedDate }) => {
    return (
        <div className='header-container'>
            <Navbar />
            <AppintmentHeaderMain
                handleSelectedDate={handleSelectedDate}
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default AppointmentHeader;