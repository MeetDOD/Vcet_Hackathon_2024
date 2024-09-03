import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1 from "../assets/sponsors/s1.png";
import s2 from "../assets/sponsors/s2.png";
import s3 from "../assets/sponsors/s3.png";
import s4 from "../assets/sponsors/s4.png";
import s5 from "../assets/sponsors/s5.png";
import s6 from "../assets/sponsors/s6.png";
import s7 from "../assets/sponsors/s7.png";
import s8 from "../assets/sponsors/s8.png";
import s9 from "../assets/sponsors/s9.png";
import Heading from './Heading';

const sponsors = [
    { src: s1, title: "Sponsor 1" },
    { src: s2, title: "Sponsor 2" },
    { src: s3, title: "Sponsor 3" },
    { src: s4, title: "Sponsor 4" },
    { src: s5, title: "Sponsor 5" },
    { src: s6, title: "Sponsor 6" },
    { src: s7, title: "Sponsor 7" },
    { src: s8, title: "Sponsor 8" },
    { src: s9, title: "Sponsor 9" },
];

const PreviousSponsors = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative">
            <div id='sponsors' className="flex flex-col justify-center items-center text-white font-montserrat">
                <br /><br /><br /><br /><br /><br /><br />
                <Heading
                    title1="Previous"
                    title2="Sponsors"
                    subtitle="Acknowledging the supporters behind the scenes"
                    sectionId="previoussponsors"
                />

                <div className="relative w-full sectionMargin">
                    <Slider {...settings} className="relative">
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="px-3">
                                <div className="shadow-lg w-full flex flex-col items-center bg-gray-50 p-3 rounded-xl h-32 justify-center">
                                    <img
                                        src={sponsor.src}
                                        alt={sponsor.title}
                                        className="w-52"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PreviousSponsors;
