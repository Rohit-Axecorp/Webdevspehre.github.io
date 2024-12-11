"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'David Parker',
      role: 'Marketing Director at Apex Solutions',
      content: "I was struggling to handle digital marketing on my own. Then I found Web Dev Sphere, and they completely turned things around! They helped us connect with our audience in ways I never imagined, and our growth has been phenomenal.",
      stars: 5,
    },
    {
      name: 'Linda Harper',
      role: 'Founder of QuickFix Tech',
      content: "I was blown away by how committed they are to our success and the attention they pay to every detail. Their social media strategies have been a game-changer, increasing our customer engagement and brand recognition in just 3 months.",
      stars: 5,
    },
    {
      name: 'Daniel Lee',
      role: 'Managing Director at Pulse Dynamics',
      content: "The team at Web Dev Sphere is a social media marketing powerhouse! They exceeded our expectations, helping us grow our online presence and connect with our target audience in ways we hadn't seen before. I can't recommend them enough!",
      stars: 5,
    },
    {
      name: 'Rachel Riley',
      role: 'Co-Founder of Urban Glow',
      content: "I was hesitant to outsource our digital marketing, but Web Dev Sphere made the whole process easy and enjoyable! Their team is fantastic at communicating and genuinely made a positive impact on our brand. Highly recommended!",
      stars: 5,
    },
    {
      name: 'Mark Thompson',
      role: 'CEO of Red Dot Solutions',
      content: 'I’ve worked with several agencies before, but Web Dev Sphere truly stands out. They\'re professional, reliable, and deliver real results. No fluff, just solid work that drives genuine engagement. Excellent job!',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-[#ED1E3A] md:text-4xl lg:text-5xl font-bold text-center mb-12">
          5-Star Reviews From Our Happy Clients
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
