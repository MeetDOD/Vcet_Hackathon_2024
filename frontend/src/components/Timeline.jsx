import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { FaEarthAmericas } from "react-icons/fa6";
import { GiJupiter, GiRingedPlanet } from "react-icons/gi";
import { SiNeptune, SiPlanetscale } from "react-icons/si";
import Heading from './Heading';

const timelineData = [
    {
        title: "2nd September, 2024",
        subtitle: "Form filling procedure starts",
        icon: <FaEarthAmericas />,
        iconBg: "#182567",
        points: [
            "The form filing procedure starts.",
        ],
    },
    {
        title: "22th September, 2024",
        subtitle: "Last day for filling the registration form",
        icon: <GiJupiter />,
        iconBg: "#252AC7",
        points: [
            "The form filing procedure ends.",
        ],
    },
    {
        title: "25th September, 2024",
        subtitle: "Sending Mails.",
        icon: <GiRingedPlanet />,
        iconBg: "#18508B",
        points: [
            "Shortlisted Participants will get confirmation.",
        ],
    },
    {
        title: "29th September, 2024",
        subtitle: "Payment for final Registrtion.",
        icon: <SiNeptune />,
        iconBg: "#AF6AF0",
        points: [
            "Shortlisted participant should complete their Registration by paying the registration Fee."
        ],
    },
    {
        title: "4th October, 2024",
        subtitle: "Day 01",
        icon: <SiPlanetscale />,
        iconBg: "#582692",
        points: [
            "7:30 AM : Inauguration of Hackathon.",
            "8:00 AM : Start Hacking to Code the Cosmos.",
            "5:00 PM : First Jury Round."
        ],
    },
    {
        title: "5th October, 2024",
        subtitle: "Day 02",
        icon: <SiPlanetscale />,
        iconBg: "#582692",
        points: [
            "8:00 AM : Second Jury Round.",
            "2:00 PM : Coding Ends & Judging Round Begins.",
            "4:00 PM : Pitching Round For Finalist Begins.",
            "6:00 PM : Announcement of Winners."
        ],
    }
];

const Timeline = () => {
    return (
        <div>
            <div id="timelines" className=' text-white flex flex-col font-montserrat '>
                <br /> <br /> <br /> <br />
                <Heading
                    title1="Our"
                    title2="Timeline"
                    subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                    sectionId="timeline"
                />
                <VerticalTimeline className='sectionMargin'>
                    {timelineData.map((timeline, index) => (
                        <VerticalTimelineElement
                            key={`timeline-element-${index}`}
                            contentStyle={{
                                background: "#1f2937"
                            }}
                            iconStyle={{
                                background: timeline.iconBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            icon={
                                <div className='h-full w-full'>
                                    {timeline.icon}
                                </div>
                            }
                        >
                            <div>
                                <h3 className='text-2xl font-bold'>{timeline.title}</h3>
                                <p
                                    className='text-lg font-semibold'
                                    style={{ margin: 0 }}
                                >
                                    {timeline.subtitle}
                                </p>
                            </div>
                            <ul className='mt-5 list-disc ml-5 space-y-2'>
                                {timeline.points.map((point, index) => (
                                    <li
                                        key={`timeline-point-${index}`}
                                        className='text-sm pl-1 font-semibold'
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline;
