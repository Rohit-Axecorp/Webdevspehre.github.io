"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/comrade-img-1.jpg'; // Static image path

  return (
    <>
      <section className="bg-red-500 py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Drive Traffic, Increase Visibility, and Boost Sales
              </h2>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                We are a the best SEO company Plano TX dedicated to helping local businesses thrive in the digital landscape. With a deep understanding of the unique challenges faced by companies in the industry, we offer tailored SEO strategies designed to enhance your online visibility and drive organic traffic.
              </p>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                Our team of experienced SEO professionals utilizes the latest techniques and tools to optimize your website for search engines.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-1/2 lg:w-1/3">
                Get Custom Solution
              </button>
            </div>

            {/* Right Column - Static Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={image}
                alt="Chicago Business Solution"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
