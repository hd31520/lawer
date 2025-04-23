import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo-footer.png"
import { Link, NavLink } from 'react-router';

const Footer = () => {
    const [socail, setsocail] = useState([]);
    useEffect(() => {
        fetch('/socail.json')
            .then(res => res.json())
            .then(data => setsocail(data))
    }, [])
    const navlinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/booking">My-Bookings</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>



    </>
    return (
        <div className='flex flex-col justify-center items-center py-20 mt-20 gap-6 bg-black'>
            <div className='text-white text-3xl flex gap-1 font-bold justify-center items-center'>
                <img src={logo} alt="" /> <h1>Law.BD</h1>
            </div>
            <ul className='flex justify-center items-center gap-3.5 text-white decoration-0'>

                {navlinks}
            </ul>
            <div className='flex gap-4'>
                {
                    socail.map(soc => <Link to={soc.id_url}>
                        <img className='h-8' src={soc.logo_url} alt="" />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Footer;