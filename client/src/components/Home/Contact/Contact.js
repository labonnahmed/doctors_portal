import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-Container'>
            <div className='py-10 relative'>
                <div className='w-10/12 mx-auto'>
                    <div className='text-center'>
                        <h6 className='text-primary font-bold'>CONTACT US</h6>
                        <h3 className='text-4xl text-gray-100 font-bold mt-5'>Always Connect with us </h3>
                    </div>
                    <form action="" className='space-y-5 w-2/3 mx-auto mt-20'>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address *" required />
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject *" required />
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-4 pb-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message *" required />
                        <button type="button" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-md text-md px-10 py-3.5 text-center ">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;