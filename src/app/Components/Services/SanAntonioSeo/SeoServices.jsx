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
                    <h5 className="text-lg font-bold mb-4 text-gray-500">OUR COMMITMENT TO EXCELLENCE
                    </h5>
                    <h3 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Boosting Online Presence of San Antonio Businesses with Strategic SEO
                    </h3>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Our Clients Have Achieved Exceptional Results with Us
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">90%
                                </div>
                                <div className="text-sm">Improvement in Organic Search Rankings

                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">4x</div>
                                <div className="text-sm">Boost in Website Traffic
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">200%</div>
                                <div className="text-sm">Growth in Click-Through Rates (CTR)</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">65%</div>
                                <div className="text-sm">Reduction in Bounce Rates</div>
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
                                Transforming Strategies into Success – Let’s Grow Together!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Sarah Johnson, Manager at GreenTech Solutions</p>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
