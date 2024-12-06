"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'James Cooper',
      role: 'Marketing Manager',
      content: 'Our rankings have skyrocketed, thanks to their exceptional link-building strategies. They secured high-quality backlinks from credible sites, significantly boosting our authority. Their service has truly transformed our online presence.',
      stars: 5,
    },
    {
      name: 'Samantha Taylor',
      role: 'Content Head',
      content: 'The team optimized our entire website content, and we saw a dramatic improvement in search rankings. Their keyword placement and content flow were spot on, driving both traffic and user engagement. Outstanding service!',
      stars: 5,
    },
    {
      name: 'Michael Grant',
      role: 'CEO',
      content: 'Every element of our on-page SEO, from meta tags to internal links, was handled with precision. The results were amazing, with a significant increase in organic traffic and customer inquiries. Highly professional!',
      stars: 5,
    },
    {
      name: 'Emily Richards',
      role: 'Business Owner',
      content: 'Our visibility in local searches improved drastically after their intervention. They optimized our business listings and localized our content effectively, making us a top choice in the community. Fantastic results!',
      stars: 5,
    },
    {
      name: 'David Miller',
      role: 'IT Manager',
      content: 'They resolved every technical issue holding our website back, including speed, mobile responsiveness, and crawlability. The performance improvements were immediate, and our rankings climbed steadily. Exceptional work!',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Transforming Businesses with Proven SEO Success
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
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
