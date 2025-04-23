import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import WithLawer from './WithLawer/WithLawer';
import WithoutLawer from './WithoutLawer/WithoutLawer';

const LawerDetails = () => {
    const [lawer, setLawer] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

  

    useEffect(() => {
        fetch('/lawer.json')
            .then(res => res.json())
            .then(data => {
                const foundLawer = data.find(item => item.licenseNo === id);
                setLawer(foundLawer);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div>
            {lawer ? (
                <WithLawer lawer={lawer}></WithLawer>
            ) : (
                <WithoutLawer id={id}></WithoutLawer>
            )}
        </div>
    );
};

export default LawerDetails;
