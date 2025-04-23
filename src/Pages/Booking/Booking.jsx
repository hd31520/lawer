import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Booking = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filteredLawyers, setFilteredLawyers] = useState([]);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    useEffect(() => {
        fetch('/lawer.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        const storedData = localStorage.getItem('booking');
        const lawyersArray = storedData ? JSON.parse(storedData) : [];
        const filtered = datas.filter(lawyer => lawyersArray.includes(lawyer.licenseNo));
        setFilteredLawyers(filtered);
    }, [datas]);

    const handleCancelAppointment = (licenseNo) => {
        toast.warning('Appoment Cancel Sucessfully!');

        const storedData = localStorage.getItem('booking');
        let lawyersArray = storedData ? JSON.parse(storedData) : [];


        lawyersArray = lawyersArray.filter(id => id !== licenseNo);


        localStorage.setItem('booking', JSON.stringify(lawyersArray));

        setFilteredLawyers(prev => prev.filter(lawyer => lawyer.licenseNo !== licenseNo));
    };



    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Loawer || Booking</title>

            </Helmet>
            <ToastContainer />
            {
                filteredLawyers.length > 0 ? (
                    <div>
                        <div className='border-2 border-gray-300 p-3 md:p-10 rounded-2xl'>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    data={filteredLawyers}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                        {filteredLawyers.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='py-20 text-center flex flex-col gap-2'>
                            <h1 className='text-3xl font-bold'>My Today Appointments</h1>
                            <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                        </div>
                        {filteredLawyers.map((law, idx) => (
                            <div key={idx} className='p-10 border-2 my-4 border-gray-300 rounded-2xl'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='text-xl font-bold'>{law.name}</h3>
                                        <p>{law.specialization}</p>
                                    </div>
                                    <p>Appointment Fee : {law.fee} Taka</p>
                                </div>
                                <button
                                    onClick={() => handleCancelAppointment(law.licenseNo)}
                                    className="btn btn-outline btn-error w-full rounded-4xl my-5"
                                >
                                    Cancel Appointment
                                </button>

                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center bg-gray-100 rounded-2xl p-20 gap-2.5'>
                        <h2 className='text-3xl'>No Booking Found !</h2>
                        <p>No Booking Found Here</p>

                        <Link to="/" className="px-3 py-1.5 rounded-2xl bg-green-400 text-white">Back to Lawer List</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Booking;