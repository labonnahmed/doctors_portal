import React from 'react';
import treatment from '../../../images/treatment.png'

const SpecialService = () => {
    return (
        <div className='grid grid-cols-12 gap-4 w-10/12 mx-auto my-20 mb-10'>
            <img src={treatment} alt="" style={{ height: '480px', width: '420px' }} className='lg:col-span-5 hidden lg:block'/>
            <div className='lg:col-span-7 md:col-span-12 max-md:col-span-12  pr-14 pt-10'>
                <h3 className='text-4xl text-secondary font-bold leading-7 max-md:leading-snug'>Exceptional Dental Care, <br className='max-md:hidden' /> <br className='max-md:hidden' /> on Your Terms</h3>
                <p className='text-gray-400 leading-8 my-10 text-lg text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like l distribution of letters,as opposed to using Content here, content here readable English. Many desktop publishing packages and web page </p>
                <button type="button" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">LEARN MORE</button>
            </div>
        </div>
    );
};

export default SpecialService;