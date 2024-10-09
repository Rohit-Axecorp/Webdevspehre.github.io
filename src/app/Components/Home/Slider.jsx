"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Web Development",
        description: "Our web development services are focused on delivering high-performance, scalable solutions. Whether it’s a simple website or a complex web app, we ensure top quality and functionality.",
        icon: "/Images/serv-icon-5.png"
    }
];

export default function Slider() {
    return (
        <>
            <div className=' xl:w-2/3 lg:w-1/2 w-full'>
                <Swiper
                    spaceBetween={20}   // Space between each slide
                    slidesPerView={3}    // Show 3 slides at once
                    slidesPerGroup={1}   // Move one slide at a time
                    loop={true}          // Enable infinite loop
                    pagination={{ clickable: true }}  // Optional: enable pagination
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1366: { slidesPerView: 3 }
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="relative bg-[#ED1E3A] text-white p-8 rounded-xl shadow-lg flex flex-col items-start h-full min-h-[300px] justify-between group">
                                <img
                                    src={slide.icon}
                                    alt={`${slide.title} Icon`}
                                    className="w-20 h-20 mb-4 object-contain z-10" // Ensure image stays above the background
                                />
                                <h3 className="text-2xl font-bold mb-4 z-10">{slide.title}</h3>
                                <p className="text-base leading-relaxed flex-grow z-10">{slide.description}</p>

                                {/* Background image on hover */}
                                <div className="absolute inset-0 bg-center bg-no-repeat rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                                    style={{ backgroundImage: `url('/Images/download.svg')` }}>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
