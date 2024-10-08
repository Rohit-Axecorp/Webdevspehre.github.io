"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'; // Import Autoplay module

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
      content: 'Our search rankings soared, including top-slot rankings for some of our most important business functions, making us far more discoverable to potential prospects. I’m most impressed with their incredible customer service and hands-on account management.',
      stars: 5,
    },
    {
      name: 'Dave Loftus',
      role: 'Owner',
      company: 'Blomdahl USA',
      content: 'After several false starts with a few other SEO companies I can confidently share that Victorious SEO is the real deal. They are easy to work with, very proactive and completely transparent. Considering my prior SEO experiences I found the results startling. Three and a half months in and I see concrete, measurable results. ROI after such a short time? 422%! Really.',
      stars: 5,
    },
    // Add more testimonials as needed
    {
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Innovations',
      content: 'The level of expertise and support provided by Victorious SEO has truly transformed our digital presence. We’ve seen a massive boost in our organic traffic and sales conversions in just a few months.',
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
    <div className="py-12">
      <div className="w-2/3 mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Real Companies. Real Gains.</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-96">
                <div>
                  <p className="mb-4 font-semibold">{testimonial.name}</p>
                  <p className="mb-2 font-medium">{testimonial.role}, {testimonial.company}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
