"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Simon Lee',
      role: 'Manager at Duo Link',
      content: 'Working with Web Dev Sphere has been a game-changer. Our website traffic has doubled, and we\'re ranking for keywords we didn’t think were possible. They really know their stuff and are genuinely invested in our success!',
      stars: 5,
    },
    {
      name: 'Christina Rowen',
      role: 'Founder of Xerox Digital',
      content: 'I’m blown away by the results! Web Dev Sphere took the time to understand our business and tailored everything to our needs. Thanks to them, our online visibility has skyrocketed. I couldn’t be happier with the outcome!',
      stars: 5,
    },
    {
      name: 'Rachel Evans',
      role: 'CEO of Swift Inc.',
      content: 'We saw noticeable results within the first few months. These folks truly know SEO and how to get businesses seen. Web Dev Sphere kept us informed every step of the way, and it’s clear they care about helping us grow.',
      stars: 5,
    },
    {
      name: 'Daniel Kim',
      role: 'Senior Manager at MarketEdge',
      content: 'We went from barely being found online to consistently appearing on the first page. Web Dev Sphere\'s team is professional, responsive, and makes everything easy to understand. I highly recommend their services!',
      stars: 5,
    },
    {
      name: 'Oliver Chen',
      role: 'Sales Manager at Horizon Web',
      content: 'We’re thrilled with the results! Not only has our website traffic improved, but we’re also getting better-quality leads. Web Dev Sphere\'s team is knowledgeable, friendly, and always kept us updated.',
      stars: 5,
    }

  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
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
