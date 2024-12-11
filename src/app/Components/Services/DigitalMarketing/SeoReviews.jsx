"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SeoReviews() {
  const testimonials = [
    {
      name: 'Nancy Gonzalez',
      role: 'Manager at All Rounder',
      content: "I was lost trying to figure out digital marketing on my own. Then I found Web Dev Sphere, and they completely turned things around! They helped us reach our audience in ways I never thought possible. Our growth has been incredible, and I couldn’t be more grateful.",
      stars: 5,
    },
    {
      name: 'Joshua Green',
      role: 'CEO of Zic Zac',
      content: "I was really impressed with their dedication and attention to detail. Their social media strategies are not only innovative but also highly effective. Within just four months, we connected with more customers and boosted our brand awareness significantly.",
      stars: 5,
    },
    {
      name: 'Ryan Mitchell',
      role: 'Senior Manager at Vincent',
      content: "This team is a powerhouse of social media marketing! Web Dev Sphere exceeded our expectations by enhancing our brand's presence and connecting us with our target audience like never before. Highly recommended!",
      stars: 5,
    },
    {
      name: 'James Martin',
      role: 'Founder of Mack',
      content: "I was nervous about outsourcing our social media, but Web Dev Sphere made the process seamless and even enjoyable! Their communication and expertise made a real difference for our brand. I would definitely recommend them.",
      stars: 5,
    },
    {
      name: 'Sarah Jasmin',
      role: 'CEO of Block Ltd.',
      content: "I’ve worked with other agencies before, but Web Dev Sphere truly stands out. They’re professional, responsive, and deliver real results. No gimmicks—just solid work that brings in genuine engagement. Excellent job!",
      stars: 5,
    },
    {
      name: 'James Cooper',
      role: 'Marketing Manager',
      content: 'Our rankings skyrocketed thanks to their exceptional link-building strategies. They secured high-quality backlinks from credible sites, significantly boosting our authority. Their service transformed our online presence.',
      stars: 5,
    },
  ];


  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-12">
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
