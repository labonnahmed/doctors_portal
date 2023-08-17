import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className='text-center px-10 mb-6'>
            <img className="mx-auto h-20" src={require(`../../../images/${service.image}`)} alt="" />
            <h4 className='text-xl text-gray-600 font-semibold my-4'>{service.title}</h4>
            <p className='text-lg text-gray-400 font-normal'>{service.description}</p>
        </div>
    );
};

export default ServiceCard;