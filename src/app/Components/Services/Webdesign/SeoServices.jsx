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
                    <h2 className="text-lg font-bold mb-4 text-gray-500">OUR PROMISE</h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Offering Results that Speak for Our Web Design Services
                    </h1>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Our clients have achieved exceptional results with us:
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">70%</div>
                                <div className="text-sm"> Improvement in organic <br></br> search rankings
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">4x</div>
                                <div className="text-sm">Increase in website traffic</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">150%</div>
                                <div className="text-sm">Growth in click-through rates</div>
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
                            Transforming Digital Presence for Businesses in Houston to Achieve the Maximum Growth. 

                            </p>
                        </SwiperSlide>
                    </Swiper>
                    <p className="font-semibold mt-4 text-gray-500">MICHAEL QUINTOS / MARKETING DIRECTOR</p>
                </div>
            </div>
        </section>
    );
}
