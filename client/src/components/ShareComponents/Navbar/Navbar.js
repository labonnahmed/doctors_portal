import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);


    return (
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-end p-4 ml-auto">
            <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" ariaControls="navbar-default" ariaExpanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                <ul className="font-medium float-right flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-20 mr-10 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" className="block py-2 text-gray-500 hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent" ariaCurrent="page">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard" className="block py-2 text-gray-500 hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent">Dashboard</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 text-gray-500 hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent">Services</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 lg:text-white md:text-gray-500 hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent">Pricing</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 text-white hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent">About</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 text-white hover:-gray-100 md:hover:-transparent md:hover:text-primary dark:text-white md:dark:hover:text-primary dark:hover:text-white md:dark:hover:-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;