import React from 'react';
import cardInfo from '../HomeData/HeaderData.json';

const HeaderCard = () => {
    return (
        <section className='grid grid-cols-3 gap-4 w-11/12 mx-auto pl-12 my-6 py-4 max-md:hidden relative top-10'>
            {
                cardInfo.map(card =>
                    <div style={{ backgroundColor: card.bgColor }} className='text-white rounded-md py-4'>
                        <div className='lg:flex justify-center w-9/12 align-middle mx-auto'>
                            <div className='my-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d={card.icon} />
                                    <path stroke-linecap="round" stroke-linejoin="round" d={card.icon2} />
                                </svg>
                            </div>
                            <div className='pl-4'>
                                <h5 className=' font-semibold'>{card.title}</h5>
                                <small>{card.description}</small>
                            </div>
                        </div>
                    </div>)
            }
        </section>
    );
};

export default HeaderCard;