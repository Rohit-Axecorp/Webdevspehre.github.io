"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

export default function SeoBusinessSolutions() {

    const images = [
        '/Images/Best SEO Company Austin.png',
    ];
    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto md:gap-20 gap-5">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h4 className="text-lg font-semibold mb-4 ">BEST SEO COMPANY SAN ANTONIO
                        </h4>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#ED1E3A] ">Why Choose Us as Your Ultimate SEO Company San Antonio

                        </h2>
                        <p className="mb-4  ">We are an SEO agency in San Antonio with extensive experience and a dedication to excellence. With the help of advanced tools and tested techniques, we make sure your business becomes prominent in a digital environment.
                        </p>
                        <p className="mb-4  ">Don’t hesitate to contact us since we’re not another SEO company San Antonio TX; we are your strategic partner. Be it search ranking, traffic, or conversion that’s why we focus on your pain points.
                        </p>
                        <p className="mb-4  ">When you invest in long-term success, you’re partnering with us. Our San Antonio expert SEO service provides you with actionable insights, ongoing support, and tailored strategies for your unique goals.
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
