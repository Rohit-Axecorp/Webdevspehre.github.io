"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function SeoRecognition() {
  const combinedLogos = [
    { image: '/Images/Clutch-logo-color.svg', name: 'Clutch' },
    { image: '/Images/google-logo-color.svg', name: 'Google' },
    { image: '/Images/facebook-logo-color.svg', name: 'Facebook' },
    { image: '/Images/yelp-logo-color.svg', name: 'Yelp' },
    { image: '/Images/UpCity-logo-color.svg', name: 'UpCity' },
    { image: '/Images/awwwards.svg', name: 'Awwwards' },
    { image: '/Images/Vector-2.svg', name: 'Vector 2' },
    // { image: '/Images/Frame-4.svg', name: 'Frame 4' },
    // { image: '/Images/Frame-5.svg', name: 'Frame 5' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-8 text-center">
          <h5 className="text-[#ED1E3A] font-semibold text-xl mb-2">Recognition</h5>
          <h5 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-4">
            Industry Awards for Exceptional Performance
          </h5>
        </div>

        {/* All Logos in One Line Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 3, slidesPerGroup: 1 },
            768: { slidesPerView: 4, slidesPerGroup: 1 },
            1024: { slidesPerView: 5, slidesPerGroup: 1 },
            1440: { slidesPerView: 6, slidesPerGroup: 1 },
            1920: { slidesPerView: 6, slidesPerGroup: 1 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >

          {combinedLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  className="w-24 h-auto mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="flex items-center justify-center h-24">
          <a
            href="/get-to-know-us"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600"
          >
            GET TO KNOW US
          </a>
        </div>
      </div>
    </section>
  );
}
