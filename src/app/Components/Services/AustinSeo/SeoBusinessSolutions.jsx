"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

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
                        <h4 className="text-lg font-semibold mb-4 ">BEST SEO COMPANY AUSTIN
                        </h4>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-red-500 ">Why Were the No.1 Choice in Austin
                        </h2>
                        <p className="mb-4  ">As the best Austin SEO company, we cover every detail of SEO. From in-depth keyword research to building high-quality backlinks, our comprehensive strategies ensure that your website not only stands out but also effectively reaches your target audience.

                        </p>
                        <p className="mb-4  ">We believe that the key to turning visitors into loyal customers lies in creating a seamless user experience and delivering valuable content. Our SEO company Austin Texas works closely with you to understand your unique business objectives, crafting a customized SEO plan that drives results.

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
