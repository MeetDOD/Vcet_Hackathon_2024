import React from 'react';
import logo from '../assets/logonew.png';
import { HashLink } from 'react-router-hash-link'; // Ensure HashLink is used for hash-based navigation
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { id: 'facebook', url: 'https://www.facebook.com/vcet.hackathon', icon: FaFacebookSquare },
    { id: 'instagram', url: 'https://www.instagram.com/hackathon_vcet/', icon: FaInstagram },
    { id: 'twitter', url: 'https://twitter.com/VcetHackathon', icon: FaTwitter },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/vcet-hackathon/', icon: FaLinkedin },
];

const quickLinks = [
    { id: 'aboutus', label: 'About', hash: '#aboutUs' },
    { id: 'domains', label: 'Domains', hash: '#domains' },
    { id: 'guidelines', label: 'Rules & Registration', hash: '#guidelines' },
    { id: 'timelines', label: 'Event Schedule', hash: '#timelines' },
    { id: 'gallerys', label: 'Photo Gallery', hash: '#gallerys' },
    { id: 'faq', label: 'Questions', hash: '#faq' },
    { id: 'contactUs', label: 'Contact', hash: '#contactUs' },
];

const Footer = () => {
    return (
        <footer className="bg-gray-950 px-8 pt-10 pb-5 w-full font-montserrat mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">

                {/* Logo and Follow Us On Section */}
                <div className="flex flex-col items-center md:items-start p-4">
                    <img src={logo} alt="Logo" className="w-full max-w-xs mb-4" />
                    <h2 className="text-customOrange font-bold text-xl mb-4">Follow Us On</h2>
                    <ul className="flex list-none p-0 gap-2">
                        {socialLinks.map((link) => (
                            <li key={link.id} className="hover:-translate-y-1 transition-transform duration-300">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                                    <link.icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="p-4">
                    <h2 className="text-customOrange font-bold text-3xl mb-4">Quick Links</h2>
                    <ul className="list-none p-0">
                        {quickLinks.map((link) => (
                            <li key={link.id} className="mb-2.5">
                                <HashLink
                                    to={link.hash}
                                    smooth
                                    className="text-white text-[1rem] font-normal relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 hover:text-customOrange"
                                >
                                    {link.label}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Hackathon Section */}
                <div className="p-4">
                    <h2 className="text-customOrange font-bold text-3xl mb-4">About Hackathon</h2>
                    <p className="text-white text-[1rem] font-normal">
                        Hackathons help IT companies find talented Programmers, Software Developers, Designers, etc. They also help participants launch successful startups if their products or solutions have business value. So take up the challenge and code your way to the top!
                    </p>
                </div>
            </div>

            <div className="text-center text-sm text-white font-semibold mt-7 pt-4 mb-2.5">
                Copyright © 2024 All rights reserved by Vidyavardhini's College Of Engineering & Technology
            </div>
        </footer>
    );
};

export default Footer;