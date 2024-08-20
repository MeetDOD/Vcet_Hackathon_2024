import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { FaEarthAmericas } from "react-icons/fa6";
import { GiJupiter, GiRingedPlanet } from "react-icons/gi";
import { SiNeptune, SiPlanetscale } from "react-icons/si";
import Heading from './Heading';

const timelineData = [
    {
        title: "6th September, 2023",
        subtitle: "Registration Starts",
        icon: <FaEarthAmericas />,
        iconBg: "#182567",
        points: [
            "The form filing procedure starts.",
            "Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same."
        ],
    },
    {
        title: "6th September, 2023",
        subtitle: "Registration Starts",
        icon: <GiJupiter />,
        iconBg: "#252AC7",
        points: [
            "The form filing procedure starts.",
            "Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same."
        ],
    },
    {
        title: "6th September, 2023",
        subtitle: "Registration Starts",
        icon: <GiRingedPlanet />,
        iconBg: "#18508B",
        points: [
            "The form filing procedure starts.",
            "Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same."
        ],
    },
    {
        title: "6th September, 2023",
        subtitle: "Registration Starts",
        icon: <SiNeptune />,
        iconBg: "#AF6AF0",
        points: [
            "The form filing procedure starts.",
            "Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same."
        ],
    },
    {
        title: "6th September, 2023",
        subtitle: "Registration Starts",
        icon: <SiPlanetscale />,
        iconBg: "#582692",
        points: [
            "The form filing procedure starts.",
            "Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same."
        ],
    }
];

const Timeline = () => {
    return (
        <div>
            <div className='text-white flex flex-col font-montserrat'>
                <Heading
                    title1="Our"
                    title2="Timeline"
                    subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                    sectionId="timeline"
                />
                <VerticalTimeline>
                    {timelineData.map((timeline, index) => (
                        <VerticalTimelineElement
                            key={`timeline-element-${index}`}
                            contentStyle={{
                                background: "#422C7A"
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
