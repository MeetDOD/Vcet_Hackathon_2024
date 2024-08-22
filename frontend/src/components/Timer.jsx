import React, { useState, useEffect } from 'react'
import Heading from './Heading'

const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-09-22") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className='text-white font-montserrat'>
            <Heading
                title1="Time is "
                title2="Ticking"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="timer"
            />
            <div className='sectionMargin px-10 sm:px-32 flex flex-col gap-6 lg:grid lg:grid-cols-4' style={{ gridAutoRows: "96px" }}>
                <div className='row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                    <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                        <div className='flex justify-center flex-col items-center text-center py-5 lg:py-8'>
                            <p className='text-6xl text-center text-customOrange font-semibold tracking-wider countDown'>
                                {timeLeft.days}
                            </p>

                            <p className='text-2xl text-center text-customOrange font-semibold uppercase countDown mt-2'>
                                Days
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                    <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                        <div className='flex justify-center flex-col items-center text-center py-5 lg:py-8'>
                            <p className='text-6xl text-center text-customOrange font-semibold countDown'>
                                {timeLeft.hours}
                            </p>
                            <p className='text-2xl text-center text-customOrange font-semibold uppercase countDown mt-2'>
                                Hours
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                    <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                        <div className='flex justify-center flex-col items-center text-center py-5 lg:py-8'>
                            <p className='text-6xl text-center text-customOrange font-semibold countDown '>
                                {timeLeft.minutes}
                            </p>
                            <p className='text-2xl text-center text-customOrange font-semibold uppercase countDown mt-2'>
                                Minutes
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                    <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                        <div className='flex justify-center flex-col items-center text-center py-5 lg:py-8'>
                            <p className='text-6xl text-center text-customOrange font-semibold countDown '>
                                {timeLeft.seconds}
                            </p>
                            <p className='text-2xl text-center text-customOrange font-semibold uppercase countDown mt-2'>
                                Seconds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer
