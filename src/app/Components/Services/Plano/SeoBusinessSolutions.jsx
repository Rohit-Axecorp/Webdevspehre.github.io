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
                        <h3 className="text-lg font-semibold mb-4 ">BEST PLANO SEO COMPANY
                        </h3>
                        <h2 className="text-3xl font-bold mb-4 ">We&apos;re the Top Choice As the Top SEO Company in Plano
                        </h2>
                        <p className="mb-4  ">Web Dev Sphere is the premier Plano SEO company you can trust. We specialize in delivering customized SEO solutions tailored to meet the unique needs of all businesses, regardless of size or industry. Our team of experts combines industry knowledge with innovative SEO strategies to enhance your search engine visibility, drive organic traffic, and ultimately increase your revenue. 
                        </p>
                        <p className="mb-4  ">With a proven track record of success and a dedication to client satisfaction, Web Dev Sphere is the best Plano Texas SEO company for long-term growth and success.
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
