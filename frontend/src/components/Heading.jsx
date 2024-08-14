import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'react-lottie';
import rocket from "../assets/lottie/rocket1.json";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ title1, title2, subtitle, sectionId }) => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${sectionId}`,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none reverse none',
                markers: false
            }
        });

        tl.fromTo('.underline',
            { width: '0%', opacity: 0 },
            { width: '100%', opacity: 1, duration: 1, ease: "power1.inOut" }
        )
    }, [sectionId]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rocket,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div id={sectionId} className="flex flex-col justify-center items-center py-[72px] z-10 heading-section">
            <h2 className="font-semibold  text-3xl md:text-4xl lg:text-5xl text-center tracking-tighter relative inline-block">
                {title1}
                <span className='rocket-icon inline-block align-middle pb-3 h-14 md:h-20'>
                    <Lottie options={defaultOptions} />
                </span>
                <span className='text-customOrange'>{title2}</span>
                <div className='underline block h-[2.5px] bg-customOrange absolute bottom-0 left-0 w-full shadow-[0px_0.5px_5px_#F5AF64]'></div>
            </h2>
            {subtitle && (
                <p className="text-white/80 text-lg md:text-xl tracking-tight text-center mt-5">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default Heading;
