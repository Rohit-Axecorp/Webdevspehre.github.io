"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Michael Torres',
      role: 'Marketing Director',
      content: 'Thanks to their off-page SEO services in San Antonio, our site’s domain authority skyrocketed, and our organic traffic doubled in just three months.',
      stars: 5,
    },
    {
      name: 'Sarah Lane',
      role: 'Content Manager',
      content: 'Their SEO company in San Antonio made all the difference. Our content is now perfectly aligned with search intent, and we’ve seen a noticeable improvement in rankings.',
      stars: 5,
    },
    {
      name: 'David Kim',
      role: 'Operations Manager',
      content: 'Their on-page SEO services in San Antonio transformed our website’s performance. Load times are faster, and our pages rank higher than ever!',
      stars: 5,
    },
    {
      name: 'Emily Carter',
      role: 'Small Business Owner',
      content: 'Our local visibility skyrocketed thanks to their local SEO company San Antonio strategies. We now dominate searches in our area.',
      stars: 5,
    },
    {
      name: 'John Miller',
      role: 'IT Specialist',
      content: 'From fixing errors to enhancing site structure, their SEO company San Antonio tx gave our site the technical boost it needed to rank competitively.',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h4 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-12">
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
