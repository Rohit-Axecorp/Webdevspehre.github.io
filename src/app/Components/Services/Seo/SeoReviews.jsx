"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Anonymous',
      role: 'Sales & Marketing Executive',
      company: 'Hospitality & Leisure Co.',
      content: 'Revenue is up nearly 50%. Victorious has increased the number of keywords that rank on Google and decreased overall dependence on third-party advertising channels. Timely deliveries, flexibility, and effective communication make the process seamless. Positive results maintain value for cost.',
      stars: 5,
    },
    {
      name: 'Bailey James',
      role: 'Senior Content & Marketing Manager',
      company: 'Tenstreet',
      content: 'Our search rankings soared, including top-slot rankings for some of our most important business functions, making us far more discoverable to potential prospects. I&apos;m most impressed with their incredible customer service and hands-on account management.',
      stars: 5,
    },
    {
      name: 'Dave Loftus',
      role: 'Owner',
      company: 'Blomdahl USA',
      content: 'After several false starts with a few other SEO companies I can confidently share that Victorious SEO is the real deal. They are easy to work with, very proactive and completely transparent. Considering my prior SEO experiences I found the results startling. Three and a half months in and I see concrete, measurable results. ROI after such a short time? 422%! Really.',
      stars: 5,
    },
    {
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Innovations',
      content: 'The level of expertise and support provided by Victorious SEO has truly transformed our digital presence. We&apos;ve seen a massive boost in our organic traffic and sales conversions in just a few months.',
      stars: 5,
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      company: 'Creative Solutions',
      content: 'Their approach to SEO has been exceptional. Victorious SEO not only boosted our search rankings but helped us build a long-term strategy that ensures sustained growth.',
      stars: 5,
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Real Companies. Real Gains.
        </h2>

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
          modules={[Autoplay, Pagination]} // Make sure to add modules
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
