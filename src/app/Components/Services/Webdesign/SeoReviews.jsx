"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Jessica Thompson',
      role: 'E-Commerce Manager',
      content: 'WebDev Sphere delivered a sleek, functional eCommerce platform that completely transformed our online sales. Their attention to detail and understanding of user behavior resulted in a design that’s both visually appealing and easy to navigate. Sales have tripled since the redesign!',
      stars: 5,
    },
    {
      name: 'Michael Adams',
      role: 'Marketing Director',
      content: 'Partnering with WebDev Sphere was a remarkable experience. Their team took the time to understand our brand and turned our ideas into a stunning reality. The custom design they created has enhanced our credibility and brought our business to the forefront of our industry.',
      stars: 5,
    },
    {
      name: 'Lisa Monroe',
      role: 'Business Owner',
      content: 'Our previous website had trouble adapting to mobile devices, but WebDev Sphere solved this problem effortlessly. Their mobile-friendly design is flawless, delivering a consistent experience across all platforms. Traffic and user engagement have both increased significantly!',
      stars: 5,
    },
    {
      name: 'Daniel Carter',
      role: 'Entrepreneur',
      content: 'The Shopify store developed by WebDev Sphere exceeded our expectations. It’s not only visually stunning but also equipped with features that cater to our specific needs. Their attention to detail and expertise in Shopify design truly set them apart!',
      stars: 5,
    },
    {
      name: 'Emily Roberts',
      role: 'Digital Marketing Lead',
      content: 'The landing page designed by WebDev Sphere brought our marketing campaign to life. Their strategic approach, combined with a beautiful design and compelling CTAs, doubled our leads in just a month. Highly recommend their expertise!',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          What Our Clients Say About Us
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
