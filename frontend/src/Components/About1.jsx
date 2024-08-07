import { useState, useEffect } from "react";
import headerImg from "../Components/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About1 = () => {


    return (
        <section className="banner bg-cover bg-center bg-no-repeat" id="home">
            <div className="container mx-auto px-4 py-32 md:py-64 bg-banner-bg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 xl:w-7/12">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline font-bold tracking-wide py-2 px-4 mb-4 inline-block bg-gradient-to-r from-pink-500/50 to-blue-500/50 border border-white/50 text-lg">
                                        About Us
                                    </span>
                                    {/* <h1 className="text-5xl md:text-6xl font-bold tracking-wide leading-tight mb-5">
                                        Hi! I'm Judy
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                                        >
                                            <span className="wrap border-r border-gray-600">
                                                {text}
                                            </span>
                                        </span>
                                    </h1> */}
                                    <p className="text-gray-400 text-lg tracking-wide leading-relaxed w-11/12">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-5/12">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img
                                        src={headerImg}
                                        alt="Header Img"
                                        className="animate-updown"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </section>
    );
};
