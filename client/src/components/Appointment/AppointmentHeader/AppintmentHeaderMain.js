import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../Calendar/Calendar';


const AppintmentHeaderMain = ({ handleSelectedDate, selectedDate }) => {
    return (
        <main className='grid grid-cols-2 py-10 w-10/12 mx-auto'>
            <div className='pr-40'>
                <h1 className='text-4xl font-bold text-header-color tracking-wide mb-3 leading-snug'>Appointment</h1>
                <Calendar
                    handleSelectedDate={handleSelectedDate}
                    selectedDate={selectedDate}
                />
            </div>
            <div className='ml-6'>
                <img src={chair} alt="dental chair" />
            </div>
        </main>
    );
};

export default AppintmentHeaderMain;