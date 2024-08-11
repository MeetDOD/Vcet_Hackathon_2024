import React, { useEffect } from "react";
import $ from "jquery";
import "../styles/Gallery.css";
import img1 from "../assets/img/img3.png";
import img3 from "../assets/img/img5.jpg";
import img4 from "../assets/img/2.jpg";
import img5 from "../assets/img/3.jpg";
import img6 from "../assets/img/winners.jpg";
import img7 from "../assets/img/2021.jpeg";

function Gallery() {
    useEffect(() => {
        $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function () {
            $(this).parent().children(".overlay").show();
        });

        $(`[unique-script-id="w-w-dm-id"] .close`).click(function () {
            $(".overlay").hide();
        });
    }, []);

    const projects = [
        { id: 'project2', imgSrc: img5, alt: 'Project 2' },
        { id: 'project3', imgSrc: img3, alt: 'Project 3' },
        { id: 'project4', imgSrc: img4, alt: 'Project 4' },
        { id: 'project5', imgSrc: img7, alt: 'Project 5' },
        { id: 'project6', imgSrc: img6, alt: 'Project 6' }
    ];


    return (
        <>
            <div className="gallery_1" unique-script-id="w-w-dm-id">
                <div className="responsive-container-block bigContainer">
                    <div className="responsive-container-block Container">
                        <p className="text-blk heading font-montserrat font-medium">Gallery</p>
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
                            {projects.map(project => (
                                <div className={`project ${project.id}`} key={project.id}>
                                    <img className="smallImage" src={project.imgSrc} alt={project.alt} />
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
                                                    src={project.imgSrc}
                                                    alt={`${project.alt} HD`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <button className="btn">View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
