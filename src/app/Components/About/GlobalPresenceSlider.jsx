"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function GlobalPresenceSlider() {
    const locations = [
        {
            city: "Sharjah",
            image: "/Images/Sharjah.webp",
            address: "office #101 32 St Al Majarra Mughaidhir Suburb Sharjah UAE",
            phone: "+971 55 503 1266",
            email: "info@bitswits.co",
        },
        {
            city: "Houston",
            image: "/Images/Houston.webp",
            address: "123 Example Street, Houston, TX",
            phone: "+1 234 567 890",
            email: "houston@example.com",
        },
        {
            city: "Chicago",
            image: "/Images/Chicago.webp",
            address: "456 Example Ave, Chicago, IL",
            phone: "+1 234 567 890",
            email: "chicago@example.com",
        },
        {
            city: "Dubai",
            image: "/Images/Dubai.webp",
            address: "789 Example Blvd, Dubai, UAE",
            phone: "+971 55 123 4567",
            email: "dubai@example.com",
        },
        {
            city: "Houston",
            image: "/Images/Houston.webp",
            address: "123 Example Street, Houston, TX",
            phone: "+1 234 567 890",
            email: "houston@example.com",
        },
        {
            city: "London",
            image: "/Images/londonimage.jpg",
            address: "123 Example Street, Houston, TX",
            phone: "+1 234 567 890",
            email: "houston@example.com",
        },
    ];

    return (
        <section className="bg-black 2xl:py-12 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-8 text-center text-white">Our Global Presence</h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {locations.map((location, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group rounded-lg overflow-hidden">
                                <Image
                                    src={location.image}
                                    alt={location.city}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h3 className="text-xl md:text-2xl font-bold">{location.city}</h3>
                                        <p className="mt-2 text-sm md:text-base">{location.address}</p>
                                        <p className="mt-1 text-sm md:text-base">📞 {location.phone}</p>
                                        <p className="mt-1 text-sm md:text-base">✉️ {location.email}</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-black text-3xl lg:text-4xl 2xl:text-5xl group-hover:opacity-0 transition-opacity duration-300">
                                    {location.city}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
