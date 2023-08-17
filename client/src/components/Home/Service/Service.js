import React from 'react';
import data from '../HomeData/ServiceData.json'
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    return (
        <section className='my-28 w-10/12 mx-auto'>
            <div className='text-center'>
                <h5 className='text-xl font-medium text-primary my-2'>Our Services</h5>
                <h2 className='text-3xl font-bold text-header-color'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 my-20 float-right'>
                {
                    data.map(service => <ServiceCard service={service} />)
                }
            </div>
        </section>
    );
};

export default Service;