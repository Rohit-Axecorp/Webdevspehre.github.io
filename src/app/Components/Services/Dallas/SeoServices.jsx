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
                    <h5 className="text-lg font-bold mb-4 text-gray-500">THE PROMISE WE STAND BY
                    </h5>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Your Trusted SEO Company Dallas for More Than 20 Years
                    </h3>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Our clients have garnered great results with us
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">3x
                                </div>
                                <div className="text-sm">INCREASE IN WEB TRAFFIC
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">55%</div>
                                <div className="text-sm">BOOST IN LEAD GENERATION
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">200%</div>
                                <div className="text-sm">
                                    GROWTH IN CONVERSION RATE
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">70%</div>
                                <div className="text-sm">GROWTH IN ROI</div>
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
                                Ever since we&apos;ve partnered with Web Dev Sphere, it has totally changed our SEO strategies, leading to more leads and sales.
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Jacob Smith, CEO of Bee
                            </p>

                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                Web Dev Sphere is a game-changer. Their experts helped us rank on Google&apos;s first page within 6 months. I highly recommend them!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Samantha Daniel, Founder of Glint Resorts
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                Thanks to Web Dev Sphere, our organic traffic witnessed a high-scale boost. Their team truly cares about our success. Job well done!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Chris Simon, Manager at Prime Solutions
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
