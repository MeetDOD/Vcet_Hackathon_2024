import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif1 from './1.gif'
import gif2 from './2.gif'
import gif3 from './3.gif'
import gif4 from './4.gif'
import gif5 from './5.gif'


const Problem = () => {

    const notify = () =>
        toast.info("Coming Soon!", {
            position: "top-right",
            autoClose: 3000,
            style: {
                backgroundColor: "#08b2aa",
            },
        });

    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        const timelineElements = document.querySelectorAll('.fade-element');

        timelineElements.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const timeline = timelineRef.current;
            const timelineElements = timeline.querySelectorAll('.fade-element');

            timelineElements.forEach((element, index) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;

                if (elementTop < window.innerHeight && elementBottom >= 0) {
                    if (!element.classList.contains('fade-in-scroll')) {
                        element.classList.add('fade-in-scroll');
                    }
                } else {
                    if (element.classList.contains('fade-in-scroll')) {
                        element.classList.remove('fade-in-scroll');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [activeProblem, setActiveProblem] = useState(1);
    const [problemSatementDescVisibility, setProblemSatementDescVisibility] = useState(false)
    const [problemStatements, setProblemStatements] = useState([
        {
            'title': "Telehealth Connect Platform",
            'description': "Create a digital platform that bridges the gap between remote and underserved communities and healthcare professionals using telemedicine technology. The platform should enable remote diagnosis, medical prescription, and healthcare advice, ensuring that individuals in remote areas have access to essential medical services without geographical limitations.",
            'key_points': [
                'Seamless communication between patients and healthcare professionals.',
                'Secure and private telehealth consultations.',
                'Prescription and medical advice provided remotely.',
                'Facilitates healthcare access for underserved communities.'
            ]
        },
        {
            'title': " Blockchain Certificate Verification System",
            'description': "Develop a blockchain-based system to revolutionize the verification and storage of educational certificates. This system will make it effortless for employers to validate the authenticity of candidates' qualifications. The blockchain technology ensures tamper-proof and secure verification, enhancing trust in the hiring process.",
            'key_points': [
                'Immutable and transparent certificate verification.',
                'Increased trust in the hiring process.',
                'Streamlined and efficient candidate qualification checks.',
                'Enhanced security against certificate fraud.'
            ]
        },
        {
            'title': " Virtual Study Buddy Platform",
            'description': "Create an innovative platform that connects students studying the same subjects, offering a virtual collaborative space. The platform should provide features like shared study materials, virtual study rooms, and AI-powered study groups tailored to individual learning styles and preferences, fostering effective and engaging learning.",
            'key_points': [
                'Collaborative virtual study environment.',
                'Personalized AI-powered study groups.',
                'Shared study materials and resources.',
                'Enhanced learning experiences for students.'
            ]
        },
        {
            'title': "Interactive Language Learning Games",
            'description': "Develop a series of interactive and gamified language learning modules encompassing vocabulary, grammar, and pronunciation. The design should actively engage users in the language-learning process, making it fun and effective. Users will have the opportunity to immerse themselves in the language they are learning.",
            'key_points': [
                'Gamified language learning modules.',
                'Comprehensive coverage of vocabulary, grammar, and pronunciation.',
                'Engaging and interactive language learning experiences.',
                'Fun and effective language acquisition.'
            ]
        },
        {
            'title': " Scholarship Awareness Portal",
            'description': "Design a web portal dedicated to raising awareness about various national and international scholarships available for individuals across different age groups. This portal aims to centralize information on scholarships, making it accessible and easy for prospective applicants to explore opportunities for educational funding.",
            'key_points': [
                'Comprehensive database of scholarships.',
                'User-friendly portal for scholarship search.',
                'Information categorized by age groups and eligibility criteria.',
                'Empowering individuals with educational funding opportunities.'
            ]
        },
    ])

    const Card = ({ color, imgSrc, title, content, problemNum }) => {
        return (
            <div className="problems-card" ref={timelineRef} >
                <div className="img-box">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <button className='btn btn-brand'
                        // onClick={notify}>Read More</button>
                        onClick={() => { setProblemSatementDescVisibility(true); setActiveProblem(problemNum) }}>Read More</button>
                </div>
            </div>
        );
    };


    const revealProblem = (problemNum) => {
        setActiveProblem(problemNum);
    };

    return (
        <div id='problems'>
            <br />
            <br />
            <ToastContainer />
            <div className='mt-5 fade-element'>
                <div className="text-center mt-5">
                    <div className="glitch-wrapper">
                        <h1 className="glitch" data-text="Problem Statements">Problem Statements</h1>
                    </div>
                </div>

                <div className="problems-container">
                    <Card
                        color="#009688"
                        imgSrc={gif5}
                        title={problemStatements[0].title}
                        content={problemStatements[0].description}
                        problemNum={1}
                    />
                    <Card
                        color="#009688"
                        imgSrc={gif3}
                        title={problemStatements[1].title}
                        content={problemStatements[1].description}
                        problemNum={2}
                    />
                    <Card
                        color="#009688"
                        imgSrc={gif2}
                        title={problemStatements[2].title}
                        content={problemStatements[2].description}
                        problemNum={3}
                    />
                    {/* </div>
                <div className="problems-container"> */}
                    <Card
                        color="#009688"
                        imgSrc={gif4}
                        title={problemStatements[3].title}
                        content={problemStatements[3].description}
                        problemNum={4}
                    />

                    <Card
                        color="#009688"
                        imgSrc={gif1}
                        title={problemStatements[4].title}
                        content={problemStatements[4].description}
                        problemNum={5}
                    />

                </div>
            </div>

            <div className={`problems-popup-parent ${problemSatementDescVisibility === true ? 'active' : ''}`}>

                <div className={`problems-popup `} >
                    <p className="d-flex justify-content-start">
                        <i className="fa fa-times-circle text-danger" style={{ cursor: 'pointer' }} onClick={() => { setProblemSatementDescVisibility(false) }}></i>
                        <i className="fa fa-circle mx-1 text-warning" aria-hidden="true"></i>
                        <i className="fa fa-circle text-success" aria-hidden="true"></i>
                    </p>

                    <div className='popup-tabs'>
                        {[1, 2, 3, 4, 5].map(problemNum => (
                            <div style={{ cursor: 'pointer' }}
                                key={problemNum}
                                className={`tab ${activeProblem === problemNum ? 'active' : ''}`}
                                onClick={() => revealProblem(problemNum)}
                            >
                                Problem {problemNum}
                            </div>
                        ))}
                    </div>

                    {/* Problem descriptions */}
                    {problemStatements.map((problem, index) => (
                        <div
                            key={index + 1}
                            className={`problem-description-container ${activeProblem === index + 1 ? 'active' : ''}`}
                            id={`problem_${index + 1}`}
                        >
                            <h3 className='title'>{problem.title}</h3>
                            <p className='desc'>{problem.description}</p>
                            <h4 className='probHead' >Key Points</h4>
                            <ul className='keypoints'>
                                {problem.key_points.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Problem;