"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import for Swiper 8.x+
import 'swiper/swiper-bundle.css';


export default function SocialmediaReviews() {
  const testimonials = [
    {
      name: 'Zac Harvey',
      role: 'CEO of Prime Ltd.',
      content: 'I never knew my brand could shine so brightly online! The team really understands my audience and has taken our social media presence to the next level.',
      stars: 5,
    },
    {
      name: 'Maria Daniel',
      role: 'Manager at Crowdstrike',
      content: 'Thanks to Web Dev Sphere, our engagement has skyrocketed! They know how to create content that resonates, making my followers feel connected.',
      stars: 5,
    },
    {
      name: 'Steve Vincent',
      role: 'Founder of Silver Line',
      content: 'I was overwhelmed with social media before. Now, it feels manageable! Their team is creative and responsive, making our online presence stand out.',
      stars: 5,
    },
    {
      name: 'Louis Blake',
      role: 'Senior Director at Ramp Trends',
      content: 'I can’t believe the difference SMM has made for my business. The team crafted campaigns that not only look great but also bring in new customers every day!',
      stars: 5,
    },
    {
      name: 'Chris Eric',
      role: 'CEO of Gab',
      content: 'Their insights into social media trends are spot on! We’ve seen a real boost in engagement and sales since partnering with Web Dev Sphere.',
      stars: 5,
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center ">
          TESTIMONIALS
        </h2>
        <p className="2xl:text-lg lg:text-base text-sm  text-center mb-12 mt-2">
          What Our Clients Have to Say
        </p>

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
                    {testimonial.role}
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
