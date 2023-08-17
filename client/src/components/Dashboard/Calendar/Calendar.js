import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameMonth, isSameDay, eachDayOfInterval, isBefore, isToday } from 'date-fns';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());


    const prevMonth = () => {
        setCurrentDate(prevDate => subMonths(prevDate, 1));
    };

    const nextMonth = () => {
        setCurrentDate(prevDate => addMonths(prevDate, 1));
    };

    const getMonthName = () => {
        return format(currentDate, 'MMMM yyyy')
    };

    const renderDaysOfWeek = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek.map(day => (
            <div className="text-center font-medium text-gray-600 mt-10" key={day}>
                {day}
            </div>
        ));
    };

    const renderDaysOfMonth = () => {
        const startWeek = startOfWeek(startOfMonth(currentDate));
        const endWeek = endOfWeek(endOfMonth(currentDate));
        const days = eachDayOfInterval({ start: startWeek, end: endWeek });

        return days.map((day, index) => {
            const isDisabled = isBefore(day, new Date()) || !isSameMonth(day, currentDate);
            const isSelected = isSameDay(day, selectedDate);

            return (
                <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer
          ${isSelected ? 'bg-[#1CC7C1] text-white' : ''}
          ${isDisabled ? 'text-gray-400' : ''}
          ${isToday(day) ? 'bg-gray-200' : ''}`}
                    key={index}
                    onClick={() => !isDisabled && setSelectedDate(day)}
                >
                    {format(day, 'd')}
                </div>
            );
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow px-4 py-6 mt-6">
            <div className="flex justify-between items-center mb-4">

                <svg onClick={prevMonth} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <div className="text-2xl font-medium text-gray-700">{getMonthName()}</div>

                <svg onClick={nextMonth} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </div>
            <div className="flex justify-between mb-4">{renderDaysOfWeek()}</div>
            <div className="grid grid-cols-7 gap-2">{renderDaysOfMonth()}</div>
        </div>
    );
};

export default Calendar;
