import React from 'react';
import data from '../../Home/HomeData/FooterData.json'

const Footer = () => {
    return (
        <div className='w-full footer-container'>
            <div className='grid grid-cols-4 w-10/12 mx-auto py-20 gap-6'>
                {
                    data.map(menu =>
                        <div style={{ marginTop: `${menu.margin}` }}>
                            <h4 className='text-primary font-bold text-2xl my-4'>{menu.title}</h4>
                            <ul>
                                <li>{menu.li}</li>
                                <li>{menu.li2}</li>
                                <li>{menu.li3}</li>
                                <li>{menu.li4}</li>
                                <li>{menu.li5}</li>
                                <li>{menu.li6}</li>
                                <li>{menu.li7}</li>
                            </ul>
                        </div>
                    )
                }
                <div>
                    <h4 className='text-primary font-bold text-2xl my-4'>Our Address</h4>
                    <ul>
                        <li>New York - 101010 Hudsonm Yards</li>
                    </ul>
                    <h6 className='mt-32'>Call Now</h6>
                    <small className='text-secondary font-mono'>+61452200126</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;