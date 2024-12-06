"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Samantha Taylor',
      role: 'Senior Manager at Luminous & Co.',
      content: 'Web Dev Sphere transformed our online visibility! We moved from barely showing up on Google to ranking on the first page for our top keywords. Their team’s SEO expertise coupled with a hands-on approach made all the difference.',
      stars: 5,
    },
    {
      name: 'Zoe Chris',
      role: 'Founder of Neon Digit',
      content: 'I couldn’t be happier with Web Dev Sphere\'s SEO services! The team was super knowledgeable and always kept us in the loop. Our search rankings have improved fast. The best SEO company in Dallas, TX!',
      stars: 5,
    },
    {
      name: 'Mason Brooks',
      role: 'Head of Sales at Denver Solutions',
      content: 'Working with Web Dev Sphere has been a game-changer! They took the time to understand our needs and delivered results beyond our expectations. Our website traffic has skyrocketed, and we’re getting more leads than ever.',
      stars: 5,
    },
    {
      name: 'Sara Davis',
      role: 'Manager at Orleans Inc.',
      content: 'I was skeptical at first, but the results speak for themselves. The team at Web Dev Sphere truly understands the Dallas market. Their expertise in local SEO helped us reach more customers than ever. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Blake Robins',
      role: 'Founder of Silver Line',
      content: 'I’m so glad I chose Web Dev Sphere for our SEO needs! Their team knows how to navigate the competitive Dallas landscape. We’ve attracted new customers and increased our online leads. I couldn’t be happier with the results!',
      stars: 5,
    },

  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h4 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Real Reviews. Real Results.
        </h4>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]} // Make sure to add modules
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="mb-4">
                  <p className="text-lg sm:text-xl font-semibold mb-2">{testimonial.name}</p>
                  <p className="text-sm sm:text-base font-medium mb-2">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-lg sm:text-xl mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{testimonial.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
