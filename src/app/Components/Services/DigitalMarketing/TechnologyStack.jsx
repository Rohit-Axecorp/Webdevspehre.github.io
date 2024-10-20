"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const logos = [
    '/Images/technology-icon-1.svg',
    '/Images/technology-icon-2.svg',
    '/Images/technology-icon-3.svg',
    '/Images/technology-icon-4.svg',
    '/Images/technology-icon-5.svg',
    '/Images/technology-icon-6.svg',
    '/Images/technology-icon-7.svg',
    '/Images/technology-icon-8.svg',
    '/Images/technology-icon-9.svg',
    '/Images/technology-icon-10.svg',
    '/Images/technology-icon-11.svg',
    '/Images/technology-icon-12.svg',
    '/Images/technology-icon-13.svg',
    '/Images/technology-icon-14.svg',
    '/Images/technology-icon-15.svg',
    '/Images/technology-icon-16.svg',
    '/Images/technology-icon-17.svg',
    '/Images/technology-icon-18.svg',
    '/Images/technology-icon-19.svg',
    '/Images/technology-icon-20.svg',
    '/Images/technology-icon-21.svg',
    '/Images/technology-icon-22.svg',
    '/Images/technology-icon-23.svg',
    '/Images/technology-icon-24.svg',
    '/Images/technology-icon-25.svg',
    // Add more logo paths if needed
];

export default function TechnologyStack() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="py-12 container">

                    <h2 className="text-4xl font-bold mb-4 text-center">Social Media Marketing Technology Stack</h2>
                    <p className="text-center text-lg mb-12 md:mx-20">
                        We are experts with highly innovative and cutting-edge digital technology, built exclusively around your business vision.
                    </p>
                    <Swiper
                        slidesPerView={12}  // Show 12 logos at a time
                        spaceBetween={20}   // Space between logos
                        loop={true}         // Infinite loop
                        autoplay={{
                            delay: 3000,     // Delay between slides
                            disableOnInteraction: false,
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center bg-white shadow-md w-[95px] h-[95px] rounded-md">
                                    <img
                                        src={logo}
                                        alt={`Logo ${index + 1}`}
                                        className="max-w-[60px] max-h-[60px] object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
