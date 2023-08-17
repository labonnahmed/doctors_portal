import React from 'react';
import data from '../HomeData/TestimonialData.json'
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    return (
        <div className='w-10/12 mx-auto mb-10'>
            <h6 className='text-primary font-bold mb-5'>TESIMONIAL</h6>
            <h3 className='text-4xl text-secondary font-bold leading-6'>What’s Our Patients <br /> <br /> Says</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-10'>
                {
                    data.map(testimonial => <TestimonialCard testimonial={testimonial} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;