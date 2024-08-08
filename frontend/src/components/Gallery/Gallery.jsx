import React, { useEffect } from "react";
import $ from "jquery";
import "./Gallery.css";
import Navbar from "../Navbar";
import img1 from "./img/car3.png";
import img2 from "./img/1.jpg";
import img3 from "./img/img5.jpg";
import img4 from "./img/2.jpg";
import img5 from "./img/3.jpg";
import img6 from "./img/winners.jpg";
import img7 from "./img/2021.jpeg";
import StarsCanvas from "../StarBackground";

function Gallery() {
useEffect(() => {
    $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function () {
    $(this).parent().children(".overlay").show();
    });

    $(`[unique-script-id="w-w-dm-id"] .close`).click(function () {
    $(".overlay").hide();
    });
}, []);

return (
    <>
    <StarsCanvas />
    <Navbar />
    <React.Fragment>
        <div className="gallery_1" unique-script-id="w-w-dm-id">
        <div className="responsive-container-block bigContainer">
            <div className="responsive-container-block Container">
            <p className="text-blk heading">Gallery</p>
            <div className="responsive-container-block imgContainer">
                <div className="project project1">
                <img className="smallImage" src={img1} alt="Project 1" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="30" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="square" 
                        strokeLinejoin="arcs"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img1}
                        alt="Project 1 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
                {/* Repeat the similar structure for other projects */}
                <div className="project project2">
                <img className="smallImage" src={img5} alt="Project 2" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img5}
                        alt="Project 2 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
                <div className="project project3">
                <img className="smallImage" src={img3} alt="Project 3" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img3}
                        alt="Project 3 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
                <div className="project project4">
                <img className="smallImage" src={img4} alt="Project 4" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img4}
                        alt="Project 4 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
                <div className="project project5">
                <img className="smallImage" src={img7} alt="Project 5" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img7}
                        alt="Project 5 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
                <div className="project project6">
                <img className="smallImage" src={img6} alt="Project 6" />
                <div className="overlay">
                    <div className="overlay-inner">
                    <button className="close">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="hdImgs">
                        <img
                        className="squareImg"
                        src={img6}
                        alt="Project 6 HD"
                        />
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn">View</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </React.Fragment>
    </>
);
}

export default Gallery;
