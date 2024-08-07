import React from 'react';
import StarsCanvas from '../components/StarBackground';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <StarsCanvas />
            <div className="relative z-10">
                <Navbar />
            </div>
        </div>
    );
};

export default Home;
