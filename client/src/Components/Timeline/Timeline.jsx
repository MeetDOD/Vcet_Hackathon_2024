import React, { useEffect, useRef } from 'react';

const Timeline = () => {
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
    <div id="timeline">
      <br />
      <br />
      <div ref={timelineRef}>
        <div>
          <div className="container">
            <div className="text-center my-5">
              <div className="glitch-wrapper">
                <h1 className="glitch" data-text="Timeline">
                  Timeline
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="Yearly-timeline">
                  <div className="timeline fade-element">
                    <a className="timeline-content text-white">
                      <h3 className="title">6th September, 2023</h3><br />
                      <p className="description">
                        The form filing procedure starts.
                      </p>
                      <p className="description">
                        Participants have to fill their details, choose their preferences for problem statements and also give the abstract for the same.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white">
                      <h3 className="title">22nd September, 2023 </h3><br />
                      <p className="description">
                        Last Day for filling the Form.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white">
                      <h3 className="title">28th September, 2023</h3><br />
                      <p className="description">
                        Shortlisted Participants will get confirmation Mail.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white ">
                      <h3 className="title">1st October, 2023</h3><br />
                      <p className="description">
                        Payment for final Registrtion.
                      </p>
                      <p className="description">
                        Shortlisted participant should complete their Registration by paying the registration Fee.
                      </p>
                    </a>
                  </div>
                  <div className="timeline fade-element">
                    <div className="text-center my-5">
                      <div className="glitch-wrapper">
                        <h1 className="glitch" data-text="Day 1">
                          Day 1
                        </h1>
                      </div>
                    </div>
                    <a className="timeline-content text-white">
                      <h3 className="title">6th October, 2023</h3><br />
                      <p className="description">
                        7:30 AM : <br />
                        Inauguration of Hackathon.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white">
                      <h3 className="title"></h3><br />
                      <p className="description">
                        8:00 AM : <br />
                        Start Hacking to Unleash the Unreal.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white ">
                      <h3 className="title"></h3><br />
                      <p className="description">
                        5:00 PM : <br />
                        First Jury Round.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element mt-5">
                    <div className="glitch-wrapper mb-5">
                      <h1 className="glitch" data-text="Day 2">
                        Day 2
                      </h1>
                    </div>
                    <a className="timeline-content text-white ">
                      <h3 className="title">7th October, 2023</h3>
                      <br />
                      <p className="description">
                        8:00 AM : <br />
                        Second Jury Round.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white ">
                      <h3 className="title"></h3>
                      <br />
                      <p className="description">
                        2:00 PM : <br />
                        Coding Ends & Judging Round Begins.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white ">
                      <h3 className="title"></h3>
                      <br />
                      <p className="description">
                        4:00 PM : <br />
                        Pitching Round For Finalist Begins.
                      </p>
                    </a>
                  </div>
                  <div className="timeline  fade-element">
                    <a className="timeline-content text-white ">
                      <h3 className="title"></h3>
                      <br />
                      <p className="description">
                        6:00 PM : <br />
                        Announcement of Winners.
                      </p>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
