import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Service from '../Service/Service';
import SpecialService from '../SpecialService/SpecialService';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../ShareComponents/Footer/Footer';

const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <Service />
            <SpecialService />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;