"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SocialMediaBusinessSolutions() {

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
                        <h3 className="text-lg font-semibold mb-4 ">BEST SEO AND SOCIAL MEDIA MARKETING SERVICES
                        </h3>
                        <h2 className="text-[#ED1E3A]xl font-bold mb-4 ">Why We’re the Top Choice in the USA
                        </h2>
                        <p className="mb-4">Searching for social media marketing services near me? Choosing us as your social media marketing partner means choosing a team that’s passionate about your brand’s growth. We understand that social media is more than just a marketing channel, it’s a platform for storytelling and building relationships. Our experienced professionals are committed to developing innovative strategies that capture your audience&apos;s attention and inspire action.
                        </p>
                        <p className="mb-4">With a focus on collaboration and transparency, we keep you involved every step of the way, ensuring that your vision comes to life.
                        </p>
                    </div>

                    {/* Right Column - Image Slider */}
                    <div className="md:w-1/2">
                        <Swiper
                            //   modules={[Pagination]}
                            //   navigation
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
