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
                        <h3 className="text-lg font-semibold mb-4 ">BEST DIGITAL MARKETING SERVICES DALLAS
                        </h3>
                        <h2 className="text-[#ED1E3A] font-bold mb-4 text-3xl lg:text-4xl 2xl:text-5xl">We’re One of the Best Digital Marketing Agencies Dallas
                        </h2>
                        <p className="mb-4 2xl:text-lg lg:text-base text-sm">As one of the fastest-growing cities in the U.S., Dallas offers unique opportunities for businesses looking to expand their reach, attract new customers, and thrive in an increasingly competitive marketplace. With a rich entrepreneurial spirit and a diverse, tech-savvy population, it&apos;s no surprise that digital marketing has become an essential tool for businesses here.
                        </p>
                        <p className="mb-4 2xl:text-lg lg:text-base text-sm">As a top digital marketing agency in Dallas, we understand the local market and the challenges businesses face in this ever-evolving digital landscape. Our deep knowledge of the Dallas market combined with our expertise in digital marketing at a broader scale makes us the best choice.
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
