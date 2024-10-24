"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Emma Brown',
      role: 'Founder of Pet Paradise',
      // company: 'Hospitality & Leisure Co.',
      content: 'Their SEO efforts have truly paid off! We’re getting more traffic and leads than ever before. I highly recommend their services to anyone looking to grow!.',
      stars: 5,
    },
    {
      name: 'Chris Davis',
      role: 'Owner of Fitness Hub',
      // company: 'Hospitality & Leisure Co.',
      content: 'The team’s SEO strategies were spot on! Web Dev Sphere helped us understand our audience better and significantly increased our visibility online.',
      stars: 5,
    },
    {
      name: 'Lisa White',
      role: 'Marketing Manager at Style Haven',
      // company: 'Hospitality & Leisure Co.',
      content: 'I was amazed at the results! Our rankings improved dramatically in just a few months. Web Dev Sphere is dedicated, knowledgeable, and a joy to work with!',
      stars: 5,
    },
    {
      name: 'Jenna Smith',
      role: 'Co-Founder of Crafty Creations',
      // company: 'Hospitality & Leisure Co.',
      content: 'Working with Web Dev Sphere was a game-changer! They turned our online presence around and helped us attract more local customers. Worth it!',
      stars: 5,
    },
    {
      name: 'Mike Anderson',
      role: 'HOD at Fresh Eats',
      // company: 'Hospitality & Leisure Co.',
      content: 'I can’t believe how quickly we saw results! Their SEO strategies made a huge difference, and we’re finally ranking on the first page. Highly recommend!',
      stars: 5,
    },

  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Real Reviews. Real Results.
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
