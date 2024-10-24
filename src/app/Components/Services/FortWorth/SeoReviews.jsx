"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
  
      {
          name: 'Sarah Thompson',
          role: 'Director at Acme Corp',
          content: 'Working with Web Dev Sphere transformed our online presence! Our organic traffic has skyrocketed, and we\'ve seen a substantial increase in leads.',
          stars: 5,
      },
      {
          name: 'Michael Anderson',
          role: 'CEO of Bright Solutions',
          content: 'Thanks to Web Dev Sphere, our website is now ranking at the top! We\'ve noticed a dramatic uptick in traffic and inquiries. It\'s been a game-changer.',
          stars: 5,
      },
      {
          name: 'Jessica Lee',
          role: 'Founder of GreenTech Innovations',
          content: 'We were struggling with visibility until we partnered with Web Dev Sphere. Their Houston SEO experts helped us climb search rankings quickly.',
          stars: 5,
      },
      {
          name: 'Emily Johnson',
          role: 'Senior Manager at Future Ventures',
          content: 'I can’t believe the difference Web Dev Sphere made! Their SEO services are top-notch, driving traffic to our site like never before.',
          stars: 5,
      },
      {
          name: 'James Roberts',
          role: 'HOD at TechWave Solutions',
          content: 'After hiring Web Dev Sphere, our website’s visibility skyrocketed! They implemented smart SEO strategies that increased our rankings significantly.',
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
