"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        heading: 'Manufacturing',
        image: '/Images/service-development4.webp',
        contentHeading: 'Manufacturing',
        contentParagraph: 'This is the description for the Manufacturing slide. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Automotive',
        image: '/Images/service-development5.webp',
        contentHeading: 'Automotive',  // Corrected from 'Manufacturing' to 'Automotive'
        contentParagraph: 'This is the description for the Automotive slide. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Healthcare',
        image: '/Images/service-development6.webp',
        contentHeading: 'Healthcare',
        contentParagraph: 'This is the description for the Healthcare slide. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Education',
        image: '/Images/service-development7.webp',
        contentHeading: 'Education',
        contentParagraph: 'This is the description for the Education slide. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Technology',
        image: '/Images/service-development8.webp',
        contentHeading: 'Technology',
        contentParagraph: 'This is the description for the Technology slide. It contains detailed information about the image and title of this slide.',
    },
];

export default function MarketingServices() {
    const [centeredIndex, setCenteredIndex] = useState(1);

    const handleSlideChange = (swiper) => {
        const newActiveIndex = swiper.realIndex;
        setCenteredIndex(newActiveIndex);
    };

    return (
        <>
            <section className="py-12 container mx-auto px-4">
                <h2 className="mb-8 text-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        We Help A Diverse Clientele Build Result-Oriented Social Media Marketing Services
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-10">
                    {/* Swiper Column */}
                    <div className="col-span-3">
                        <Swiper
                            onSlideChange={handleSlideChange}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {slidesData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`flex flex-col items-center transition-opacity duration-500 ${centeredIndex === index ? 'opacity-100' : 'opacity-50'}`}>
                                        <h2 className="text-lg md:text-2xl font-bold mb-4">{slide.heading}</h2>
                                        <img src={slide.image} alt={slide.heading} className="w-full h-auto max-w-[250px] md:max-w-[350px]" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Content Column */}
                    <div className="col-span-2">
                        <div className="p-5 bg-white">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{slidesData[centeredIndex].contentHeading}</h2>
                            <p className="text-base md:text-xl">{slidesData[centeredIndex].contentParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
