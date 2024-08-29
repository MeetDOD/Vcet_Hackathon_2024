import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitType from "split-type";
import logo from "../assets/logo.png";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsProfileDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsProfileDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const typeSplit = new SplitType("[animate]", {
            types: "lines, words, chars",
            tagName: "span",
        });

        gsap.from("[animate] .line", {
            y: "120%",
            opacity: 0,
            rotationZ: "10",
            duration: 0.9,
            ease: "back.out",
            stagger: 0.1,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`fixed w-full z-50 py-1 text-white font-montserrat transition-colors duration-300 ${isScrolled ? "bg-gray-900 shadow-lg" : ""}`}>
                <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <Link to="/" className="flex items-center duration-300" animate="true">
                            <img src={logo} className="w-56" alt="Styleshare Logo" />
                        </Link>
                        <div className="hidden lg:flex items-center space-x-4">
                            <HashLink
                                to='/#home'
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Home
                            </HashLink>
                            <HashLink
                                to="/#aboutUs"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                About
                            </HashLink>
                            <HashLink
                                to="/#problems"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Problem Statements
                            </HashLink>
                            <HashLink
                                to="/#prizes"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Prizes
                            </HashLink>
                            <HashLink
                                to="/#sponsors"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Sponsors
                            </HashLink>
                            <Link to="/register" animate="true" className='my-3 relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-sm md:text-lg lg:text-sm bg-gradient-to-b from-customOrange to-customOrange/90 text-white shadow-[0px_0px_12px_#8c45ff] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                <div className='absolute inset-0'>
                                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                                </div>
                                Register
                            </Link>
                        </div>
                        <div className="relative flex items-center" ref={dropdownRef}>
                            <button
                                type="button"
                                className="hidden lg:inline-flex items-center px-3 py-2 rounded-md text-base font-medium hover"
                                onClick={toggleProfileDropdown}
                                animate="true"
                            >
                                More
                                <svg
                                    className="ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isProfileDropdownOpen ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
                                    />
                                </svg>
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-72 w-48 bg-gray-900 border-2 border-gray-900 text-white rounded-md shadow-lg z-10">
                                    <HashLink
                                        to="/#timelines"
                                        className="block px-4 py-2 rounded-md m-2 hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        onClick={closeMenu}
                                    >
                                        Timeline
                                    </HashLink>
                                    <HashLink
                                        to="/#guidelines"
                                        className="block px-4 py-2 rounded-md m-2 hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        onClick={closeMenu}
                                    >
                                        Guidelines
                                    </HashLink>
                                    <HashLink
                                        to="/#gallerys"
                                        className="block px-4 py-2 rounded-md m-2 hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        onClick={closeMenu}
                                    >
                                        Gallery
                                    </HashLink>
                                    <HashLink
                                        to="/#faq"
                                        className="block px-4 py-2 rounded-md m-2 hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        onClick={closeMenu}
                                    >
                                        FAQ
                                    </HashLink>
                                    <HashLink
                                        to="/#contactUs"
                                        className="block px-4 py-2 rounded-md m-2 hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        onClick={closeMenu}
                                    >
                                        Contact
                                    </HashLink>
                                </div>
                            )}
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="lg:hidden ml-4 p-2 rounded-md hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition-colors duration-300"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? "true" : "false"}
                            >
                                <svg
                                    className="h-6 w-6 font-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden mx-5 rounded-lg text-gray-100 text-center bg-gray-900">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <HashLink
                                to="/#home"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Home
                            </HashLink>
                            <HashLink
                                to="/#aboutUs"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                About
                            </HashLink>
                            <HashLink
                                to="/#problems"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Problem Statements
                            </HashLink>
                            <HashLink
                                to="/#prizes"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Prizes
                            </HashLink>
                            <HashLink
                                to="/#Sponsors"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Sponsors
                            </HashLink>
                            <HashLink
                                to="/#timeline"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Timeline
                            </HashLink>
                            <HashLink
                                to="/#guidelines"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Guidelines
                            </HashLink>
                            <HashLink
                                to="/#gallery"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Gallery
                            </HashLink>
                            <HashLink
                                to="/#faq"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                FAQ
                            </HashLink>
                            <HashLink
                                to="/#contact"
                                className="block px-3 py-2 mb-5 rounded-md text-base font-medium hover:bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                onClick={closeMenu}
                                animate="true"
                            >
                                Contact
                            </HashLink>
                            <button className='w-full relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-base bg-gradient-to-b from-customOrange to-customOrange/90 text-white shadow-[0px_0px_12px_#8c45ff] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                <div className='absolute inset-0'>
                                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                                </div>
                                Register
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;