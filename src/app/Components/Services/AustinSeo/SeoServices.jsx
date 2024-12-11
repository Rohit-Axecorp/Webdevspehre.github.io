"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function SeoServices() {
    return (
        <section className='py-12'>
            <div className="flex flex-col md:flex-row container mx-auto p-8 md:gap-24 gap-5 ">
                {/* Left Column: Our Promise and Statistics */}
                <div className="flex-1 mb-8 md:mr-4 md:w-1/2 w-full">
                    <h5 className="2xl:text-lg texl-base font-bold mb-4 text-gray-500">OUR COMMITMENT TO EXCELLENCE
                    </h5>
                    <h3 className="text-[#ED1E3A]  text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                        Delivering Top-Tier SEO Services to Austin-Based Companies
                    </h3>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="2xl:text-lg lg:text-base text-sm font-bold mb-4">
                            Our clients have garnered great results with us
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2">85%
                                </div>
                                <div className="text-sm">IMPROVEMENTS IN SEARCH RANKINGS
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2">3x</div>
                                <div className="text-sm">BOOST IN PAGE VIEWS
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2">180%</div>
                                <div className="text-sm">GROWTH IN CTR</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2">60%</div>
                                <div className="text-sm">REDUCTION IN BOUNCE RATE</div>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        loop={true}
                        autoplay={{ delay: 3000 }} // Automatic slide transition every 3 seconds
                        pagination={{ clickable: true }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <p className="mb-4">
                                Our organic traffic skyrocketed! The team transformed our website, and leads are flowing in. Highly recommended.
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Sarah Johnson, Manager at GreenTech Solutions</p>

                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                Our CTR has tripled! Web Dev Sphere truly knows how to make your site shine. Best decision we made for our business!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">David Kim, CEO of FreshStart Bakery
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                Incredible results! Our revenue grew significantly, thanks to Web Dev Sphere. We couldn&apos;t be happier with them.
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Michael Rodriguez, Director at AutoVision
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
