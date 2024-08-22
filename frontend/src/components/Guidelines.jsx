import { useState } from 'react';
import Heading from './Heading';

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-[#212529] p-6 rounded-lg w-full max-w-md">
      <div className="flex justify-between items-center border-b border-white pb-3 mb-3">
        <h5 className="text-xl font-exo text-white">{title}</h5>
        <button className="text-white" onClick={onClose}>
          <svg className="w-8 h-8 text-black bg-gray-400 rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="text-white text-center">{children}</div>
    </div>
  </div>
);

const Guidelines = () => {
  const [isNeftModalOpen, setNeftModalOpen] = useState(false);
  const [isUpiModalOpen, setUpiModalOpen] = useState(false);
  const [isRegister, setRegistration] = useState(false);

  const handleModalClose = () => {
    setNeftModalOpen(false);
    setUpiModalOpen(false);
    setRegistration(false);
  };

  return (
    
    <div id='guidelines' className="relative w-full h-full custom-bg-small">
      <br/><br/>
      <div className="min-h-screen text-white py-10 px-4 md:px-8 lg:px-16 font-montserrat">
        <Heading
          title1="Event"
          title2="Guidelines"
          subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
          sectionId="guideline"
        />

        <div className="flex justify-center tracking-tight sectionMargin">
          <div className="bg-[#212529] w-full max-w-7xl rounded-2xl p-6">
            <h3 className="my-3 text-customOrange text-lg sm:text-xl md:text-2xl font-bold">Rules</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
              {/* Event rules */}
              <li>The VCET Hackathon will take place on <span className="text-customOrange">4th and 5th October 2024.</span></li>
              <li>A team can consist of 1 to 4 members. Every member of the team must be a student of a university or a college. A team can have members from different colleges.</li>
              <li>Entry fee is <span className="text-customOrange">₹500</span> per person (Includes 3 meals, breakfasts, snacks, and sleeping accommodation).</li>
              <li>Participants are free to use open standard repositories, APIs, and publicly available libraries.</li>
              <li>Progress of the project will be tracked during the Hackathon. <span className="text-customOrange">Use of readymade or precompiled code will lead to disqualification.</span></li>
              <li>Participants are expected to promptly push their code changes on GitHub.</li>
              <li>Participants are expected to behave professionally and responsibly.</li>
              <li>Decisions made by organizers and judges are final.</li>
              <li>Please submit a 300-500 word abstract on the provided example problem statement along with the GitHub profile of any member of the team for shortlisting.</li>
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
              {/* Additional notes */}
              <li>NOTE: The order preference of the problem statements is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only.</li>
              <li>Last date for submission of abstract is <span className="text-customOrange">September 27, 2024</span>.</li>
              <li>The selected teams will get a confirmation after <span className="text-customOrange">September 25, 2024</span>.</li>
              <li>Payment for the selected teams i.e. ₹500 per head should be made by <span className="text-customOrange">September 28, 2024</span>. Entry fee payment of the entire team should be done in a single transaction.</li>
              <li>Out of the 5 abstracts submitted, the final Problem Statement for your team will be disclosed on <span className="text-customOrange">October 5, 2024.</span></li>
              <li>All done, your squad is all set to seize the Code The Cosmos for VCET HACKATHON'24.</li>
              <li>Following are the details of payment.</li>
            </ul>
            <div className="mt-4 flex flex-row space-x-4 sm:space-x-8">
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
          <Modal title="NEFT Details" onClose={handleModalClose}>
            <p>NAME: Mrs. Archana Babaji Rawool</p>
            <p>Account No: 68012823017</p>
            <p>IFSC: MAHB0000299</p>
          </Modal>
        )}

        {/* UPI Modal */}
        {isUpiModalOpen && (
          <Modal title="UPI Details" onClose={handleModalClose}>
            <img src="/assets/upi-13bc9438.png" alt="UPI QR Code" className="w-full" />
          </Modal>
        )}

        {/* Registration Modal */}
        {isRegister && (
          <Modal title="Registration Form" onClose={handleModalClose}>
            {/* Registration form fields can go here */}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Guidelines;
