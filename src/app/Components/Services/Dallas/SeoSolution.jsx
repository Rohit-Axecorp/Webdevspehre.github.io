"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/dallas seo.jpg'; // Static image path

  return (
    <>
      <section className="bg-[#ED1E3A] py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Rank Higher with Dallas SEO Company
              </h4>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                Website Dev Sphere is a leading SEO company in Dallas that works on driving visibility, boosting organic traffic, and delivering tangible results. Our team has years of experience helping businesses achieve online success. With us, get your website on the top rankings on search engines, reach your target audience, and convert visitors into loyal customers.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-1/2 lg:w-1/3">
                Get Custom Solution
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
