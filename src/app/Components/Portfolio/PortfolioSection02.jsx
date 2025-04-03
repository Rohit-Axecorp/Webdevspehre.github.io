"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PortfolioSection02() {

    const awards = [
        { id: 1, image: '/Images/portfolioicon1.webp' },
        { id: 2, image: '/Images/portfolioicon2.webp' },
        { id: 3, image: '/Images/portfolioicon3.webp' },
        { id: 4, image: '/Images/portfolioicon4.webp' },
        { id: 5, image: '/Images/portfolioicon5.webp' },
        { id: 6, image: '/Images/portfolioicon6.webp' },
        { id: 7, image: '/Images/portfolioicon7.webp' },
        { id: 8, image: '/Images/portfolioicon8.webp' },
    ];
    return (
        <>
            <section className='container py-12 2xl:py-16 bg-white' >
                <div className=" bg-white">
                    <div className="container mx-auto text-center px-4 md:px-5">
                        <h2 className=" text-3xl lg:text-4xl 2xl:text-5xl font-extrabold 2xl:mb-4 text-[#ED1E3A]">
                            We’re Featured In
                            <br />
                        </h2>

                    </div>
                </div>

                <div className="mt-12">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            100: { slidesPerView: 1 },
                            575: { slidesPerView: 2 },
                            1020: { slidesPerView: 4 },
                            1366: { slidesPerView: 6 }
                        }}
                    >
                        {awards.map((award, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-auto h-52 border bg-white flex justify-center items-center group relative overflow-hidden">
                                    {/* Animated Borders */}
                                    <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#ED1E3A] group-hover:w-full transition-all duration-200"></span>
                                    <span className="absolute top-0 right-0 h-0 w-[2px] bg-[#ED1E3A] group-hover:h-full transition-all duration-200 delay-150"></span>
                                    <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#ED1E3A] group-hover:w-full transition-all duration-200 delay-300"></span>
                                    <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#ED1E3A] group-hover:h-full transition-all duration-200 delay-500"></span>

                                    {/* Image */}
                                    <img
                                        src={award.image}
                                        alt={`Award ${index}`}
                                        className="h-full max-h-full w-auto object-contain grayscale group-hover:grayscale-0 transition z-10"
                                    />
                                </div>


                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>
        </>
    )
}
