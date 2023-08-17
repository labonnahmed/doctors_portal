import React from 'react';
import data from '../HomeData/BlogData.json'
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='text-center'>
                <h6 className='text-primary font-bold'>OUR BLOG</h6>
                <h3 className='text-4xl text-secondary font-bold mt-5'>From Our Blog News</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-16'>
                <div className='shadow-xl max-md:hidden mt-6 ml-4 py-4 px-7 bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-400 hover:to-teal-300 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-md'>
                    <div className='mt-4 text-white'>
                        <h6 className=' text-lg'>Rashed Kabir</h6>
                        <small>22 Aug 2018</small>
                    </div>
                    <p className='text-gray-100 text-xl font-semibold mt-6'>Check at least a doctor in a year for your teeth</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-white mt-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                {
                    data.map(blog => <BlogCard blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;