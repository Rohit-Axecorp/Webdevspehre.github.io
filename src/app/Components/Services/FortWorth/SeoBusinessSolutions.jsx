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
                        <h4 className="text-lg font-semibold mb-4 ">BEST SEO COMPANY FORT WORTH
                        </h4>
                        <h2 className="text-3xl font-bold mb-4 ">Why We&apos;re Fort Worth&apos;s Top Choice
                        </h2>
                        <p className="mb-4  ">At Web Dev Sphere, we&apos;re not just another Fort Worth SEO company; we genuinely care about your success. We understand that growing your online presence is about much more than just keywords and algorithms. It&apos;s about crafting a strategy that aligns with your unique goals.
                        </p>
                        <p className="mb-4  ">As the top SEO company in Fort Worth, we pay attention to every detail. From finding the best keywords and optimizing your website&apos;s structure to building high-quality links, we&apos;ve got you covered. Our mission is to make sure your website not only stands out but also connects with the right audience and turns visitors into loyal customers. 
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
