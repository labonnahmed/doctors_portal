import React from 'react';
import chair from '../../../images/chair.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className='grid lg:grid-cols-2 md:grid-cols-2 min-h-full lg:my-10 md:mt-10'>
            <div className='w-10/12 mx-auto max-md:text-center max-md:mb-10'>
                <h1 className='text-5xl font-bold text-header-color max-md:text-center tracking-wide leading-snug'>Your New Smile Starts Here</h1>
                <p className='text-gray-500 tracking-wider'>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Dicta magnam error ducimus sint ipsa eius alias culpa iure impedit vel.</small>
                </p>
                <Link to='/appointment'>
                    <button type="button" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center my-4">GET APPOINTMENT</button>
                </Link>
            </div>
            <div className='lg:block md:block hidden w-10/12'>
                <img src={chair} alt="dental chair" />
            </div>
        </main>
    );
};

export default HeaderMain;