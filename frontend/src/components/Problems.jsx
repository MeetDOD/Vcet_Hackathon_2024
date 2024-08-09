import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const data = [
    {
        id: 1,
        title: "Problem 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?",
    },
    {
        id: 2,
        title: "Problem 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?"
    },
    {
        id: 3,
        title: "Problem 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?"
    },
    {
        id: 4,
        title: "Problem 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?"
    },
    {
        id: 5,
        title: "Problem 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?"
    }
];

const Problems = () => {
    return (
        <div className="flex flex-col justify-center items-center text-white font-montserrat py-[72px]">
            <div className="container">
                <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Problem Statements</h2>
                <p className="text-white/70 text-lg md:text-xl tracking-tight text-center my-5">
                    Code the Cosmos, Code for Cosmos and Code by Cosmos
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 p-5 sm:px-7">
                {data.slice(0, 3).map(({ id, title, description }) => (
                    <Card key={id} id={id} title={title} description={description} />
                ))}
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-5 justify-center sm:px-7">
                {data.slice(3).map(({ id, title, description }) => (
                    <Card key={id} id={id} title={title} description={description} />
                ))}
            </div>
        </div>
    )
}

const Card = ({ id, title, description }) => {
    const offSetX = useMotionValue(-100);
    const offSetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offSetX}px ${offSetY}px, black, transparent)`;
    const borderTrack = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMouseMove = (e) => {
            const rect = borderTrack.current.getBoundingClientRect();
            offSetX.set(e.clientX - rect.x);
            offSetY.set(e.clientY - rect.y);
        };

        const cardElement = borderTrack.current;
        cardElement.addEventListener('mousemove', updateMouseMove);

        return () => {
            cardElement.removeEventListener('mousemove', updateMouseMove);
        }
    }, [offSetX, offSetY]);

    return (
        <motion.div
            className="border border-white/30 px-30 px-5 py-10 text-center rounded-2xl relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            ref={borderTrack}
        >
            <motion.div
                className="-m-px absolute inset-0 border-4 border-customOrange rounded-2xl"
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    opacity: isHovered ? 1 : 0,
                    boxShadow: isHovered ? '0 0 15px 5px rgba(255, 165, 0, 0.5)' : 'none',
                    transition: 'opacity 0.3s ease, box-shadow 0.3s ease'
                }}
            />
            <div className="inline-flex h-48 w-48 justify-center items-center rounded-lg">
                <img src={logo} />
            </div>
            <h1 className="font-bold mt-5">
                <span className="mr-2 text-xs rounded-full px-3 py-1 bg-customOrange text-gray-50 font-bold">
                    {id}
                </span>
                {title}
            </h1>
            <p className="my-3 text-white/80">{description}</p>
            <button className='mt-3 relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-sm lg:text-lg bg-gradient-to-b from-customOrange to-customPurpleDark text-white shadow-[0px_0px_12px_#8c45ff]'>
                <div className='absolute inset-0'>
                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                Read More
            </button>
        </motion.div>
    );
}

export default Problems;
