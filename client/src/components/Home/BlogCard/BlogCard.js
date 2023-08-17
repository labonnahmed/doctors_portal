import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className='shadow-xl p-10'>
            <div className='flex mt-4'>
                <img src={require(`../../../images/${blog.image}`)} className='h-12 w-12' alt="" />
                <div className='ml-4'>
                    <h6 className='text-gray-800 font-bold'>{blog.name}</h6>
                    <small className='text-gray-500'>{blog.date}</small>
                </div>
            </div>
            <p className='text-gray-800 text-xl font-semibold my-6'>{blog.title}</p>
            <p className='text-gray-400 text-lg'>{blog.description}</p>
        </div>
    );
};

export default BlogCard;