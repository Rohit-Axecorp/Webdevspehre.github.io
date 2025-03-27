"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/Seo.png'; // Static image path

  return (
    <>
      <section className="bg-red-600 py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-white">
                Drive Traffic, Increase Visibility, and Boost Sales
              </h4>
              <p className="mb-6 text-white 2xl:text-lg lg:text-base text-sm">
                We are a the best SEO company Plano TX dedicated to helping local businesses thrive in the digital landscape. With a deep understanding of the unique challenges faced by companies in the industry, we offer tailored SEO strategies designed to enhance your online visibility and drive organic traffic.
              </p>
              <p className="mb-6 text-white 2xl:text-lg lg:text-base text-sm">
                Our team of experienced SEO professionals utilizes the latest techniques and tools to optimize your website for search engines.
              </p>
              <button className="open-popup bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-2/3 ">
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
