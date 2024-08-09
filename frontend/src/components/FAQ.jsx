import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndexLeft, setActiveIndexLeft] = useState(null);
    const [activeIndexRight, setActiveIndexRight] = useState(null);

    const toggleQuestionLeft = (index) => {
        setActiveIndexLeft(activeIndexLeft === index ? null : index);
        if (activeIndexRight !== null) {
            setActiveIndexRight(null);
        }
    };

    const toggleQuestionRight = (index) => {
        setActiveIndexRight(activeIndexRight === index ? null : index);
        if (activeIndexLeft !== null) {
            setActiveIndexLeft(null);
        }
    };

    const questionsLeft = [
        {
            id: 1,
            question: "What is the mode of the Hackathon?",
            answer: "VCET Hackathon’23 Unleash the unreal will be held offline.",
        },
        {
            id: 2,
            question: "Who can participate?",
            answer:
                "Any UG student is welcome to participate in this event. While experienced coding and programming is a huge plus, teams will also need people with strong presentation skills and unique ideas.",
        },
        {
            id: 3,
            question: "Can a pass out student participate in the event?",
            answer:
                "No, every member of the team must be a current student of a university or a college. (Members from different colleges allowed).",
        },
        {
            id: 4,
            question: "What are the Problems Statements that can be selected?",
            answer: "Problem Statements will be provided from our end. You have to submit abstracts for all 5 Problem Statements, out of which 1 will be allocated."
        },
        {
            id: 5,
            question: "How much is the entry fee and the last date for registration?",
            answer: "Entry fee is 500/- per head and the last date of registration is September 22, 2023."
        },
        {
            id: 6,
            question: "Which payment methods are accepted?",
            answer: "Payments can be made using UPI or NEFT."
        }
    ];

    const questionsRight = [
        {
            id: 7,
            question: "Will a dataset be provided?",
            answer: "No, the data has to be collected on your own."
        },
        {
            id: 8,
            question: "What is the selection criteria?",
            answer: "Innovation, Technology, Completion & Business Values are some of the criterias."
        },
        {
            id: 9,
            question: "What is the selection criteria?",
            answer: "Innovation, Technology, Completion & Business Values are some of the criterias."
        },
        {
            id: 10,
            question: "When and where will the final results be announced?",
            answer: "Results will be announced at the end of the Final Pitching round."
        },
        {
            id: 11,
            question: "What is the cancellation policy like?",
            answer: "There is no cancellation policy and payment once done will not be refunded."
        },
        {
            id: 12,
            question: "Having another questions that is not answered in the FAQs?",
            answer: "You can contact us via mail or drop your query in the comment sections on our Social Media handles."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">FAQs</h1>
            <div className="flex flex-col md:flex-row justify-between gap-y-8 md:gap-x-6">
                <div className="w-full md:w-1/2 space-y-4">
                    {questionsLeft.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-[#422C7A] text-gray-100 rounded-lg shadow-md"
                        >
                            <div
                                className={`question px-5 py-4 cursor-pointer flex justify-between items-center ${activeIndexLeft === index ? 'font-semibold' : 'font-medium'}`}
                                onClick={() => toggleQuestionLeft(index)}
                            >
                                {item.question}
                                <span
                                    className={`transform transition-transform duration-200 text-2xl ${activeIndexLeft === index ? 'rotate-45 text-purple-500' : 'rotate-0 text-gray-400'}`}
                                >
                                    +
                                </span>
                            </div>
                            <div
                                className={`answercont overflow-hidden transition-all duration-300 ease-in-out ${activeIndexLeft === index ? 'max-h-[200px] py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                                style={{
                                    maxHeight: activeIndexLeft === index ? '200px' : '0',
                                    paddingTop: activeIndexLeft === index ? '1rem' : '0',
                                    paddingBottom: activeIndexLeft === index ? '1rem' : '0',
                                    opacity: activeIndexLeft === index ? '1' : '0',
                                }}
                            >
                                <div
                                    className="answer px-5 text-sm"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    {questionsRight.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-[#422C7A] text-gray-100 rounded-lg shadow-md"
                        >
                            <div
                                className={`question px-5 py-4 cursor-pointer flex justify-between items-center ${activeIndexRight === index ? 'font-semibold' : 'font-medium'}`}
                                onClick={() => toggleQuestionRight(index)}
                            >
                                {item.question}
                                <span
                                    className={`transform transition-transform duration-200 text-2xl ${activeIndexRight === index ? 'rotate-45 text-purple-500' : 'rotate-0 text-gray-400'}`}
                                >
                                    +
                                </span>
                            </div>
                            <div
                                className={`answercont overflow-hidden transition-all duration-300 ease-in-out ${activeIndexRight === index ? 'max-h-[200px] py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                                style={{
                                    maxHeight: activeIndexRight === index ? '200px' : '0',
                                    paddingTop: activeIndexRight === index ? '1rem' : '0',
                                    paddingBottom: activeIndexRight === index ? '1rem' : '0',
                                    opacity: activeIndexRight === index ? '1' : '0',
                                }}
                            >
                                <div
                                    className="answer px-5 text-sm"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
