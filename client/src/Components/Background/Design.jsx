import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Design() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="particle-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 80,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#08b2aa",
                        },
                        links: {
                            color: "#08b2aa",
                            distance: 120,
                            enable: true,
                            opacity: 0.6,
                            width: 1,
                        },
                        move: {
                            direction: "outside",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1200,
                            },
                            value: 25,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default Design;
