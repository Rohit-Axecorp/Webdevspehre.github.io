"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export default function SeoBusinessSolutions() {

    const images = [
        '/Images/web-design-3.jpg'
    ];
    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto md:gap-20 gap-5">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h3 className="text-lg font-semibold mb-4 ">BEST CHICAGO SEO COMPANY</h3>
                        <h2 className="text-[#ED1E3A] font-bold mb-4 text-3xl lg:text-4xl 2xl:text-5xl">Why Choose Us as Your Primary Houston Web Design Agency
                        </h2>
                        <p className="mb-4  2xl:text-lg lg:text-base text-sm">WebDev Sphere goes beyond creating websites – we build digital experiences that captivate and convert. As a trusted name among Houston web design companies, our team of experts designs user-centric solutions tailored to your brand’s goals. From mobile responsiveness to SEO-focused strategies, we ensure your website thrives in today’s competitive landscape.
                        </p>
                        <p className="mb-4  2xl:text-lg lg:text-base text-sm">Our approach combines technical expertise with creativity, making us a preferred web design agency Houston. We analyze your business needs, focus on user behavior, and craft designs that resonate with your audience. By leveraging cutting-edge technologies, we deliver seamless and responsive websites that adapt to the ever-changing digital environment.
                        </p>
                        <p className="mb-4  2xl:text-lg lg:text-base text-sm">As leaders in website design in Houston, we pride ourselves on our ability to solve problems proactively. From improving site speed to optimizing for search engines, we address every pain point with precision and care. Choose WebDev Sphere to elevate your brand and enjoy unparalleled growth.
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
