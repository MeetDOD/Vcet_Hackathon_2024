import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s1 from "../assets/sponsors/s1.png";
import s2 from "../assets/sponsors/s2.png";
import s3 from "../assets/sponsors/s3.png";
import s4 from "../assets/sponsors/s4.png";
import s5 from "../assets/sponsors/s5.png";
import s6 from "../assets/sponsors/s6.png";
import s7 from "../assets/sponsors/s7.jpg";
import s8 from "../assets/sponsors/s8.png";
import Heading from './Heading';

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
    { src: s1, title: "Sponsor 1" },
    { src: s2, title: "Sponsor 2" },
    { src: s3, title: "Sponsor 3" },
    { src: s4, title: "Sponsor 4" },
    { src: s5, title: "Sponsor 5" },
    { src: s6, title: "Sponsor 6" },
    { src: s7, title: "Sponsor 7" },
    { src: s8, title: "Sponsor 8" },
];

const Sponsors = () => {
    React.useEffect(() => {
        gsap.fromTo(".sponsor-item",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".sponsor-item",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <div className=" py-[72px] ">
            <div id='sponsors' className="container mx-auto text-white font-montserrat">
                <Heading
                    title1="Our"
                    title2="Sponsors"
                    subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                    sectionId="Sponsors"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 px-5">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            className="shadow-2xl w-full sponsor-item flex flex-col items-center bg-gray-50 p-3 rounded-xl h-32 justify-center"
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10,
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                },
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.title}
                                    className="w-52 transition-transform duration-300 ease-in-out transform"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
         </div>
    );
};

export default Sponsors;
