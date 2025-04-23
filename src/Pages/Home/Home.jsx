import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import LawerList from './LawerList/LawerList';
import CardSection from './CardSection/CardSection';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [datas, setData] = useState([]);
    const [loader, setLoader] = useState(true);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/lawer.json');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching lawyer data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    const handleLoadData = () => {
        setLoader(false)

    }
    const sender = { loader, handleLoadData, datas }

    if (loading) {
        return (

            <div className='flex justify-center items-center '>
                <span className="loading loading-bars loading-xl"></span>
            </div>


        )
    }



    else

        return (
            <div className=''>
                <Helmet>
                <title>Loawer || Home</title>
                </Helmet>
                <Banner></Banner>
                <div className='py-20'>
                    <LawerList sender={sender}></LawerList>
                </div>
                <CardSection></CardSection>



            </div>
        );
};

export default Home;