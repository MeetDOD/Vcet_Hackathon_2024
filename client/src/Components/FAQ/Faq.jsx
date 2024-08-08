import React from "react";

const faqData1 = [
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

const faqData2 = [
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

const Faq = () => {
  return (
    <div className="FAQ mb-5 text-light" id="faq" style={{ cursor: 'none' }}>
      <div className="container mt-5">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="Frequently Asked Questions">Frequently Asked Questions</h1>
        </div>
        <div className="accordion" id="accordionFlushExample">
          <div className="row">
            {/* First Div */}
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              {faqData1.map((item) => (
                <div
                  className="accordion-item border border-dark bg-light my-2"
                  key={item.id}
                >
                  <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
                    <button
                      className="accordion-button collapsed text-black"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading-${item.id}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body text-black">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* second div */}
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              {faqData2.map((item) => (
                <div
                  className="accordion-item border border-dark bg-light my-2"
                  key={item.id}
                >
                  <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
                    <button
                      className="accordion-button collapsed text-black"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading-${item.id}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body text-black " >{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;