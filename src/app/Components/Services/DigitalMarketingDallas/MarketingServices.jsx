"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        heading: 'Restaurant',
        image: '/Images/service-development8.webp',
        contentHeading: 'Restaurant',
        contentParagraph: 'Our digital marketing services Dallas are designed to help your restaurant shine. Whether it’s improving your online presence, creating a buzz on social media, or running targeted ads to fill your tables, we’ve got your back.',
    },
    {
        heading: 'Real Estate',
        image: '/Images/service-development7.webp',
        contentHeading: 'Real Estate',
        contentParagraph: 'Looking for the best digital marketing agencies Dallas? We offer tailored digital marketing services for real estate professionals. From optimizing your online presence with SEO to creating targeted ad campaigns, we connect you with the right buyers and sellers.',
    },
    {
        heading: 'Technology',
        image: '/Images/service-development8.webp',
        contentHeading: 'Technology',
        contentParagraph: 'Staying ahead of the competition requires innovative marketing strategies. Our expertise spans SEO, PPC advertising, social media management, and engaging content creation to ensure your tech business reaches the right audience.',
    },
    {
        heading: 'Business Consulting',
        image: '/Images/service-development8.webp',
        contentHeading: 'Business Consulting',
        contentParagraph: 'Our business consulting services are designed to help you unlock your company’s full potential. Whether you’re looking to streamline operations, improve profitability, or develop a winning strategy, we bring the expertise you need to succeed.',
    },
    {
        heading: 'Education',
        image: '/Images/service-development4.webp',
        contentHeading: 'Education',
        contentParagraph: 'As a leading digital marketing agency in Dallas, we help educational institutions connect with their target audience effectively. Our SEO-driven campaigns enhance visibility for schools, colleges, and online learning platforms.',
    },
    {
        heading: 'Manufacturing',
        image: '/Images/service-development8.webp',
        contentHeading: 'Manufacturing',
        contentParagraph: 'The manufacturing industry thrives on efficiency, innovation, and staying competitive in a global market. Our digital marketing services are tailored to help manufacturers optimize processes, reduce costs, and boost productivity.',
    },
    {
        heading: 'Healthcare',
        image: '/Images/service-development5.webp',
        contentHeading: 'Healthcare',
        contentParagraph: 'Trust and accessibility are essential in the healthcare sector. As the top Dallas TX digital marketing agency, we specialize in boosting the online presence of clinics and hospitals. From being a widely known web development company, we make your business stand out!',
    },
    {
        heading: 'Automotive',
        image: '/Images/service-development8.webp',
        contentHeading: 'Automotive',
        contentParagraph: 'Our digital marketing services are designed to drive success in the automotive industry. Whether you’re a car dealership, repair shop, or manufacturer, we help you connect with your audience and stand out from the competition.',
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
                    <span className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                        Industries We Serve As A Leading Digital Marketing Agency Dallas TX
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
                                        <h2 className="2xl:text-2xl text-xl font-bold mb-4">{slide.heading}</h2>
                                        <img src={slide.image} alt={slide.heading} className="w-full h-auto max-w-[250px] md:max-w-[350px]" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Content Column */}
                    <div className="col-span-2">
                        <div className="p-5 bg-white">
                            <h2 className="2xl:text-2xl text-xl md:text-[#ED1E3A] font-semibold mb-4">{slidesData[centeredIndex].contentHeading}</h2>
                            <p className="2xl:text-lg lg:text-base text-sm">{slidesData[centeredIndex].contentParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
