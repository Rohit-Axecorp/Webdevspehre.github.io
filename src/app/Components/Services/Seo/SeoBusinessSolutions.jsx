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
                        <h2 className="text-3xl font-bold mb-4 ">Why Businesses in Chicago Choose Comrade</h2>
                        <p className="mb-4  ">Clients love hiring Comrade because we deliver cost-effective results. We offer the best Chicago SEO services and guarantee growth. Our SEO firm has the experience to know what works, the courage to try new things, and the determination to get your business where it needs to be. While we believe in the data, it&apos;s our passion for SEO that makes the world of difference.
                        </p>
                        <p className="mb-4  ">Our in-house staff of strategists, data scientists, content creators, website developers, and designers, as well as account managers, work together to boost your sales and leads. We like to partner with our clients and consider ourselves to be a marketing extension of their companies, providing the marketing resources they need to take their businesses to the next level.
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
