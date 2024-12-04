"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/comrade-img-1.jpg'; // Static image path

  return (
    <>
      <section className="bg-[#ED1E3A] py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Get Solution Tailored for Your Chicago Business
              </h2>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                At Comrade, we&apos;re committed to empowering businesses across Chicago by driving leads and boosting revenue. Regardless of your industry or niche, our team excels at tailoring solutions to meet your unique needs, ensuring your business reaches its goals. If you haven&apos;t discovered an ideal solution that suits your Chicago-based enterprise, reach out to us, and let&apos;s explore how our SEO expertise can be the catalyst for your success!
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
