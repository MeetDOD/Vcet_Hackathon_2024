import React, { useState } from 'react';
import card1 from "../assets/problemStatements/card-1.png";
import card2 from "../assets/problemStatements/card-2.png";
import card3 from "../assets/problemStatements/card-3.png";
import card4 from "../assets/problemStatements/card-6.png";
import card5 from "../assets/problemStatements/card-5.png";
import { SiNeptune, SiPlanetscale } from "react-icons/si";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiJupiter, GiRingedPlanet } from "react-icons/gi";
import Heading from './Heading';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IoClose } from "react-icons/io5";

const closeIcon = (
    <div className='text-customOrange'>
        <IoClose size={30} />
    </div>
);

const problemData = [
    {
        id: "1",
        title: "Security",
        description: " Innovate and develop solutions to enhance cybersecurity and protect sensitive data. Tackle challenges in encryption, secure communications, and threat detection to create a safer digital world.",
        backgroundImage: card1,
        iconUrl: <SiPlanetscale size={24} />,
        imageUrl: "https://d.newsweek.com/en/full/2308742/exoplanet.jpg?w=1200&f=d554ef6d8e154a66da9984230561f9f7",
    },
    {
        id: "2",
        title: "Social",
        description: "Develop technologies that improve community engagement and address social issues. This domain focuses on creating apps or platforms that promote inclusivity, mental health, and public welfare.",
        backgroundImage: card2,
        iconUrl: <SiNeptune size={24} />,
        imageUrl: "https://bigthink.com/wp-content/uploads/2021/11/https___blogs-images.forbes.com_startswithabang_files_2019_03_NASA-Dana-Berry-e1711556875766.jpg",
    },
    {
        id: "3",
        title: "Game Development",
        description: "Dive into the world of interactive entertainment by designing engaging and immersive games. Showcase your creativity and technical prowess through innovative game mechanics and compelling storytelling.",
        backgroundImage: card3,
        iconUrl: <FaEarthAmericas size={24} />,
        imageUrl: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/solar-system.jpg",
    },
    {
        id: "4",
        title: "Education",
        description: "Transform the way we learn by creating educational tools and platforms. Projects in this domain aim to make learning more accessible, interactive, and engaging for everyone.",
        backgroundImage: card4,
        iconUrl: <GiJupiter size={24} />,
        imageUrl: "https://media.istockphoto.com/id/865884812/photo/science-fiction-space-wallpaper-incredibly-beautiful-planets-galaxies-dark-and-cold-beauty-of.jpg?s=612x612&w=0&k=20&c=JI6MmXNSCDKpnbLJNjbHX-QE1okdAJG2kY_W8UWmDIE=",
    },
    {
        id: "5",
        title: "Finance",
        description: "Bring your ideas to life by developing solutions that simplify financial transactions, enhance personal finance management, or introduce new ways to invest. This domain focuses on developing tools and applications that make financial services more accessible, efficient, and user-friendly.",
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
    const [open, setOpen] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState(null);

    const onOpenModal = (problem) => {
        setSelectedProblem(problem);
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
        setSelectedProblem(null);
    };

    return (
        <div id='domains' className='overflow-hidden text-white font-montserrat'>
            <br /> <br /> <br /><br />
            <Heading
                title1="Our"
                title2="Domains"
                subtitle="Explore the challenges across various domains"
                sectionId="domains"
            />
            <div className='px-10 sm:px-32 relative sectionMargin'>
                <div className='flex flex-wrap gap-10 justify-center items-center'>
                    {problemData.map((item) => (
                        <div key={item.id}
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                            style={{
                                backgroundImage: `url(${item.backgroundImage})`
                            }}
                        >
                            <div className='relative z-10 flex flex-col min-h-[22rem] p-[2.4rem]'>
                                <h5 className='text-2xl font-bold mb-5 countDown'>{item.title}</h5>
                                <p className='mb-6 font-semibold text-sm text-left'>
                                    {item.description.split(' ').slice(0, 20).join(' ')}...
                                </p>
                                <div className='flex items-center mt-auto'>
                                    <div className='text-white bg-customPurpleDark p-2.5 rounded-lg shadow-[0px_0.5px_5px_#8c45ff]'>
                                        {item.iconUrl}
                                    </div>
                                    <button
                                        className='my-3 ml-auto relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-sm md:text-lg lg:text-sm bg-gradient-to-b from-customOrange to-customOrange/90 text-white shadow-[0px_0px_12px_#8c45ff] z-20'
                                        onClick={() => onOpenModal(item)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                            <div className='absolute inset-0 opacity-15 '>
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

            {selectedProblem && (
                <Modal open={open} onClose={onCloseModal} center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                    closeIcon={closeIcon} styles={{
                        modal: { borderRadius: '12px', padding: '30px', backgroundColor: '#212529' }
                    }}>
                    <div className='font-montserrat text-white'>
                        <h2 className='text-3xl font-bold mb-4 countDown'>{selectedProblem.title}</h2>
                        <hr />
                        <p className='mt-4 text-lg'>{selectedProblem.description}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default ProblemStatements;
