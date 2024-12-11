"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        heading: 'Education',
        image: '/Images/service-development4.webp',
        contentHeading: 'Education',
        contentParagraph: 'We help institutions and organizations build their brand presence and connect with prospective students. Our social media marketing services in USA focus on creating engaging content that showcases academic programs, student achievements, and campus life.',
    },
    {
        heading: 'Healthcare',
        image: '/Images/service-development5.webp',
        contentHeading: 'Healthcare',  // Corrected from 'Manufacturing' to 'Automotive'
        contentParagraph: 'Our social media marketing management services are designed to educate and inform patients while promoting your practice or facility. We create content that addresses common health concerns, showcases your services, and highlights patient success stories.',
    },
    {
        heading: 'Entertainment',
        image: '/Images/service-development6.webp',
        contentHeading: 'Entertainment',
        contentParagraph: 'The entertainment industry thrives on engagement and buzz. We help organizations create captivating content that attracts fans and fosters community. From promoting events to sharing productions, we ensure your brand remains in the spotlight.',
    },
    {
        heading: 'Real Estate',
        image: '/Images/service-development7.webp',
        contentHeading: 'Real Estate',
        contentParagraph: 'We develop strategic social media campaigns that showcase properties with compelling narratives. Our services include virtual tours, neighborhood highlights, and expert market insights that position you as a trusted authority in the market.',
    },
    {
        heading: 'Travel ',
        image: '/Images/service-development8.webp',
        contentHeading: 'Travel ',
        contentParagraph: 'The travel industry is all about experiences, and our social media marketing services capture that essence. We create visually stunning content that highlights destinations, travel tips, and unique experiences.',
    },
    {
        heading: 'Food',
        image: '/Images/service-development8.webp',
        contentHeading: 'Food',
        contentParagraph: 'We create campaigns that promote special events, menu items, and customer experiences, encouraging followers to visit and engage with your brand. By utilizing social media to connect with food lovers, we help you build a loyal customer base and drive foot traffic.',
    },
    {
        heading: 'Retail ',
        image: '/Images/service-development8.webp',
        contentHeading: 'Retail ',
        contentParagraph: 'Our marketing strategies focus on promoting products, sharing customer testimonials, and highlighting sales or promotions. We create visually appealing content that showcases your brands identity and engages your audience.',
    },
    {
        heading: 'Technology ',
        image: '/Images/service-development8.webp',
        contentHeading: 'Technology ',
        contentParagraph: 'Our best social media marketing services are tailored to showcase your innovations and share industry insights. We create content that highlights product features, shares success stories and provides valuable resources.',
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
                <h3 className="mb-8 text-center">
                    <span className="text-[#ED1E3A] sm:text-4xl md:text-5xl font-bold">
                        Industries We Serve for Social Media Marketing Services in USA
                    </span>
                </h3>

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
                            <h2 className="text-2xl md:text-[#ED1E3A] font-semibold mb-4">{slidesData[centeredIndex].contentHeading}</h2>
                            <p className="text-base md:text-xl">{slidesData[centeredIndex].contentParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
