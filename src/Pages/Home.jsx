import React from 'react';
import StarsCanvas from '../components/StarBackground';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <StarsCanvas />
            <div className="relative z-10">
            </div>
        </div>
    );
};

export default Home;
