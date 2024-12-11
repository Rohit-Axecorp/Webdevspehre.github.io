"use client";
import React from 'react';
import TestimonialCard from '../Home/TestimonialsCard';
import '../Home/Testimonials.css';

export default function Testimonials() {
  return (
    <section className=''>
      <div className="flex flex-col items-center 2xl:py-12 py-10 container">
        <h4 className="text-[#ED1E3A] lg:text-4xl 2xl:text-5xl font-bold mb-4 text-center"><span className='text-[#ED1E3A]'> Real Success Stories </span> What Our Clients Say About Us
        </h4>
        <p className="text-center 2xl:text-lg lg:text-base text-sm text-black leading-7 mb-12 md:mx-20">
          Our clients trust WebDev Sphere for transformative web solutions, and their feedback speaks volumes. Here&apos;s what they have to say about their experience with our top-notch services.
        </p>

        {/* Wrapping testimonials in a flex container */}
        <div className="relative flex flex-col md:flex-row justify-center items-center w-full gap-2 md:gap-4">

          {/* Left Card */}
          <div className="left-card md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="Working with WebDev Sphere was a game-changer for our online store. Their e-commerce website development expertise took our business to the next level, driving both traffic and conversions beyond our expectations."
              name="Liam Turner"
              position="Founder of FreshGrocer"
              color="bg-red-600"
            />
          </div>

          {/* Center Card (No Animation) */}
          <div className="md:scale-110 md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="The custom web design service from WebDev Sphere gave our brand the unique online presence we needed. Their attention to detail and creativity made our vision come alive!"
              name="Emily Chen"
              position="Creative Director at Artify Studio"
              color="bg-[#000]"
            />
          </div>

          {/* Right Card */}
          <div className="right-card md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="WebDev Sphere&apos;s SEO strategy has been phenomenal! We&apos;ve seen a significant boost in organic traffic and rankings, and it&apos;s all thanks to their data-driven digital marketing approach."
              name="David Johnson"
              position="Marketing Manager at TechWave"
              color="bg-red-600"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
