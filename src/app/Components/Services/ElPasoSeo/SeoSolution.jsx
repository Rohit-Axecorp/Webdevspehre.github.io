"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/seo-strategy-guide-tn.webp'; // Static image path

  return (
    <>
      <section className="bg-[#ED1E3A] py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h4 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Leverage Customized Strategies with Our El Paso SEO Agency
              </h4>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                As a top El Paso SEO agency, we understand that all businesses have unique needs, which is why we create customized strategies for your necessities. We go deep to understand your industry, target audience, and competitors to create SEO campaigns that produce results.
              </p>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                We take care of the basics of keyword research, link building, on-page optimization, and technical SEO to ready your website for success. By partnering with our SEO company El Paso Texas you already know how important it is to have a strong, comprehensive approach that generates real traffic, drives conversions, and boosts brand awareness.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-1/2 lg:w-1/3">
                Book Your Consultation Today!
              </button>
            </div>

            {/* Right Column - Static Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={image}
                alt="Effective SEO Strategies"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
