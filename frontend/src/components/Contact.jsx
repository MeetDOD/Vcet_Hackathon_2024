import React from 'react';
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Heading from './Heading';

const Contact = () => {
    return (
        <div id='contactUs' className='text-white font-montserrat'>
            <br /><br /><br /><br />
            <Heading
                title1="Contact"
                title2="Us"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="contact"
            />
            <div className='px-10 sm:px-32 sectionMargin'>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-5 justify-center items-center">
                    <div className='w-full h-full my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                        <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='my-2 text-lg lg:text-2xl md:text-xl text-center text-customOrange font-bold'>
                                Technical Queries
                            </h3>
                            <p className='text-white text-sm lg:text-[15px] font-semibold my-2'>Meet Dodiya<br />+91 9372575530</p>
                            <p className='text-white text-sm lg:text-[15px] font-semibold my-2'>Rehman Khan<br />+91 9175810544</p>
                        </div>
                    </div>
                    <div className='w-full h-full my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                        <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='text-lg lg:text-2xl md:text-xl text-center text-customOrange font-bold my-2'>
                                Other Queries
                            </h3>
                            <p className='text-white text-sm lg:text-[15px] font-semibold my-2'>Shreyas Pathe<br />+91 8637717076</p>
                            <p className='text-white text-sm lg:text-[15px] font-semibold my-2'>Arya Sable<br />+91 8767917131</p>
                        </div>
                    </div>
                    <div className='w-full h-full my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-300 hover:via-gray-600 hover:to-gray-900 transition duration-300'>
                        <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-gray-300/10 group-hover:via-gray-600/10 group-hover:to-gray-900/10 transition duration-300">
                            <h3 className='text-lg lg:text-2xl md:text-xl text-center text-customOrange font-bold my-1'>
                                Address
                            </h3>
                            <p className='text-white flex text-sm lg:text-[15px] flex-row items-center tracking-tight font-bold my-1'>
                                K. T. Marg, Dist-Palghar, Shastri Nagar Vasai West, Maharashtra - 401202
                            </p>
                            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6'>
                                <p className='text-white text-sm lg:text-[15px] flex items-center font-semibold my-2'>
                                    <FaPhoneAlt size={20} className="mr-2" /> 0250-2338234
                                </p>
                                <p className='text-sm lg:text-[15px] text-white flex items-center font-semibold my-2'>
                                    <FaGlobe size={20} className="mr-2" />
                                    <a href="https://vcet.edu.in/" className="hover:underline" target="_blank">
                                        vcet.edu.in
                                    </a>
                                </p>
                            </div>
                            <p className='text-sm lg:text-[15px] text-white flex items-center font-semibold my-1'>
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
                        <h3 className='text-2xl text-center text-customOrange font-bold'>
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
