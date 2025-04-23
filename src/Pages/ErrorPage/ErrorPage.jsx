import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div className=' '>
            <Navbar></Navbar>
            <div className='bg-gray-200 flex '>
            <div>
                <img src="https://i.ibb.co.com/WNkpp35q/electrocuted-caveman-animation-404-error-page.gif" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center  p-20 gap-2.5'>

                <h2 className='text-7xl text-red-600'>404 - Page Not FOund</h2>
                <p>You Shoild to Back Home</p>

                <Link to="/" className="px-3 py-1.5 rounded-2xl bg-green-400 text-white">Back to Home</Link>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;