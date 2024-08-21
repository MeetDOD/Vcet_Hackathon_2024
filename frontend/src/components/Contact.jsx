import React from 'react';
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Heading from './Heading';

const Contact = () => {
    return (
        <div className='text-white font-montserrat'>
            <Heading
                title1="Contact"
                title2="Us"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="problmes"
            />
            <div className='px-10 sm:px-32 sectionMargin'>
                <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2' style={{ gridAutoRows: "96px" }}>
                    <div className='row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                        <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='text-2xl text-center text-customOrange font-semibold'>
                                Technical Queries
                            </h3>
                            <p className='text-white'>Meet Dodiya<br />+91 9372575530</p>
                            <p className='text-white'>Rehman Khan<br />+91 9175810544</p>
                        </div>
                    </div>

                    <div className='py- row-start-1 row-end-3 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900'>
                        <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='text-2xl text-center text-customOrange font-semibold'>
                                Other Queries
                            </h3>
                            <p className='text-white'>Kashish Bhanushali<br />+91 9561650242</p>
                            <p className='text-white'>Ramesh Yadav<br />+91 9096377491</p>
                        </div>
                    </div>

                    <div className='row-start-1 row-end-3 group rounded-2xl text-center p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900'>
                        <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='text-2xl text-center text-customOrange font-semibold'>
                                Address
                            </h3>
                            <p className='text-white flex flex-row items-center tracking-tight'>
                                K. T. Marg, Dist-Palghar, Shastri Nagar Vasai West, Maharashtra - 401202
                            </p>
                            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6'>

                                <p className='text-white flex items-center'>
                                    <FaPhoneAlt size={20} className="mr-2" /> 0250-2338234
                                </p>
                                <p className='text-white flex items-center'>
                                    <FaGlobe size={20} className="mr-2" />
                                    <a href="https://vcet.edu.in/" className="hover:underline" target="_blank">
                                        https://vcet.edu.in
                                    </a>
                                </p>

                            </div>
                            <p className='text-white flex items-center'>
                                <MdEmail size={20} className="mr-2" />
                                <a href="mailto:vcet.hackathon@vcet.edu.in" className="hover:underline">
                                    vcet.hackathon@vcet.edu.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900'>
                    <div className="gap-6 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                        <h3 className='text-2xl text-center text-customOrange font-semibold'>
                            Google Map Location
                        </h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15054.639927034408!2d72.828734!3d19.38387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd1a4ca919d6a613!2sVidyavardhini%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1661270315076!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            frameborder="0"
                            style={{ border: 0, borderRadius: '16px' }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
