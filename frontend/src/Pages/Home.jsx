import React from 'react';
import StarsCanvas from '../components/StarBackground';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs';
import OurGallery from '../components/OurGallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import PreviousSponsors from '../components/PreviousSponsors';
import Timeline from '../components/Timeline';
import Guidelines from '../components/Guidelines';
import ProblemStatements from '../components/ProblemStatements';
import Contact from '../components/Contact';
import Prize from '../components/Prize'
import "../index.css"
import GoToTop from '../components/GoToTop';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <StarsCanvas />
            <GoToTop />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <AboutUs />
                <ProblemStatements />
                <Prize />
                <PreviousSponsors />
                <Timeline />
                <Guidelines />
                <OurGallery />
                <FAQ />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
