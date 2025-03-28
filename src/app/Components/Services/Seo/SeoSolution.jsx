"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/website-8.jpg'; // Static image path

  return (
    <>
      <section className="bg-red-600 py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
            <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-white">
            Tailored Strategies by Our Disruptive SEO Agency in Houston
              </h4>
              <p className="mb-6 text-white 2xl:text-lg lg:text-base text-sm">
                At our Houston SEO agency, we craft bespoke strategies to meet the unique needs of every business. By addressing critical SEO elements like keyword targeting, on-page optimization, and link building, we ensure your online presence resonates with your audience. Our SEO services in Houston TX drive measurable growth, boost visibility, and deliver sustainable results tailored to your goals. Partner with us to unlock your business&apos;s true digital potential.
              </p>
              <button className="open-popup bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-2/3 ">
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
