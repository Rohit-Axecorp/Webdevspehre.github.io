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
                Get the Best SEO Solutions for Your Fort Worth Business
              </h2>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
                Web Dev Sphere is a premier SEO company in Fort Worth dedicated to enhancing visibility, increasing organic traffic, and delivering measurable results. Our experienced team has a proven track record of helping businesses achieve online success. With our expertise, your website can climb to the top of search engine rankings, connect with your target audience, and transform visitors into loyal customers. Let us help you unlock the full potential of your online presence!
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