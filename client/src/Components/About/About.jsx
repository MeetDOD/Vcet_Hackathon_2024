import React, { useEffect, useState, useRef } from "react";
import code from './code.gif'

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const aboutRef = useRef(null);

  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutText = `
  VCET Hackathon is a 30 hours Hackathon organized by Department of Information Technology of "Vidyavardhini's College of Engineering and Technology". By organizing this Hackathon, we are trying to promote a strong Programming and Product Building Culture among students that will help them develop Problem Solving, Critical Thinking and Software Development Skills. It is an opportunity to take on challenging problems that revolve around us all the time and crack them down. Will you get time to eat ? Can you ditch your sleep ? Do you have passion to build? Find out in this 30 hours long thrilling experience !
  `;

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        } else {
          setIsAboutVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isAboutVisible) {
      const interval = setInterval(() => {
        if (currentIndex < aboutText.length) {
          setText((prevText) => prevText + aboutText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, -50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, aboutText, isAboutVisible]);

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

  return (
    <div id='aboutus' ref={timelineRef}>
      <br />
      <br />
      <br />
      <br />
      <div className="glitch-wrapper">
        <h1 className="glitch" data-text="About Us">About Us</h1>
      </div>

      <div>
        <div>
          <div className="service-32" style={{ position: 'relative' }}>
            <div className="container">
              <div className="row wrap-feature-32">
                <div className="col-lg-6 col-md-12 col-sm-12 fade-element">
                  <img src={code} style={{
                    transform: `translate(-${position.x / 20}px, -${position.y / 20}px)`,
                  }} className="img-fluid" width="100%" />
                </div>
                <div style={{ textAlign: "justify", backgroundColor: '#252525', borderRadius: '15px', color: '#08b2aa', fontWeight: 'bold', minHeight: '380px' }} ref={aboutRef} className={`col-lg-6 col-md-12 col-sm-12 align-self-center abb p-4 ${isAboutVisible ? 'visible' : ''}`}>
                  <p className="d-flex justify-content-start"><i className="fa fa-circle text-danger"></i><i className="fa fa-circle mx-1 text-warning" aria-hidden="true"></i><i className="fa fa-circle text-success" aria-hidden="true"></i></p>
                  <p className="my-3" style={{ lineHeight: '30px' }}>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;