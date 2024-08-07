import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
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

    return (
        <div>
            <nav className="bg-gray-800 fixed w-full z-50 py-1 shadow-md text-white">
                <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <Link to="/app" className="flex items-center">
                            <img src={logo} className="w-48" alt="Styleshare Logo" />
                        </Link>
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                to="/app/home"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/app/about"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <Link
                                to="/app/problems"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Problems
                            </Link>
                            <Link
                                to="/app/prizes"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Prizes
                            </Link>
                            <Link
                                to="/app/sponsors"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Sponsors
                            </Link>
                            <Link
                                to="/app/timeline"
                                className="px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Timeline
                            </Link>
                        </div>
                        <div className="relative flex items-center" ref={dropdownRef}>
                            <button
                                type="button"
                                className="hidden lg:inline-flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500  transition-colors duration-200"
                                onClick={toggleProfileDropdown}
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
                                <div className="absolute right-0 mt-64 w-48 bg-gray-800 border-2 border-gray-900 text-white rounded-md shadow-lg z-10">
                                    <Link
                                        to="/app/guidelines"
                                        className="block px-4 py-2 rounded-md m-2  hover:bg-blue-500 transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        Guidelines
                                    </Link>
                                    <Link
                                        to="/app/gallery"
                                        className="block px-4 py-2 rounded-md m-2  hover:bg-blue-500  transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        Gallery
                                    </Link>
                                    <Link
                                        to="/app/faq"
                                        className="block px-4 py-2 rounded-md m-2  hover:bg-blue-500  transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        to="/app/contact"
                                        className="block px-4 py-2 rounded-md m-2  hover:bg-blue-500  transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            )}
                            <Link
                                to="/app/register"
                                className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white text-base font-medium hover:bg-blue-600 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Register
                            </Link>
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="lg:hidden ml-4 p-2 rounded-md  hover:bg-blue-500 transition-colors duration-200"
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
                    <div className="lg:hidden bg-sky-500 m-5 rounded-lg text-gray-100 text-center shadow-md">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <Link
                                to="/app/home"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/app/about"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <Link
                                to="/app/problems"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Problems
                            </Link>
                            <Link
                                to="/app/prizes"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Prizes
                            </Link>
                            <Link
                                to="/app/sponsors"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Sponsors
                            </Link>
                            <Link
                                to="/app/timeline"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Timeline
                            </Link>
                            <Link
                                to="/app/guidelines"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Guidelines
                            </Link>
                            <Link
                                to="/app/gallery"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/app/faq"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                FAQ
                            </Link>
                            <Link
                                to="/app/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-customBlue2 transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
