import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layouts = () => {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <p>footer</p>
        </>
    );
};

export default Layouts;