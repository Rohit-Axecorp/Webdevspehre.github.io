"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        heading: 'Manufacturing',
        image: '/Images/service-development4.webp',
        contentHeading: 'Manufacturing',
        contentParagraph: 'This is the description for slide 1. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Automotive',
        image: '/Images/service-development5.webp',
        contentHeading: 'Manufacturing',
        contentParagraph: 'This is the description for slide 2. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Healthcare',
        image: '/Images/service-development6.webp',
        contentHeading: 'Healthcare',
        contentParagraph: 'This is the description for slide 3. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Education',
        image: '/Images/service-development7.webp',
        contentHeading: 'Education',
        contentParagraph: 'This is the description for slide 4. It contains detailed information about the image and title of this slide.',
    },
    {
        heading: 'Technology',
        image: '/Images/service-development8.webp',
        contentHeading: 'Technology',
        contentParagraph: 'This is the description for slide 5. It contains detailed information about the image and title of this slide.',
    },
];

export default function MarketingServices() {
    const [centeredIndex, setCenteredIndex] = useState(1);

    const handleSlideChange = (swiper) => {
        const newActiveIndex = swiper.realIndex;  // Use Swiper's realIndex to track the active slide
        setCenteredIndex(newActiveIndex);
    };

    return (
        <>

        <section className='py-12 container'>
        <h2 className="mb-4 text-center">
                       
                        <span className='text-5xl font-bold '>We Help A Diverse Clientele Build Result-Oriented Social Media Marketing Services
                        </span>
                    </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
                
                {/* Slider Column (60%) */}
                <div className="col-span-3">
                    <Swiper
                        onSlideChange={handleSlideChange}
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredSlides={true}    // Ensure the slides are centered properly
                        loop={true}              // Enable looping
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col items-center ${centeredIndex === index ? 'opacity-100' : 'opacity-50'}`}>
                                    <h2 className="text-2xl font-bold mb-4">{slide.heading}</h2>
                                    <img src={slide.image} alt={slide.heading} className="w-full h-auto max-w-[350px]" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Content Column (40%) */}
                <div className="col-span-2">
                    <div className="sticky top-10 p-5 bg-white">
                        {/* Display the details based on centered slide */}
                        <h2 className="text-3xl font-semibold mb-4">{slidesData[centeredIndex].contentHeading}</h2>
                        <p className='text-xl'>{slidesData[centeredIndex].contentParagraph}</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
