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
                        <h3 className="text-lg font-semibold mb-4 ">BEST CHICAGO SEO COMPANY</h3>
                        <h2 className="text-3xl font-bold mb-4 ">Why Choose Us as Your Reliable SEO Company in Houston
                        </h2>
                        <p className="mb-4  ">Our team of SEO specialists delivers tailored solutions that align with your business goals. As the best Houston SEO company, we ensure that every strategy is designed for measurable and sustainable growth.
                        </p>
                        <p className="mb-4  ">We are a local SEO company in Houston known for building trust through consistent results. Our data-driven approach targets pain points and solves them effectively, ensuring your business thrives in today’s competitive digital landscape.
                        </p>
                        <p className="mb-4  ">With our comprehensive SEO services in Houston TX, we deliver exceptional results by combining advanced techniques with industry expertise. Whether you need local visibility or global reach, we’ve got you covered.
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
