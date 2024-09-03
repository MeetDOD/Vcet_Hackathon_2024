import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s1 from "../assets/currentSponsors/contentstack.jpg";
import s2 from "../assets/currentSponsors/edba.png";
import Heading from './Heading';

gsap.registerPlugin(ScrollTrigger);

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
        <div>
            <div id='sponsors' className="container mx-auto text-white font-montserrat">
                <br />
                <br />
                <br />
                <br />
                <Heading
                    title1="New"
                    title2="Sponsors"
                    subtitle="Meet the partners making this event possible"
                    sectionId="Sponsors"
                />

                <div className='flex my-5 mt-10  justify-center font-semibold  text-xl md:text-2xl lg:text-3xl text-center tracking-tighter relative countDown'>
                    Title Sponsor
                </div>
                <div className="flex justify-center my-5 pb-10 items-center">
                    <motion.div
                        className="shadow-2xl sponsor-item flex flex-col items-center bg-gray-50 rounded-xl h-32 justify-center"
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
                        <a href="https://www.contentstack.com" target="_blank" className="relative">
                            <img
                                src={s1}
                                alt="Title Sponsor"
                                className="w-80 p-5 px-10 transition-transform duration-300 ease-in-out transform"
                            />
                        </a>
                    </motion.div>
                </div>

                <div className='flex my-5 justify-center font-semibold  text-xl md:text-2xl lg:text-3xl text-center tracking-tighter relative countDown'>
                    Training Partner
                </div>
                <div className="flex justify-center my-5 pb-10 items-center">
                    <motion.div
                        className="shadow-2xl sponsor-item flex flex-col items-center bg-gray-50 rounded-xl h-32 justify-center"
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
                        <a href="https://www.edba-academy.com" target='_blank' className="relative">
                            <img
                                src={s2}
                                alt="Title Sponsor"
                                className="w-80 p-5 px-10 transition-transform duration-300 ease-in-out transform"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
