import React from 'react';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WithLawer = ({ lawer }) => {
    const navigate = useNavigate();



    const toadys = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[toadys.getDay()];


    const isAvailableToday = lawer.availability?.includes(today);



    function addStorage(newItem) {
        

        let items = JSON.parse(localStorage.getItem("booking")) || [];


        if (!items.includes(newItem.licenseNo)) {
            toast(`Successfully  Booked! ${newItem.name}`)

            items.push(newItem.licenseNo);
            localStorage.setItem("booking", JSON.stringify(items));

            setTimeout(() => navigate(`/booking`), 1000);


        }
        else {
            toast.warning('You already booked this lawyer!');
        }
    }




    return (
        <div>
            <div className='p-16 my-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#0F0F0F0D]'>
                <h3 className="text-2xl font-semibold">Lawyer’s Profile Details</h3>
                <p>{lawer.bio}</p>
            </div>

            <div className='border-2 p-16 border-gray-300 rounded-2xl flex flex-col items-center lg:flex-row'>
                <div className='lg:w-2/5'>
                    <img className='h-80 w-80 rounded-2xl' src={lawer.image} alt={lawer.name} />
                </div>
                <div className='lg:3/5 py-5 flex flex-col gap-5 justify-center'>
                    <button className='bg-[#176AE51A] text-sm px-2 rounded-2xl text-blue-500 py-0.5'>
                        {lawer.experience}+ Years Experience
                    </button>
                    <h3 className="text-2xl font-semibold">{lawer.name}</h3>
                    <div className='flex w-full gap-10 justify-between'>
                        <p className='font-light'>{lawer.specialization}</p>
                        <p className='font-light'>®License No: {lawer.licenseNo}</p>
                    </div>

                    <div className='flex gap-3'>
                        <p>Availability</p>
                        <div className='flex gap-3'>
                            {lawer.availability?.map((law, index) => (
                                <button key={index} className='bg-[#e2e51756] text-sm px-2 rounded-2xl text-yellow-500 py-0.5'>
                                    {law}
                                </button>
                            ))}
                        </div>
                    </div>



                    <div>
                        <p>
                            Consultation Fee: <span className='px-5 text-green-400'>Taka {lawer.fee}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='border-2 border-gray-300 rounded-2xl my-10'>
                <h2 className='text-xl text-center p-10 font-bold'>Book an Appointment</h2>
                <hr className='border-2 border-gray-300 border-dashed' />
                <div className='py-5 p-10 items-center gap-2'>
                    <div className=' flex justify-between'>
                        <p className='text-lg'>Availability</p>
                        <button className={isAvailableToday ? 'text-green-500 bg-green-100 px-2 py-1 rounded-2xl' : 'text-red-500 bg-red-100 px-2 py-1 rounded-2xl'}>
                            {isAvailableToday ? 'Lawyer  Available Today' : 'Lawyer Not  Available Today'}
                        </button>
                    </div>
                    <div className="py-10">
                        <hr className='border-2 border-gray-200 ' />
                    </div>
                    <div>
                        <p className='text-yellow-500 bg-yellow-100 px-3 py-2 text-sm text-center rounded-2xl'>
                            <span className="inline-flex items-center justify-center border border-red-300 text-red-300 w-6 h-6 text-center font-bold rounded-sm">!</span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </p>
                    </div>
                    <div className='py-10'>
                        <button onClick={() => addStorage(lawer)} className='w-full rounded-3xl text-white bg-green-400 btn'>Book Appointment Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WithLawer;