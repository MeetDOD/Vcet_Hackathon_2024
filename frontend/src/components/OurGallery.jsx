import React from 'react';
import Heading from "./Heading";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

// Import images
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img7 from '../assets/img/7.jpeg'; 
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/3.jpg';
import img8 from '../assets/img/8.jpg';

const OurGallery = () => {
    return (
        <div className="font-montserrat text-white">
            <Heading
                title1="Event"
                title2="Gallery"
                subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
                sectionId="aboutUs"
            />
            <div className='flex items-center justify-center'>
                <div className="flex justify-center items-center w-full max-w-screen-lg p-4">
                    <Gallery>
                        <div className="w-full">
                            {/* Desktop Layout */}
                            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Image 5 */}
                                <div className='col-span-1 lg:col-span-1'>
                                    <Item
                                        original={img5}
                                        thumbnail={img5}
                                        width="896"
                                        height="597"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img5}
                                                    alt="Gallery Image 5"
                                                    className="object-cover w-full h-[400px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                </div>

                                {/* Remaining Images */}
                                <div className='col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4'>
                                    {/* Image 1 */}
                                    <Item
                                        original={img1}
                                        thumbnail={img1}
                                        width="800"
                                        height="450"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img1}
                                                    alt="Gallery Image 1"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>

                                    {/* Image 2 */}
                                    <Item
                                        original={img2}
                                        thumbnail={img2}
                                        width="800"
                                        height="600"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img2}
                                                    alt="Gallery Image 2"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 4 */}
                                    <Item
                                        original={img4}
                                        thumbnail={img4}
                                        width="961"
                                        height="591"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img4}
                                                    alt="Gallery Image 4"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 6 */}
                                    <Item
                                        original={img6}
                                        thumbnail={img6}
                                        width="960"
                                        height="529"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img6}
                                                    alt="Gallery Image 6"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 7 */}
                                    <Item
                                        original={img7}
                                        thumbnail={img7}
                                        width="1069"
                                        height="607"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img7}
                                                    alt="Gallery Image 7"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 8 */}
                                    <Item
                                        original={img8}
                                        thumbnail={img8}
                                        width="1069"
                                        height="607"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img8}
                                                    alt="Gallery Image 8"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="md:hidden">
                                {/* Image 5 */}
                                <div className='w-full mb-4'>
                                    <Item
                                        original={img5}
                                        thumbnail={img5}
                                        width="896"
                                        height="597"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img5}
                                                    alt="Gallery Image 5"
                                                    className="object-cover w-full h-[400px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                </div>

                                {/* Remaining Images */}
                                <div className='grid grid-cols-2 gap-4'>
                                    {/* Image 1 */}
                                    <Item
                                        original={img1}
                                        thumbnail={img1}
                                        width="800"
                                        height="450"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img1}
                                                    alt="Gallery Image 1"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>

                                    {/* Image 2 */}
                                    <Item
                                        original={img2}
                                        thumbnail={img2}
                                        width="800"
                                        height="600"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img2}
                                                    alt="Gallery Image 2"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 4 */}
                                    <Item
                                        original={img4}
                                        thumbnail={img4}
                                        width="961"
                                        height="591"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img4}
                                                    alt="Gallery Image 4"
                                                    className="object-cover w-full h-[180px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 6 */}
                                    <Item
                                        original={img6}
                                        thumbnail={img6}
                                        width="960"
                                        height="529"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img6}
                                                    alt="Gallery Image 6"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 7 */}
                                    <Item
                                        original={img7}
                                        thumbnail={img7}
                                        width="1069"
                                        height="607"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img7}
                                                    alt="Gallery Image 7"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                    
                                    {/* Image 8 */}
                                    <Item
                                        original={img8}
                                        thumbnail={img8}
                                        width="1069"
                                        height="541"
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                className="relative cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={img8}
                                                    alt="Gallery Image 8"
                                                    className="object-cover w-full h-[200px]"
                                                />
                                            </div>
                                        )}
                                    </Item>
                                </div>
                            </div>
                        </div>
                    </Gallery>
                </div>
            </div>
        </div>
    );
}

export default OurGallery;
