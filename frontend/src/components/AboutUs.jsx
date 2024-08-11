import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image1 from '../assets/moon-inverse1.png';
import ImageRotate from '../assets/moon-sign-3-450x450.png';
import ImageScale from '../assets/moon-sign-1-1.png';

const AboutUs = () => {
    const rotateRef = useRef(null);
    const scaleRef = useRef(null);

    useEffect(() => {
        const rotateElement = rotateRef.current;
        const scaleElement = scaleRef.current;

        gsap.to(rotateElement, {
            duration: 10,
            rotate: 360,
            repeat: -1,
            ease: 'linear'
        });

        gsap.to(scaleElement, {
            duration: 10,
            scale: 1.2,
            yoyo: true,
            repeat: -1,
            ease: 'linear'
        });
    }, []);

    return (
        <div className="min-h-screen text-white">
            <div className="flex justify-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-medium mt-5 text-white">
                    About Us
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-10">
                <div className="relative lg:ml-[230px] mb-10 lg:mb-0">
                    <img
                        ref={scaleRef}
                        src={ImageScale}
                        alt="Moon Sign"
                        className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] absolute top-0 left-0"
                    />
                    <img
                        ref={rotateRef}
                        src={ImageRotate}
                        alt="Moon Sign"
                        className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] absolute top-0 left-0 mt-5 ml-5"
                    />
                    <img
                        src={Image1}
                        alt="Moon Inverse"
                        className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
                    />
                </div>
                <div className="px-2 sm:px-3 w-full lg:w-[700px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-6 lg:mx-24 font-exo text-justify text-[#999898]">
                    <p>
                        VCET Hackathon is a 30-hour hackathon organized by the Department of Information Technology of
                        <span className="text-customOrange">
                            "Vidyavardhini&apos;s College of Engineering and Technology".
                        </span>
                        By organizing this hackathon, we aim to promote a strong programming and product-building culture among students that will help them develop problem-solving, critical thinking, and software development skills. It is an opportunity to tackle challenging problems that affect us all and find solutions. Will you get time to eat? Can you ditch your sleep? Do you have a passion for building? Find out in this 30-hour long thrilling experience!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
