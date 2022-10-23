import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;