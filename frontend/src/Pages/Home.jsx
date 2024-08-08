import React from 'react';
import StarsCanvas from '../components/StarBackground';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <StarsCanvas />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <AboutUs />
                <Gallery />
            </div>
        </div>
    );
};

export default Home;
