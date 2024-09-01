import { useState } from 'react';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import qr from "../assets/qr.jpg"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IoClose } from "react-icons/io5";

const closeIcon = (
  <div className='text-customOrange'>
    <IoClose size={30} />
  </div>
);

const Guidelines = () => {
  const [isNeftModalOpen, setNeftModalOpen] = useState(false);
  const [isUpiModalOpen, setUpiModalOpen] = useState(false);

  const handleModalClose = () => {
    setNeftModalOpen(false);
    setUpiModalOpen(false);
  };

  return (

    <div id='guidelines' className="relative w-full h-full custom-bg-small">
      <br /><br />
      <div className="min-h-screen text-white py-10 px-4 md:px-8 lg:px-16 font-montserrat">
        <Heading
          title1="Event"
          title2="Guidelines"
          subtitle="Navigate the rules and make the most of your experience"
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
              <li>All updates regarding the event will be posted on Social Media handles and mailed to each team.</li>
            </ul>
            <div className="my-6">
              <Link to="/register"
                className="text-white py-3 px-6 rounded-lg bg-gradient-to-b from-customOrange to-customOrange/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Register Now
              </Link>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm sm:text-base md:text-lg">
              <li>NOTE: The order preference of the domain is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only.</li>
              <li>Last date for submission of abstract is <span className="text-customOrange">September 22, 2024</span>.</li>
              <li>The selected teams will get a confirmation after <span className="text-customOrange">September 25, 2024</span>.</li>
              <li>Payment for the selected teams i.e. ₹500 per person should be made by <span className="text-customOrange">September 29, 2024</span>. Entry fee payment of the entire team should be done in a single transaction.</li>
              <li>Out of the 5 domains selected, the final domain for your team will be disclosed on <span className="text-customOrange">October 4, 2024.</span></li>
              <li>All done, your squad is all set to seize the Code The Cosmos for VCET HACKATHON'24.</li>
              <li>Following are the details of payment.</li>
            </ul>
            <div className="mt-4 flex flex-row space-x-2 sm:space-x-4">
              <button
                className="text-white py-2 px-4 rounded-lg bg-gradient-to-b from-customOrange to-customOrange/90 transition"
                onClick={() => setNeftModalOpen(true)}
              >
                NEFT
              </button>
              <button
                className="text-white py-2 px-6 rounded-lg bg-gradient-to-b from-customOrange to-customOrange/90 transition"
                onClick={() => setUpiModalOpen(true)}
              >
                UPI
              </button>
            </div>
          </div>
        </div>

        {/* NEFT Modal */}
        <Modal
          open={isNeftModalOpen}
          onClose={handleModalClose}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
          closeIcon={closeIcon}
          styles={{
            modal: { borderRadius: '12px', padding: '30px', backgroundColor: '#212529' }
          }}
        >
          <h2 className='text-2xl font-bold text-customOrange mb-4'>NEFT Details</h2><hr />
          <p className='text-lg font-semibold text-white mt-5 mb-2'>NAME: Vedant Sharad Patil</p>
          <p className='text-lg font-semibold text-white my-2'>Account No: 018100100013886</p>
          <p className='text-lg font-semibold text-white'>IFSC: BACB0000018</p>
        </Modal>

        {/* UPI Modal */}
        <Modal
          open={isUpiModalOpen}
          onClose={handleModalClose}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
          styles={{
            modal: { borderRadius: '12px', padding: '30px', backgroundColor: '#212529' }
          }}
          closeIcon={closeIcon}
        >
          <h2 className='text-2xl font-bold text-customOrange mb-4'>UPI Details</h2>
          <img src={qr} alt="UPI QR Code" className="w-80 h-full rounded-lg shadow-lg" />
        </Modal>
      </div>
    </div>
  );
};

export default Guidelines;
