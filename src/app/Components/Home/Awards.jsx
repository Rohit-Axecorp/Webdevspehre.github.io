"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Awards() {
    const awards = [
        { id: 1, image: '/Images/dot-com.webp', title: 'Software World', subtitle: 'Top App Development Companies' },
        { id: 2, image: '/Images/rank-watch.webp', title: 'Web Excellence', subtitle: 'Web Excellence Awards' },
        { id: 3, image: '/Images/inc-5000.webp', title: 'Horizon Award', subtitle: 'Gold Awards Winner 2020' },
        { id: 4, image: '/Images/dot-com.webp', title: 'Dot Comm', subtitle: 'Excellence in Web Creativity' },
        { id: 5, image: '/Images/dot-com.webp', title: 'INC. 5000', subtitle: 'Americas Fastest Growing Companies' },
        { id: 6, image: '/Images/dot-com.webp', title: 'Rank Watch', subtitle: 'Top Web Designing Agencies 2023' },
        { id: 7, image: '/Images/dot-com.webp', title: 'Rank Watch', subtitle: 'Top Web Designing Agencies 2023' },
    ];

    return (
        <div className='bg-gray-100'>
            <div className="container lg:py-16 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* First Column */}
                    <div className="text-left md:w-1/2">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">Celebrating Excellence: Awards that Reflect Our Credibility
                        </h3>
                        <p className="text-lg mt-4">
                            Honored as a web development company, WebDev Sphere maintains a reputation for innovation and quality, which has helped us be awarded for our work in the industry. These accolades perfectly represent our never-ending desire to provide best-in-class solutions as a web development company USA. Each award fuels our passion for what we do, continually pushing boundaries and making impactful digital experiences.
                        </p>
                        <button className="mt-6 px-6 py-2 text-lg font-semibold border-2 text-red-500 border-red-500 rounded-full hover:bg-red-500 hover:text-white">
                            Check Reviews
                        </button>
                    </div>

                    {/* Second Column */}
                    <div className="text-right md:w-1/2 mt-8 md:mt-0">
                        <p className="text-red-500 lg:text-2xl text-lg font-medium">75+ reviews on clutch</p>
                        <div className="flex justify-end">
                            <h3 className="lg:text-[200px] text-[100px] font-bold text-gray-800 leading-none">4.8</h3>
                        </div>
                        <div className="flex md:justify-end justify-center  mt-2">
                            {/* SVG for Stars */}
                            <svg className=' lg:h-[50px] lg:w-[250px] h-[30px] w-[150px]' viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 0L30.6129 17.2746H48.7764L34.0818 27.9508L39.6946 45.2254L25 34.5491L10.3054 45.2254L15.9182 27.9508L1.22359 17.2746H19.3871L25 0Z" fill="#FFB800"></path><path d="M75 0L80.6129 17.2746H98.7764L84.0818 27.9508L89.6946 45.2254L75 34.5491L60.3054 45.2254L65.9182 27.9508L51.2236 17.2746H69.3871L75 0Z" fill="#FFB800"></path><path d="M125 0L130.613 17.2746H148.776L134.082 27.9508L139.695 45.2254L125 34.5491L110.305 45.2254L115.918 27.9508L101.224 17.2746H119.387L125 0Z" fill="#FFB800"></path><path d="M175 0L180.613 17.2746H198.776L184.082 27.9508L189.695 45.2254L175 34.5491L160.305 45.2254L165.918 27.9508L151.224 17.2746H169.387L175 0Z" fill="#FFB800"></path><path d="M225 0L230.613 17.2746H248.776L234.082 27.9508L239.695 45.2254L225 34.5491L210.305 45.2254L215.918 27.9508L201.224 17.2746H219.387L225 0Z" fill="#FFB800"></path></svg>
                        </div>
                    </div>
                </div>

                {/* Swiper Section */}
                <div className="mt-8">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        breakpoints={{
                            100: { slidesPerView: 1 },
                            575: { slidesPerView: 2 },
                            1020: { slidesPerView: 4 },
                            1366: { slidesPerView: 6 }
                        }}
                    >
                        {awards.map(award => (
                            <SwiperSlide key={award.id} className="h-full">
                                <div className="h-72 p-10 border rounded-3xl cursor-pointer bg-[#fff] flex flex-col items-center justify-between group hover:grayscale-0 hover:bg-[#E6E6EC] transition duration-300 ease-in-out">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="h-32 mb-4 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                                    />
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold">{award.title}</h3>
                                        <p className="text-gray-500 mt-2">{award.subtitle}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
