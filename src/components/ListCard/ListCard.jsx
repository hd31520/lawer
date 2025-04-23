import React from 'react';
import { Link } from 'react-router';

const ListCard = ({data}) => {

    const toadys = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[toadys.getDay()];

    
    const isAvailableToday = data.availability?.includes(today);

    
    return (
        <div className=' border-2 border-gray-400 grid grid-cols-2 p-5 rounded-2xl'>
            <div className='flex  items-center'>
                <img className='h-40 w-40 rounded-2xl ' src={data.image} alt="" />
            </div>
            <div className='flex flex-col gap-1.5'>

                <div className='flex gap-2'>
                    {
                        isAvailableToday ? <button className='bg-[#09982F1A] text-sm px-2 rounded-2xl text-green-500 py-0.5'>Available</button> :
                        
                        <button className='bg-[#e699819d] text-sm px-2 rounded-2xl text-red-500 py-0.5'>Not Available</button>
                    }


                    <button className='bg-[#176AE51A] text-sm px-2 rounded-2xl text-blue-500 py-0.5'>{data.experience}+ Years Experience</button>

                </div>
                <h1 className='text-2xl'>{data.name}</h1>
                <h4 className=' font-light'>{data.specialization}</h4>
                <h5>℗ License No:{data.licenseNo}</h5>
                <Link to={`/lawer/${data.licenseNo}`} className="px-3 rounded-2xl text-center shadow-accent text-blue-300 py-1 border-2 border-blue-300 font-semibold">View Info</Link>

            </div>
        </div>
    );
};

export default ListCard;