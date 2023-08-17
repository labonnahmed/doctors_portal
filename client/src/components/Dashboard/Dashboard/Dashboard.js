import React from 'react';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {



    return (
        <div className='relative'>
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Dashboard;