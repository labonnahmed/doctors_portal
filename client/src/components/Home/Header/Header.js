import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderCard from '../HeaderCard/HeaderCard';
import './Header.css'
import Navbar from '../../ShareComponents/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container relative bg-cover bg-center bg-no-repeat min-h-full' id='home-header'>
            <Navbar />
            <HeaderMain />
            <HeaderCard/>
        </div>
    );
};

export default Header;