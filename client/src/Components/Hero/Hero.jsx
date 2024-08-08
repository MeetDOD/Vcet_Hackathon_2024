import React, { useEffect } from "react";
import vcet from './CLG LOGO.png'
import { useRef } from "react";
import { Link } from "react-router-dom";
import titleSponsor from '../../assets/sponsors/contentstack_logo.png'

const Hero = () => {

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    });

    // Select all elements with the class "fade-element"
    const timelineElements = document.querySelectorAll('.fade-element');

    timelineElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const timelineElements = timeline.querySelectorAll('.fade-element');

      timelineElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;


        if (elementTop < window.innerHeight && elementBottom >= 0) {
          // If element is partially or fully in viewport
          if (!element.classList.contains('fade-in-scroll')) {
            element.classList.add('fade-in-scroll');
          }
        } else {
          // If element is outside the viewport
          if (element.classList.contains('fade-in-scroll')) {
            element.classList.remove('fade-in-scroll');
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef}>
      <section
        id="hero"
        className="min-vh-100 d-flex fade-element align-items-center text-center"
      >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <img
                src={vcet}
                height="110"
                alt="logo"
                className="my-1 "
              />
              <h4 className="text-white my-3" >
                Vidyavardhini's College of Engineering and Technology
              </h4>
              <h5 className="text-white my-3" >
                {/* In association with <img src={titleSponsor} width={"25px"} /> Contentstack. */}
              </h5>
              <p className=" my-1" style={{ color: "#9CF5FD" }}>
                presents
              </p>
              <h1 className="text-uppercase text-white fw-semibold display-1">
                VCET{" "}
                <a
                  style={{ color: "#9CF5FD", textDecoration: "none" }}
                  className="neonText"
                >
                  HACKATHON
                </a>
              </h1>
              {/* <h3 className="my-2 logo ">
                        <b><span>Unleash </span><span>the </span><span>Unreal</span></b>
                    </h3> */}
              <div className="glitch-wrapper">
                <div className="glitch glow" data-text="Unleash The Unreal">
                  Unleash The Unreal
                </div>
              </div>
              <div>
                {/* <Link to='/register' className="btn btn-brand my-3">
                  Register Now
                </Link> */}
                <Link to='/register' className="btn btn-brand my-3">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
