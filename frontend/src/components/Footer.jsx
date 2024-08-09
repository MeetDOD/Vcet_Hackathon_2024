import React from 'react';
import logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { id: 'facebook', url: 'https://www.facebook.com/vcet.hackathon', icon: FaFacebookSquare },
    { id: 'instagram', url: 'https://www.instagram.com/hackathon_vcet/', icon: FaInstagram },
    { id: 'twitter', url: 'https://twitter.com/VcetHackathon', icon: FaTwitter },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/vcet-hackathon/', icon: FaLinkedin },
];

const quickLinks = [
    { id: 'aboutus', label: 'About' },
    { id: 'problems', label: 'Problem Statements' },
    { id: 'guidelines', label: 'Rules & Registration' },
    { id: 'timeline', label: 'Event Schedule' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'faq', label: 'Questions' },
    { id: 'contact', label: 'Contact' },
];

const Footer = () => {
    return (
    
        <>
            <footer className="bg-black px-8 pt-10 pb-5 mt-7 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
                    
                    {/* Logo and Follow Us On Section */}
                    <div className="flex flex-col items-center md:items-start p-4">
                    <img src={logo} alt="Logo" className="w-full max-w-xs mb-4" />
                    <h2 className="text-[#cbb79c] font-bold text-xl mb-4">Follow Us On</h2>
                    <ul className="flex list-none p-0">
                        {socialLinks.map((link) => (
                        <li key={link.id} className="mx-2.5">
                            <a href={link.url} target="_blank" className="text-[#cbb79c] text-[1.5rem] transition-transform duration-500 hover:scale-110">
                            <link.icon />
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="p-4">
                    <h2 className="text-[#cbb79c] font-bold text-3xl mb-4">Quick Links</h2>
                    <ul className="list-none p-0">
                        {quickLinks.map((link) => (
                        <li key={link.id} className="mb-2.5">
                            <HashLink to={`/#${link.id}`} className="text-white text-[1rem] font-normal relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 hover:text-[#F4CA93]">
                            {link.label}
                            </HashLink>
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* About Hackathon Section */}
                    <div className="p-4">
                    <h2 className="text-[#cbb79c] font-bold text-3xl mb-4">About Hackathon</h2>
                    <p className="text-white text-[1rem] font-normal ">
                        Hackathons help IT companies find talented Programmers, Software Developers, Designers, etc. They also help participants launch successful startups if their products or solutions have business value. So take up the challenge and code your way to the top!
                    </p>
                    </div>
                </div>

                <div className="text-center text-sm text-[#d7be9e] mt-7 pt-4 mb-2.5">
                    Copyright © 2023 All rights reserved by Vidyavardhini's College Of Engineering & Technology
                </div>
            </footer>
        </>

    );
};

export default Footer;
