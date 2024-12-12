"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export default function SeoBusinessSolutions() {

    const images = [
        '/Images/comrade-img-2-scaled-2.jpg',
        '/Images/comrade-img-2-scaled-2.jpg',
        '/Images/comrade-img-2-scaled-2.jpg',
        '/Images/comrade-img-2-scaled-2.jpg',
    ];
    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto md:gap-20 gap-5">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h3 className="text-lg font-semibold mb-4 ">BEST DIGITAL MARKETING AGENCY HOUSTON TEXAS
                        </h3>
                        <h2 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 ">Why Businesses in Houston Choose Us
                        </h2>
                        <p className="mb-4  ">Houston businesses choose us as the best digital marketing agency Houston, TX because we’re all about delivering real, cost-effective results that drive growth. We specialize in digital marketing strategies that work and make a difference. Our team has the experience to know what works, the creativity to try new things, and the passion to push your business forward.
                        </p>
                        <p className="mb-4  ">Our team of experts, including strategists, content creators, web developers, designers, and account managers, collaborate to create customized campaigns that generate leads and boost sales. We view our clients as partners, offering the marketing expertise and resources needed to scale and succeed in today’s competitive digital landscape.
                        </p>
                    </div>

                    {/* Right Column - Image Slider */}
                    <div className="md:w-1/2">
                        <Swiper
                            //   modules={[Pagination]}
                            //   navigation
                            pagination={{ clickable: true }}
                            className="h-full"
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}
