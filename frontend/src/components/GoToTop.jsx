import React, { useState, useEffect } from "react";
import "../styles/GoToTop.css";
import Lottie from 'react-lottie';
import rocket from "../assets/lottie/gototop.json";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rocket,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-customOrange hover:bg-customOrange/90 text-white font-bold p-0.5 rounded-full shadow-md transition-all duration-300 animate-movebtn hover-stop"
                >
                    <Lottie
                        options={defaultOptions}
                        height={60}
                        width={60}
                    />
                </button>
            )}
        </div>
    );
};

export default GoToTop;
