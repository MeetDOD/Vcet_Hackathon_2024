import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedParagraph = ({ text }) => {
    const paragraphRef = useRef(null);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (!paragraph) return;

        let clutter = "";
        paragraph.textContent.split("").forEach((char) => {
            clutter += `<span style="opacity: 0;">${char}</span>`;
        });
        paragraph.innerHTML = clutter;

        gsap.to(paragraph.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: paragraph,
                start: "top 80%", 
                scrub: false,
            },
            opacity: 1,
            stagger: 0.014,
            duration: 1,
            color: "#fff",
            ease: "power1.inOut",
        });
    }, [text]);

    return (
        <p ref={paragraphRef} style={{ color: "#dada" }}>
            {text}
        </p>
    );
};

export default AnimatedParagraph;
