import React from 'react';
import StarsCanvas from '../components/StarBackground';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import PreviousSponsors from '../components/PreviousSponsors';
import Timeline from '../components/Timeline';
import Prize from '../components/Prize';
import Guidelines from '../components/Guidelines';
import ProblemStatements from '../components/ProblemStatements';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <StarsCanvas />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <AboutUs />
                <ProblemStatements />
                {/* <Prize /> */}
                {/* <Sponsors /> */}
                <PreviousSponsors />
                <Timeline />
                <Guidelines />
                <Gallery />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
