"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

export default function SeoBusinessSolutions() {

    const images = [
        '/Images/student-8.jpg',
    ];
    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto md:gap-20 gap-5">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h4 className="text-lg font-semibold mb-4 ">BEST SEO COMPANY EL PASO
                        </h4>
                        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-[#ED1E3A]">Why Choose Our SEO Company El Paso for Your Business
                        </h2>
                        <p className="mb-4  ">We believe in delivering expertise that is aligned with your business objectives as considered among the best SEO companies El Paso. Whether you need more leads, better rankings, or higher ROI, our tailored strategies plug these holes perfectly. Containing a results-driven approach, we ensure that you stay ahead in the digital space.
                        </p>
                        <p className="mb-4  ">We keep that focus narrowed and combine innovation and the proven method in our SEO services El Paso TX to create sustainable growth. We solve the issues holding you back from succeeding online and tackle things like technical SEO, local appearance, etc.
                        </p>
                        <p className="mb-4  ">As leaders in El Paso TX SEO services, we bring cutting-edge tools and personalized support to every project. From initial analysis to continuous improvement, our team ensures measurable outcomes at every stage. Partner with us and watch your business thrive.

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
