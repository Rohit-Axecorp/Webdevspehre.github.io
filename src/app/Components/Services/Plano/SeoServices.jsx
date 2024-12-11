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
                    <h5 className="2xl:text-lg texl-base font-bold mb-4 text-gray-500">OUR PROMISE

                    </h5>
                    <h3 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                        Trusted Plano SEO Company: 20+ Years of Proven Success
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
                                <div className="text-4xl font-bold mb-2">2.5x

                                </div>
                                <div className="text-sm">INCREASE IN ORGANIC TRAFFIC

                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">65%
                                </div>
                                <div className="text-sm">BOOST IN LEAD GENERATION

                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">150%</div>
                                <div className="text-sm">GROWTH IN CTR</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">60%</div>
                                <div className="text-sm">GROWTH IN REVENUE GENERATION
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
                                We&apos;ve partnered with them for over a year, and the results are fantastic. Our organic traffic has skyrocketed, and our sales have grown. Highly recommended!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Matt Simon, CEO of Plain Inc.
                            </p>

                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                Thanks to Web Dev Sphere&apos;s SEO Plano strategies, our leads have increased, and we&apos;re seeing more conversions. Their service is top-notch!
                            </p>
                            <p className="font-semibold mt-4 text-gray-500">Christina Brooks, Manager at Vincent Gallery

                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                We struggled with visibility until we worked with Web Dev Sphere. Our site now ranks on the first page. They&apos;re knowledgeable and easy to work with!

                            </p>
                            <p className="font-semibold mt-4 text-gray-500">John Frederick, HOD at Kivinsky Corp.

                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
