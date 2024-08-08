import React, { useEffect, useRef } from "react";
import "./Sponsers.css";

import contentstack from './images/new_sponsors/contentstack.png';
import raweng from './images/new_sponsors/raweng.svg';
import software_ag from './images/new_sponsors/software_ag.png';
import global_net  from './images/new_sponsors/global_net.png'

const Sponsors = () => {
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
    <div id="sponsors" ref={timelineRef}>
      <br />
      <br />
      <br />
      <div className="container sponsors fade-element">
        <div className="text-center">
          <div>
            <div className="glitch-wrapper mb-3">
              <h1 className="glitch" data-text="Our Sponsors">Our Sponsors</h1>
            </div>
          </div>

          {/* Title Sponsor */}
          <div className="sponsors-container">

            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="text-center">
                <h2 className="font-bold">Title Sponsor</h2>
                <div className="card">
                  <div className="pic my-2">
                    <a target="_blank" href="https://www.contentstack.com/">
                      <img src={contentstack} alt="Contentstack" className="my-2" title={"Contentstack"} style={{ width: '250px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            {/* Co-Sponsor */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="text-center">
                <h2 className="font-bold">Co-sponsor</h2>
                <div className="card">
                  <div className="pic my-2">
                    <a target="_blank" href="https://www.softwareag.com/en_corporate.html" >
                      <img src={software_ag} alt="Software AG" title={"Software AG"} style={{ width: "100%", marginTop: '0px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            {/* Coding Partner, Streaming Partner, Certificate Partner */}
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            <div>
              <h2 className="fw-medium">Training Partner</h2>
              <div className="card d-flex flex-wrap justify-content-center align-items-center">
                <div className="pic">
                  <a target="_blank" href="https://www.rawengineeringacademy.in/">
                    <img src={raweng} title={"Raw Engineering Academy"} alt="Raw Engineering Academy" style={{ width: "100%" }} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="fw-medium">Technology Partner</h2>
              <div className="card d-flex flex-wrap justify-content-center align-items-center">
                <div className="pic">
                  <a target="_blank" href="http://www.globalnetcomputer.com/" >
                      <img src={global_net} alt="Global Net" title={"Global Net"} style={{ width: "100%"}} />
                  </a>
                </div>
              </div>
            </div>
            {/* <div>
              <h2 className="font-medium">Certificate Partner</h2>
              <div className="card">
                <div className="pic">
                  <img src={contentstack} alt="" style={{ width: "100%", marginTop: '10px' }} />
                </div>
              </div>
            </div> */}
          </div>



          

            {/* <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="text-center">
                <h2 className="font-bold">Training partner</h2>
                <div className="card">
                  <div className="pic my-2">
                    <a target="_blank" href="https://www.raweng.com/">
                      <img src={raweng} alt="Contentstack" className="my-2" style={{ width: '250px' }} />
                    </a>
                  </div>
                </div>
                
              </div>
            </div> */}


            {/* Co-powered by */}
            {/* <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="text-center">
              <h2 className="font-bold">Co-Powered by</h2>
            </div>
          </div> */}


            {/* <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
            <div>

              <div className="card">
                <div className="pic">
                  <img src={Software} alt="" style={{ width: "100%", marginTop: '10px' }} />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pic">
                  <img src={Giber} alt="" style={{ width: '100px', marginTop: '-10px' }} />
                </div>
              </div>
            </div>
          </div> */}

            {/* Associated with */}
            {/* <div className="mt-4 mb-4">
            <h2 className="font-bold">Associated with</h2>
          </div> */}

            {/* Community Partner, Technology Partner, Broadcasting Partner */}
            {/* <div className="d-flex flex-wrap  justify-content-center mt-4 gap-4">
            <div>
              <h2 className="fw-medium">Community Partner</h2>
              <div className="card">
                <div className="pic">
                  <img src={GetBrains} alt="" style={{ width: "160px" }} />
                </div>
              </div>
            </div>
            <div>
              <h2 className="fw-medium">Technology Partner</h2>
              <div className="card">
                <div className="pic">
                  <img src={Taskade} alt="" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div>
              <h2 className="fw-medium">Broadcasting Partner</h2>
              <div className="card">
                <div className="pic">
                  <img src={CafeCanfx} alt="" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;