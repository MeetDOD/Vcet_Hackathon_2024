import React from 'react';
import vcet from "../assets/vcetLogo.png";

const Hero = () => {
    return (
        <div className='flex flex-col justify-center text-center items-center min-h-screen px-4'>
            <img src={vcet} alt='vcet' className='py-2 w-28 md:w-32 lg:w-36 xl:w-40' />
            <p className='font-semibold text-gray-50 text-2xl md:text-3xl lg:text-4xl py-2 font-sans'>
                Vidyavardhini's College of Engineering and Technology
            </p>
            <p className='py-2 text-gray-50 text-xl md:text-2xl lg:text-3xl font-sans'>
                presents
            </p>
            <p className='text-gray-50 py-2 text-4xl md:text-5xl lg:text-6xl font-semibold font-montserrat'>
                VCET HACKATHON
            </p>
            <div className='text-gray-50 text-3xl md:text-4xl lg:text-5xl font-bold py-2 font-montserrat'>
                Code The Cosmos
            </div>
            <button className='my-3 relative py-3 px-6 md:px-8 lg:px-10 rounded-lg font-medium text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-customBlue1 to-customPurpleDark text-white shadow-[0px_0px_12px_#8c45ff]'>
                <div className='absolute inset-0'>
                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                Register Now
            </button>
        </div>
    );
}

export default Hero;
