import React from 'react'
import card1 from "../assets/problemStatements/card-1.png"
import card2 from "../assets/problemStatements/card-2.png"
import card3 from "../assets/problemStatements/card-3.png"
import card4 from "../assets/problemStatements/card-6.png"
import card5 from "../assets/problemStatements/card-5.png"
import { SiNeptune, SiPlanetscale } from "react-icons/si";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiJupiter, GiRingedPlanet } from "react-icons/gi";
import "../global.css"
import Heading from './Heading'

const problemData = [
    {
        id: "1",
        title: "Telehealth Connect Platform",
        description: "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology.",
        backgroundImage: card1,
        iconUrl: <SiPlanetscale size={24} />,
        imageUrl: "https://d.newsweek.com/en/full/2308742/exoplanet.jpg?w=1200&f=d554ef6d8e154a66da9984230561f9f7",
    },
    {
        id: "2",
        title: "Telehealth Connect Platform",
        description: "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology.",
        backgroundImage: card2,
        iconUrl: <SiNeptune size={24} />,
        imageUrl: "https://bigthink.com/wp-content/uploads/2021/11/https___blogs-images.forbes.com_startswithabang_files_2019_03_NASA-Dana-Berry-e1711556875766.jpg",
    },
    {
        id: "3",
        title: "Telehealth Connect Platform",
        description: "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology.",
        backgroundImage: card3,
        iconUrl: <FaEarthAmericas size={24} />,
        imageUrl: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/solar-system.jpg",
    },
    {
        id: "4",
        title: "Telehealth Connect Platform",
        description: "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology.",
        backgroundImage: card4,
        iconUrl: <GiJupiter size={24} />,
        imageUrl: "https://media.istockphoto.com/id/865884812/photo/science-fiction-space-wallpaper-incredibly-beautiful-planets-galaxies-dark-and-cold-beauty-of.jpg?s=612x612&w=0&k=20&c=JI6MmXNSCDKpnbLJNjbHX-QE1okdAJG2kY_W8UWmDIE=",
    },
    {
        id: "5",
        title: "Telehealth Connect Platform",
        description: "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology.",
        backgroundImage: card5,
        iconUrl: <GiRingedPlanet size={24} />,
        imageUrl: "https://images.theconversation.com/files/511620/original/file-20230222-16-c8nmnb.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    }
];

const ClipPath = () => {
    return (
        <svg className="block" width={0} height={0}>
            <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
            </clipPath>
        </svg>
    );
};

const ProblemStatements = () => {
    return (
        <div className='overflow-hidden text-white font-montserrat'>
            <Heading
                title1="Problem"
                title2="Statements"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="problmes"
            />
            <div className='px-10 sm:px-32 relative'>
                <div className='flex flex-wrap gap-10 mb-10 justify-center items-center'>
                    {problemData.map((item) => (
                        <div key={item.id}
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                            style={{
                                backgroundImage: `url(${item.backgroundImage})`
                            }}
                        >
                            <div className='z-2 relative flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                <h5 className='text-xl font-bold mb-5'>{item.title}</h5>
                                <p className='mb-6 font-semibold text-sm'>{item.description}</p>
                                <div className='flex items-center mt-auto'>
                                    <div className='text-white bg-customPurpleDark p-2.5 rounded-lg shadow-[0px_0.5px_5px_#8c45ff]'>
                                        {item.iconUrl}
                                    </div>
                                    <button className='my-3 ml-auto relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-sm md:text-lg lg:text-sm bg-gradient-to-b from-customOrange to-customPurpleDark text-white shadow-[0px_0px_12px_#8c45ff]'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                            <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                                <div className='absolute inset-0.5' style={{ clipPath: "url(#benefits)" }}>
                                    {item.imageUrl && (
                                        <img src={item.imageUrl} width={300} height={362} alt={item.title} className='w-full h-full object-cover' />
                                    )}
                                </div>
                            </div>
                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProblemStatements
