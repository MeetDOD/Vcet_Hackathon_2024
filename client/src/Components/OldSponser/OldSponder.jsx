import React from 'react';
import Marquee from "react-fast-marquee";
import "./old.css";
import DearDigital from './images/dear-digital.png';
import Napsum from './images/Napsums.png';
import Software from './images/software_ag.png';
import Giber from './images/Giber.jpg';
import GeeksforGeeks from './images/gfg_2021.png';
import StreamYard from './images/Streamyard.png';
import GiveMYCertificate from './images/GMC_logo2021.png';
import GetBrains from './images/jetbrains.png';
import Taskade from './images/taskade.png';
import CafeCanfx from './images/CafeCanfx.png';
import G_Systems from './images/G_Systems.png';
import Lokmat from './images/Lokmat.png';

const sponsors = [
    { image: DearDigital, title: 'TITLE SPONSOR' },
    { image: Napsum, title: 'POWERED BY' },
    { image: G_Systems, title: 'POWERED BY' },
    { image: Software, title: 'CO-POWERED BY' },
    { image: Giber, title: 'CO-POWERED BY' },
    { image: GeeksforGeeks, title: 'CODING PARTNER' },
    { image: StreamYard, title: 'STREAMING PARTNER' },
    { image: GiveMYCertificate, title: 'CERTIFICATE PARTNER' },
    { image: GetBrains, title: 'COMMUNITY PARTNER' },
    { image: Taskade, title: 'TECHNOLOGY PARTNER' },
    { image: CafeCanfx, title: 'BROADCASTING PARTNER' },
    { image: Lokmat, title: 'MEDIA PARTNER' },
];

const OldSponsor = () => {
    return (
        <div className='imgMar'>
            <center>
                <br />
                <br />
                <div className="glitch-wrapper mb-3">
                    <h1 className="glitch" data-text="Our Old Sponsors">Our Old Sponsors</h1>
                </div>
                <br />
                <br />
            </center>
            <div style={{ position: 'relative' }}>
                <Marquee className='bborder' pauseOnHover={true}  speed={120}>
                    {sponsors.map((sponsor, index) => (
                        <>
                            <h6 className='sponsor-title'>{sponsor.title}</h6>
                            <div key={index} className='sponsor-container'>
                                <img src={sponsor.image} className='images1' alt={sponsor.title} />
                            </div>
                        </>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default OldSponsor;
