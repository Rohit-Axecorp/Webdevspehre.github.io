"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        heading: 'Education',
        image: '/Images/service-development4.webp',
        contentHeading: 'Education',
        contentParagraph: 'Being one of the top digital marketing agencies in Houston, we empower educational institutions to reach their target audience effectively. We design SEO-driven campaigns that increase visibility for schools, colleges, and online learning platforms.',
    },
    {
        heading: 'Healthcare',
        image: '/Images/service-development5.webp',
        contentHeading: 'Healthcare',
        contentParagraph: 'In the healthcare sector, trust and accessibility are key. We are known as the best digital marketing agency Houston that enhance the online presence of clinics, hospitals, and wellness centers. Our team ensures they are easily discoverable through local SEO and targeted advertising.',
    },
    {
        heading: 'Entertainment',
        image: '/Images/service-development6.webp',
        contentHeading: 'Entertainment',
        contentParagraph: 'We help entertainment companies captivate their audiences with innovative digital marketing strategies. With a mix of social media buzz, influencer collaborations, and creative content, we amplify your brand\'s visibility.',
    },
    {
        heading: 'Real Estate',
        image: '/Images/service-development7.webp',
        contentHeading: 'Real Estate',
        contentParagraph: 'For real estate agencies, visibility and credibility are paramount. Our tailored digital marketing solutions include hyper-local SEO to attract prospective buyers and sellers. We use visually stunning ad creatives and virtual tours to attract potential clients. ',
    },
    {
        heading: 'Travel',
        image: '/Images/service-development8.webp',
        contentHeading: 'Travel',
        contentParagraph: 'The travel industry thrives on inspiration and convenience. Our digital marketing services position your business as the go-to for unforgettable journeys. Through engaging social media content, destination blogs, and SEO, we drive traffic to your website. ',
    },
    {
        heading: 'Food',
        image: '/Images/service-development8.webp',
        contentHeading: 'Food',
        contentParagraph: 'From restaurants to food delivery services, we help food businesses satisfy cravings and build loyal followings. Our services include optimizing local SEO to attract foot traffic and crafting mouthwatering social media campaigns to keep your audience coming back for more. ',
    },
    {
        heading: 'Retail',
        image: '/Images/service-development8.webp',
        contentHeading: 'Retail',
        contentParagraph: 'We develop eCommerce-focused campaigns that drive traffic and conversions through SEO, paid ads, and email marketing. As a leading B2B digital marketing agency Houston, we create buzz around new collections and promotions, while our data analysis ensures every campaign is optimized for success.',
    },
    {
        heading: 'Technology',
        image: '/Images/service-development8.webp',
        contentHeading: 'Technology',
        contentParagraph: 'The technology sector demands a cutting-edge approach to digital marketing. We specialize in creating content that highlights the value of your products and services while simplifying complex concepts for your audience.',
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
                        How Our Digital Marketing Agency Houston Texas Help Businesses
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
                                        <h2 className="text-lg 2xl:text-2xl font-bold mb-4">{slide.heading}</h2>
                                        <img src={slide.image} alt={slide.heading} className="w-full h-auto max-w-[250px] md:max-w-[350px]" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Content Column */}
                    <div className="col-span-2">
                        <div className="p-5 bg-white">
                            <h2 className="text-xl 2xl:text-2xl  md:text-[#ED1E3A] font-semibold mb-4">{slidesData[centeredIndex].contentHeading}</h2>
                            <p className="2xl:text-lg lg:text-base text-sm">{slidesData[centeredIndex].contentParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
