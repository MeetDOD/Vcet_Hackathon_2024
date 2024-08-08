import React, { useState } from "react";
import styles from "./Rules.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UPIM from "./upi.png";
import { Link } from "react-router-dom";

const Guidelines = () => {
  const notify = () =>
    toast.info("Coming Soon!", {
      position: "top-right",
      autoClose: 3000,
      style: {
        backgroundColor: "#08b2aa",
      },
    });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container my-5" id="guidelines">
      <div class="glitch-wrapper mb-5">
        <h1 class="glitch" data-text="Event Guidelines">
          Event Guidelines
        </h1>
      </div>

      <div
        className="bg-dark"
        style={{ position: "relative", borderRadius: "25px" }}
      >
        <p className="text-start text-white p-4">
          <h3 className="my-3" style={{ color: "#08b2aa" }}>
            Rules
          </h3>
          <ul className={`text-light ${styles.ruleList}`}>
            <li>
              {" "}
              The VCET Hackathon will take place on
              <span className={`${styles.hLight}`}>
                {" "}
                6th and 7th October 2023.
              </span>{" "}
            </li>
            <li>
              {" "}
              A team can consist of 1 to 4 members. Every member of the team must be a student of a university or a college. A team can have members from different colleges.
            </li>
            <li>
              {" "}
              Entry fees is{" "}
              <span className={`${styles.hLight}`}>&#8377;500</span> per head (Includes 3 meals, breakfasts, snacks and sleeping accommodation.) .
            </li>
            <li>
              {" "}
              Participants are free to use open standard repositories, APIs and publically available libraries.
            </li>
            <li>
              {" "}
              Progress of the project will be tracked during Hackathon <span className={`${styles.hLight}`}>use of readymade code or precompiled code will lead to disqualification.</span>
            </li>
            <li>
              {" "}
              Participants are expected to promptly push their code changes on GitHub.</li>
            <li>
              {" "}
              Participants are expected to behave professionally and responsibly.

            </li>
            <li>Decisions made by organizers and judges are final.</li>
            <li>
              {" "}
              Participants will have to submit abstracts for all 5 problem statements.
            </li>
            <li>
              {" "}
              All updates regarding the event will be posted on Social Media handles as well as mailed to each team.
            </li>
          </ul>
          <h3 className="mt-5" style={{ color: "#08b2aa" }}>
            Registration
          </h3>
          <div>
            {/* <button onClick={notify} class="btn btn-brand my-3">
              Register Now
            </button> */}

            <Link to='/register' className="btn btn-brand my-3">
              Register Now
            </Link>
          </div>

          <ToastContainer
            closeButton={false}
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <ul className={`text-light ${styles.ruleList}`}>
            {/* <li>5 Problem Statements will be provided from our end.</li>
            <li>
              {" "}
              You have to submit 3 abstracts (one for each domain) to these
              Problem Statements out of{" "}
              <span className={`${styles.hLight}`}>
                all 5 Problem Statements
              </span>{" "}
              consising of Implementation & Technology Stack out of which 1 will
              be allocated and notified to each team one day prior via email.
            </li> */}
            <li>
              NOTE: The order preference of the problem statements is solely for
              our reference. We do not assure that the topic allocation will be
              based on your top preferences only.
            </li>
            <li>
              Last date for submission of abstract is{" "}
              <span className={`${styles.hLight}`}>September 22, 2023</span>.
            </li>
            <li>
              {" "}
              The selected teams will get a confirmation by{" "}
              <span className={`${styles.hLight}`}>September 28, 2023</span>.
            </li>

            <li>
              {" "}
              Payment for the selected teams i.e. &#8377;500 per head should be
              made by{" "}
              <span className={`${styles.hLight}`}>October 1, 2023</span>. Entry
              fee payment of the entire team should be done in a single
              transaction.
            </li>

            <li>
              Out of the 5 abstracts submitted, the final Problem Statement for
              your team will be disclosed on{" "}
              <span className={`${styles.hLight}`}>October 5, 2023.</span>
            </li>
            <li>
              {" "}
              All done, your squad is all set to seize the Unleash The Unreal for VCET HACKATHON'23 .
            </li>
            <li> Following are the details of payment.</li>
          </ul>
          <div>
            <div>
              <button
                className="btn btn-brand my-3 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                NEFT
              </button>
              <a
                className="btn btn-brand m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                UPI
              </a>
            </div>

            <div
              className="modal fade "
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      NEFT Details
                    </h1>
                    <button
                      type="button"
                      className="btn-close bg-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <center>
                      NAME: Mrs.Archana Babaji Rawool
                      <br />Account No:- 68012823017
                      <br />IFSC:- MAHB0000299
                    </center>

                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade "
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      UPI Details

                    </h1>
                    <button
                      type="button"
                      className="btn-close bg-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>

                  <div className="modal-body">
                      <img src={UPIM} style={{ width: "100%"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Guidelines;