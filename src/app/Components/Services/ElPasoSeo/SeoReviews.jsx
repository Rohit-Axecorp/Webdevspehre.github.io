"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Amanda R.',
      role: 'Marketing Manager',
      content: 'Working with the link-building team was a game changer! They helped us secure high-quality backlinks that significantly improved our rankings. Highly recommend this SEO company El Paso!',
      stars: 5,
    },
    {
      name: 'John T.',
      role: 'Content Strategist',
      content: 'The SEO content optimization services provided by this team have been exceptional. Our website traffic has doubled, and engagement is at an all-time high. The best decision we made was choosing the SEO company in El Paso.',
      stars: 5,
    },
    {
      name: 'Emily W.',
      role: 'Operations Lead',
      content: 'Their on-page SEO expertise transformed our website. From improved loading speeds to better rankings, the results speak for themselves. A reliable partner for SEO services in El Paso TX.',
      stars: 5,
    },
    {
      name: 'Carlos M.',
      role: 'Business Owner',
      content: 'Local SEO was crucial for our small business, and they delivered outstanding results. We\'ve seen a huge uptick in foot traffic thanks to this El Paso TX SEO agency.',
      stars: 5,
    },
    {
      name: 'Sarah P.',
      role: 'E-commerce Manager',
      content: 'Technical SEO issues were holding us back, but this team fixed everything seamlessly. They’re the go-to for all SEO services El Paso needs.',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h4 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-12">
          What Our Clients Say About Us
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
