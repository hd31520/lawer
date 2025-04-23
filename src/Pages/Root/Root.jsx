import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';



const Root = () => {
    return (
        <div>
            <div className='p-3 md:px-32'>
                <Navbar></Navbar>
                <Outlet></Outlet>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;