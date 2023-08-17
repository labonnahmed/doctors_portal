import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='pt-4 p-6 shadow-xl'>
            <p className='text-gray-400 text-xl leading-8 my-10'>{testimonial.description}</p>
            <div className='flex mt-16'>
                <img src={require(`../../../images/${testimonial.image}`)} className='h-12 w-12' alt="" />
                <div className='ml-4'>
                    <h6 className='text-primary font-medium'>{testimonial.petient}</h6>
                    <small className='text-gray-500'>{testimonial.from}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;