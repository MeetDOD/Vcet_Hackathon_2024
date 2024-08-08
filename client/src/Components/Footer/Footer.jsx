import React from 'react';
import logo from './logo.png';
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link'

const quickLinks = [
    { id: 'aboutus', label: 'About' },
    { id: 'problems', label: 'Problem Statements' },
    { id: 'guidelines', label: 'Rules & Registration' },
    { id: 'timeline', label: 'Event Schedule' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'faq', label: 'Questions' },
    { id: 'contact', label: 'Contact' },
];

const socialLinks = [
    { id: 'facebook', url: 'https://www.facebook.com/vcet.hackathon', icon: Facebook },
    { id: 'instagram', url: 'https://www.instagram.com/hackathon_vcet/', icon: Instagram },
    { id: 'twitter', url: 'https://twitter.com/VcetHackathon', icon: Twitter },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/vcet-hackathon/', icon: LinkedIn },
];

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="box">
                        <div>
                            <div className="content">
                                <img src={logo} alt="" style={{ width: "250px" }} />
                            </div>
                        </div>
                        <div className={`box social`}>
                            <h2 className='follow' >Follow Us On</h2>
                            <div className="content">
                                <ul className="social_icon">
                                    {socialLinks.map(link => (
                                        <li key={link.id}>
                                            <a href={link.url} target="_blank">
                                                <link.icon />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`box quick_links`}>
                        <h2>Quick Links</h2>
                        <div className="content">
                            <ul>
                                {quickLinks.map(link => (
                                    <li key={link.id} className='quickLinks' >
                                        <HashLink to={`/#${link.id}`}>{link.label}</HashLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`box posts`}>
                        <h2>About Hackathon</h2>
                        <div className="content">
                            <p>
                                Hackathons help IT companies find talented Programmers, Software Developers,
                                Designers, etc. They also help participants launch successful startups if their
                                products or solutions have business value. So take up the challenge and code your
                                way to the top!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="content" >
                        Copyright © 2023 All rights reserved by Vidyavardhini's College Of Engineering & Technology
                    </div>
                </div>
            </footer>

        </>
    );
};


export default Footer;
