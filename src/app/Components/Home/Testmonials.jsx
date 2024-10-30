"use client";
import React from 'react';
import TestimonialCard from '../Home/TestimonialsCard';
import '../Home/Testimonials.css';

export default function Testimonials() {
  return (
    <section className=''>
      <div className="flex flex-col items-center py-12 container">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Our Client&apos;s Success Stories</h4>
        <p className="text-center text-lg mb-12 md:mx-20">
          Delve into the remarkable success stories of our clients, whose digital identities
          have been transformed by our online marketing and web design agency in Dubai. Their words are a true reflection of our outstanding efforts.
        </p>
        
        {/* Wrapping testimonials in a flex container */}
        <div className="relative flex flex-col md:flex-row justify-center items-center w-full gap-2 md:gap-4">

          {/* Left Card */}
          <div className="left-card md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="What a professional and helpful team. AUN Digital designed our current exceptional website and collaborated with us throughout the process to ensure our constant input."
              name="Anmar Alkamil"
              position="CEO, Chic Floors"
              color="bg-red-500"
            />
          </div>

          {/* Center Card (No Animation) */}
          <div className="md:scale-110 md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="Aun Digital exceeded our expectations, and delivered our website in less than 30 days. Its intuitive, aesthetically appealing, and perfectly aligned with our brand identity."
              name="Muhammad Sheharyar"
              position="CEO, Acusense"
              color="bg-[#000]"
            />
          </div>

          {/* Right Card */}
          <div className="right-card md:flex-1 mb-4 md:mb-0">
            <TestimonialCard
              text="Working with AUN Digital has been a game-changer for our business. Their innovative and refined SEO strategies have substantially boosted our rankings and generated valuable leads."
              name="Saahil Kewlani"
              position="CEO, Green Arch Properties"
              color="bg-red-500"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
