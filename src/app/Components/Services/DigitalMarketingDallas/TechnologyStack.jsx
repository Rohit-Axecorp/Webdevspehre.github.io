"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
];

export default function TechnologyStack() {
    return (
        <section className='bg-gray-100'>
            <div className="py-12 container mx-auto">
                <h2 className="text-[#ED1E3A]xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Dallas Forth Worth Digital Marketing Agency Technology Stack
                </h2>
                <p className="text-center text-lg mb-12 md:mx-20">
                    As a leading digital marketing agency in Dallas, we leverage the latest tools and platforms to provide comprehensive digital marketing solutions.
                </p>
                <div className="flex justify-center">
                    <Swiper
                        slidesPerView={2}  // Default value for smaller screens
                        spaceBetween={20}
                        breakpoints={{
                            1280: {
                                slidesPerView: 12,
                            },
                            1024: {
                                slidesPerView: 8,
                            },
                            768: {
                                slidesPerView: 6,
                            },
                            640: {
                                slidesPerView: 4,  // Show 4 logos for 640px and up
                            },
                            320: {
                                slidesPerView: 3,  // Show 2 logos for smaller screens
                            },
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
            </div>
        </section>
    );
}
