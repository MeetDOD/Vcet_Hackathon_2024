/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

const Guidelines = () => {
  // State to manage modal visibility
  const [isNeftModalOpen, setNeftModalOpen] = useState(false);
  const [isUpiModalOpen, setUpiModalOpen] = useState(false);
  const [isRegister, setRegistration] = useState(false);

  return (
    <div className="relative w-full h-full custom-bg-small">
      <div className="min-h-screen text-white py-10 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center items-center text-center">
          <p className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-montserrat font-medium text-White">
            Event Guidelines
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-[#212529] w-full max-w-7xl rounded-[25px] p-6">
            <h3 className="my-3 text-customOrange text-lg sm:text-xl md:text-2xl font-bold">Rules</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
              <li>The VCET Hackathon will take place on <span className="text-customOrange">6th and 7th October 2023.</span></li>
              <li>A team can consist of 1 to 4 members. Every member of the team must be a student of a university or a college. A team can have members from different colleges.</li>
              <li>Entry fee is <span className="text-customOrange">₹500</span> per head (Includes 3 meals, breakfasts, snacks, and sleeping accommodation).</li>
              <li>Participants are free to use open standard repositories, APIs, and publicly available libraries.</li>
              <li>Progress of the project will be tracked during the Hackathon. <span className="text-customOrange">Use of readymade or precompiled code will lead to disqualification.</span></li>
              <li>Participants are expected to promptly push their code changes on GitHub.</li>
              <li>Participants are expected to behave professionally and responsibly.</li>
              <li>Decisions made by organizers and judges are final.</li>
              <li>Participants will have to submit abstracts for all 5 problem statements.</li>
              <li>All updates regarding the event will be posted on Social Media handles and mailed to each team.</li>
            </ul>
            <div className="mt-4">
              <button
                className="border border-white text-white py-2 px-4 rounded hover:bg-customOrange hover:border-customOrange transition"
                onClick={() => setRegistration(true)}
              >
                Register Now
              </button>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm sm:text-base md:text-lg">
              <li>NOTE: The order preference of the problem statements is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only.</li>
              <li>Last date for submission of abstract is <span className="text-customOrange">September 27, 2023</span>.</li>
              <li>The selected teams will get a confirmation after <span className="text-customOrange">September 28, 2023</span>.</li>
              <li>Payment for the selected teams i.e. ₹500 per head should be made by <span className="text-customOrange">October 1, 2023</span>. Entry fee payment of the entire team should be done in a single transaction.</li>
              <li>Out of the 5 abstracts submitted, the final Problem Statement for your team will be disclosed on <span className="text-customOrange">October 5, 2023.</span></li>
              <li>All done, your squad is all set to seize the Unleash The Unreal for VCET HACKATHON'23.</li>
              <li>Following are the details of payment.</li>
            </ul>
            <div className="mt-4 flex flex-row space-x-4 sm:space-x-8 ">
              <button
                className="border border-white text-white py-2 px-4 rounded hover:bg-customOrange hover:border-customOrange transition"
                onClick={() => setNeftModalOpen(true)}
              >
                NEFT
              </button>
              <button
                className="border border-white text-white py-2 px-4 rounded hover:bg-customOrange hover:border-customOrange transition"
                onClick={() => setUpiModalOpen(true)}
              >
                UPI
              </button>
            </div>
          </div>
        </div>

        {/* NEFT Modal */}
        {isNeftModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#212529] p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center border-b border-white pb-3 mb-3">
                <h5 className="text-xl font-exo text-white">NEFT Details</h5>
                <button
                  className="text-white"
                  onClick={() => setNeftModalOpen(false)}
                >
                  <svg className="w-8 h-8 text-black bg-gray-400 rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="text-white text-center">
                <p>NAME: Mrs. Archana Babaji Rawool</p>
                <p>Account No: 68012823017</p>
                <p>IFSC: MAHB0000299</p>
              </div>
            </div>
          </div>
        )}

        {/* UPI Modal */}
        {isUpiModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#212529] p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center border-b border-white pb-3 mb-3">
                <h5 className="text-xl font-exo text-white">UPI Details</h5>
                <button
                  className="text-white"
                  onClick={() => setUpiModalOpen(false)}
                >
                  <svg className="w-8 h-8 text-black bg-gray-400 rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="text-center">
                <img src="/assets/upi-13bc9438.png" alt="UPI QR Code" className="w-full" />
              </div>
            </div>
          </div>
        )}

        {/* Registration Modal */}
        {isRegister && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#212529] p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center border-b border-white pb-3 mb-3">
                <h5 className="text-xl font-exo text-white">Registration Form</h5>
                <button
                  className="text-white"
                  onClick={() => setRegistration(false)}
                >
                  <svg className="w-8 h-8 text-black bg-gray-400 rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guidelines;
