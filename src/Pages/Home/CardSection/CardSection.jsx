import React, { useEffect, useState } from 'react';


import CountUp from 'react-countup';




const CardSection = () => {
    const [cards, setCard] = useState([])

    useEffect(() => {
        fetch('/card.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>

            {
                cards.map(card => <div className='flex flex-col gap-2 justify-center items-center p-20 bg-gray-300 rounded-2xl'>
                    <img src={card.image} alt="" />
                    <h1 className='text-3xl font-bold'>
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={card.number}
                            duration={5}
                            useEasing={true}
                            separator=","
                        />+
                    </h1>
                    <p>
                        {card.name}
                    </p>
                </div>)
            }


        </div>
    );
};

export default CardSection;