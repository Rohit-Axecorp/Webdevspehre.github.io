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
                Tailored Strategies for Measurable Success with SEO Service San Antonio
              </h4>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                As one of the top-rated San Antonio SEO companies, we specialize in creative SEO strategies that are tailored to your specific business opportunities and challenges. Drawing on insights about your industry, audience, and competitors, we help you achieve optimal results across every aspect of your digital presence.
              </p>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                Our best SEO service San Antonio covers everything from on-page and off-page SEO, local search to technical optimizations, website architecture fine-tuning and keyword integration. With this complete approach, your website doesn’t just rank higher but it also generates more engagement and conversions.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-1/2 lg:w-1/3">
                Let’s Discuss Your Plan
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
