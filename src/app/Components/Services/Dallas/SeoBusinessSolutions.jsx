"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

export default function SeoBusinessSolutions() {

    const images = [
        '/Images/comrade-img-2-scaled-2.jpg',
    ];
    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto md:gap-20 gap-5">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h4 className="text-lg font-semibold mb-4 ">BEST DALLAS SEO COMPANY
                        </h4>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-red-500">Why Our Dallas SEO Company Is The No.1 Choice
                        </h2>
                        <p className="mb-4  ">Web Dev Sphere is not just the Dallas SEO company, we are a team that genuinely cares about your success. We fully believe that growing your online presence takes way more than just keywords and algorithms, but an approach addressed to your specific goals.
                        </p>
                        <p className="mb-4  ">We are the best SEO company Dallas that covers every minor detail of SEO, from researching the best keywords and optimizing the structure of your site to building high-quality links. We make sure your website stands out, reaches the right audience, and turns visitors into loyal customers.
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
