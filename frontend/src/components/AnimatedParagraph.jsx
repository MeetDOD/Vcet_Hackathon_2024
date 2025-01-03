import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(GSAPScrollTrigger);

const AnimatedParagraph = ({ text }) => {
    const paragraphRef = useRef(null);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (!paragraph) return;

        let clutter = "";
        paragraph.textContent.split("").forEach((char) => {
            clutter += `<span>${char}</span>`;
        });
        paragraph.innerHTML = clutter;

        gsap.to(paragraph.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: paragraph,
                start: "top 95%",
                end: "bottom 60%",
                scrub: 0.5,
                // markers: true,
            },
            stagger: 0.02,
            color: "#fff",
        });
    }, [text]);

    return (
        <p ref={paragraphRef} style={{ color: "#dada" }}>
            {text}
        </p>
    );
};

export default AnimatedParagraph;
