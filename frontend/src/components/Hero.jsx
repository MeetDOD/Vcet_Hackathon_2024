import React from 'react';
import vcet from "../assets/vcetLogo.png";
import { Button } from "./Button";
import { motion } from "framer-motion";
import saturn from "../assets/lottie/saturn.json"
import Lottie from 'react-lottie';

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: saturn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div id='#home' className='mb-20 overflow-hidden relative flex flex-col justify-center text-center min-h-screen
        [mask-image:linear-gradient(to_top,transparent,black_15%,black_100%,transparent)]'
        >
            <div className='absolute inset-0 
                bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.7)_50%,transparent)]'>
            </div>

            <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-customPurpleDark rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[radial-gradient(50%_50%_at_1%_5%,white,rgb(184,148,255)_10%,rgb(24,0,66))]'>
            </div>

            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%",
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
                className='absolute opacity-30 border h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute h-3 w-3 bg-white rounded-full top-1/2 left-0  -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-4 w-4 bg-white rounded-full top-0 left-1/2  -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-7 w-7 border border-white rounded-full top-1/2 left-full  -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-3 w-3 bg-white rounded-full'></div>
                </div>
            </motion.div>

            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%",
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 90,
                    ease: "linear"
                }}
                className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'>
            </motion.div>

            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%",
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
                className='opacity-20 absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute h-5 w-5 bg-white rounded-full top-1/2 left-0  -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-8 w-8 border border-white rounded-full top-1/2 left-full  -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-4 w-4 bg-white rounded-full'></div>
                </div>
                <div className='absolute h-4 w-4 bg-white rounded-full top-full left-1/2  -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-6 w-6 border border-white rounded-full  -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-3 w-3 bg-white rounded-full'></div>
                </div>
            </motion.div>

            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%",
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 90,
                    ease: "linear"
                }}
                className='absolute h-[644px] w-[644px] md:h-[1180px] md:w-[1180px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'>
            </motion.div>

            <div className='relative mt-12 flex flex-col items-center font-montserrat'>
                <img src={vcet} alt='vcet' className='py-2 w-24 md:w-28 lg:w-32' />
                <p className='font-semibold text-white text-xl md:text-2xl lg:text-3xl py-2 tracking-tighter'>
                    Vidyavardhini's College of Engineering and Technology
                </p>
                <p className='py-2 text-white text-xl lg:text-2xl font-semibold tracking-tighter'>
                    presents
                </p>
                <p className='text-white py-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight'>
                    VCET HACKATHON
                </p>
                <div className='tracking-wide text-transparent text-3xl md:text-5xl lg:text-6xl font-bold py-3 bg-clip-text bg-gradient-to-r from-gray-100 via-violet-500 to-customOrange animate-gradient-x'>
                    Code The Cosm
                    <div className='-mr-2 -ml-2 inline-block w-14 md:w-20 lg:w-24 h-auto align-middle'>
                        <Lottie options={defaultOptions} />
                    </div>
                    s
                </div>
                <Button />
            </div>
        </div>
    );
}

export default Hero;
