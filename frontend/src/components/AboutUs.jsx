import Heading from './Heading';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SiNeptune, SiPlanetscale } from "react-icons/si";
import { GiJupiter, GiRingedPlanet } from "react-icons/gi";
import AnimatedParagraph from './AnimatedParagraph';

const about = [
    {
        title: "Problem Solving Skills",
        icon: <SiPlanetscale size={30} />
    },
    {
        title: "Critical Thinking Skills",
        icon: <GiJupiter size={30} />
    },
    {
        title: "Software Development Skills",
        icon: <SiNeptune size={30} />
    },
    {
        title: "Time Management Skills",
        icon: <GiRingedPlanet size={30} />
    }
];

const ServiceCard = ({ title, icon }) => (
    <Tilt className='xs:w-[200px] w-full'>
        <motion.div
            className='w-full p-[1px] rounded-[15px] shadow-xl bg-gradient-to-r from-customOrange via-customPurple to-customPurpleDark'
        >
            <div
                className='bg-gray-900 rounded-[15px] px-4 min-h-[240px] flex justify-evenly items-center flex-col'
            >
                <div className='text-white bg-customPurpleDark p-2 rounded-lg shadow-[0px_0.5px_5px_#8c45ff]'>
                    {icon}
                </div>

                <h3 className='text-white text-base font-bold text-center mt-4'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const AboutUs = () => {
    const text = `VCET Hackathon is a 30-hour event organized by the Department of Information Technology at "Vidyavardhini's College of Engineering and Technology". We aim to foster a strong programming culture and build critical problem-solving skills among students. Can you take on the challenge? It is an opportunity to take on challenging problems that revolve around us all the time and crack them down. Will you get time to eat ? Can you ditch your sleep ? Do you have passion to build? Find out in this 30 hours long thrilling experience.`
    return (
        <div className='overflow-hidden relative text-white font-montserrat'>
            <Heading
                title1="About"
                title2="Us"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="aboutUs"
            />
            <div className='text relative z-10 px-10 sm:px-32 sectionMargin'>
                <p className='font-semibold text-white text-lg sm:max-w-7xl mx-auto leading-relaxed text-center tracking-tight inl'>
                    <AnimatedParagraph text={text} />
                </p>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {about.map((about, index) => (
                        <ServiceCard key={about.title} {...about} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
