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
                        Scaling Up Businesses with Exceptional SEO Services in El Paso
                    </h3>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Our Clients Have Achieved Outstanding Results with Us:
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">90%
                                </div>
                                <div className="text-sm">Improvement in Search Rankings
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">4x</div>
                                <div className="text-sm">Boost in Organic Traffic

                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">200%</div>
                                <div className="text-sm">Increase in Click-Through Rate (CTR)</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">65%</div>
                                <div className="text-sm">Reduction in Bounce Rate</div>
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
                                Transforming local businesses into digital powerhouses with proven SEO strategies
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Sarah Johnson, Manager at GreenTech Solutions</p>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
