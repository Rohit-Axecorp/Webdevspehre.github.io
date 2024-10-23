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
                        Providing SEO services to Chicago businesses and eCommerce stores since 2008
                    </h1>

                </div>

                {/* Right Column: Slider */}
                <div className="flex-1 md:w-1/2 w-full">

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Average results generated for our clients
                        </div>
                        <div className='flex flex-wrap'>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">2.5x</div>
                                <div className="text-sm">Increase in SEO Traffic</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">120%</div>
                                <div className="text-sm">Increase in PPC Revenue</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">70%</div>
                                <div className="text-sm">Sales Qualified Leads Increase</div>
                            </div>
                            <div className="flex flex-col mb-4 md:w-1/4 w-full">
                                <div className="text-4xl font-bold mb-2">35%</div>
                                <div className="text-sm">Conversion Rate Increase</div>
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
                                My experience includes working with many web and SEO companies in Chicago doing business with some of my smallest and largest clients. Comrade has worked for Yahoo Auto and Tetra-Pak (both billion dollar companies). And I highly recommend them! The pricing is also very affordable for the high-quality work they do.

                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                We started to work with Comrade Digital Marketing Agency in 2015. In 6 months from being nowhere on Google, we achieved Top local SEO results for the best keywords in my industry. Our website conversion rate improved from 1.06% to 2.26%.<br />
                                Now, after 12 months, we increased the total amount of leads from the website by 40% with organic SEO and we haven&apos;t been using adWords for a long time.<br />
                                I highly recommend this company! They provided excellent customer service and did what they said they would
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="mb-4">
                                My experience includes working with many web and SEO companies in Chicago doing business with some of my smallest and largest clients. Comrade has worked for Yahoo Auto and Tetra-Pak (both billion dollar companies). And I highly recommend them! The pricing is also very affordable for the high-quality work they do.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                    <p className="font-semibold mt-4 text-gray-500">MICHAEL QUINTOS / MARKETING DIRECTOR</p>
                </div>
            </div>
        </section>
    );
}
