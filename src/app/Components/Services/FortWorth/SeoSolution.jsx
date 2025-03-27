"use client";

import React from "react";

export default function SeoSolution() {
  const image = '/Images/seoservicepage.png'; // Static image path

  return (
    <>
      <section className="bg-red-600 py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-white">
                Get the Best SEO Solutions for Your Fort Worth Business
              </h4>
              <p className="mb-6 text-white 2xl:text-lg lg:text-base text-sm">
                Web Dev Sphere is a premier SEO company in Fort Worth dedicated to enhancing visibility, increasing organic traffic, and delivering measurable results. Our experienced team has a proven track record of helping businesses achieve online success. With our expertise, your website can climb to the top of search engine rankings, connect with your target audience, and transform visitors into loyal customers. Let us help you unlock the full potential of your online presence!
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
