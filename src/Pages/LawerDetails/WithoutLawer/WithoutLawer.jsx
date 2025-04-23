import React from 'react';
import { Link } from 'react-router';

const WithoutLawer = ({id}) => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-20 gap-2.5'>
            <h2 className='text-3xl'>YOu Have Not Booked ANy Appoinment Yet</h2>
            <p>No Lawer Found With This LisenceNo.</p>
            <p>{id}</p>
            <Link to="/" className="px-3 py-1.5 rounded-2xl bg-green-400 text-white">Book An Appoinment</Link>
        </div>
    );
};

export default WithoutLawer;