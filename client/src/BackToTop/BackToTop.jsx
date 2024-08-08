import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#08b2aa",
            color: "#000000",
            border: "none",
            borderRadius: "5px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
            fontSize: "1.5rem",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: "9999"
          }}
          onClick={scrollUp}
        >
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
