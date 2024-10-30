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
                        Reliable SEO Company in Fort Worth for Business Growth
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
                                <div className="text-4xl font-bold mb-2">4x
                                </div>
                                <div className="text-sm">BOOST IN LEAD GENERATION


                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">65%
                                </div>
                                <div className="text-sm">BOOST IN PAGE VIEWS
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">150%</div>
                                <div className="text-sm">
                                    GROWTH IN CONVERSION RATE
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">45%
                                </div>
                                <div className="text-sm">GROWTH IN REVENUE
                                </div>
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
                            Web Dev Sphere transformed our online presence! Their SEO expertise helped us rank higher on Google and attract more customers.
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Emily Wright, CEO of Vintage
                            </p>

                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                            Absolutely worth partnering with them. Their SEO expertise has led us to improve our search rankings and online reach. Thank you!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Simon Carlos, Manager at Xamion

                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                            Since working with Web Dev Sphere, our online leads have doubled! Their SEO services gave us the competitive edge we needed. 
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Jonas Jones, Founder of Street Biz
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
