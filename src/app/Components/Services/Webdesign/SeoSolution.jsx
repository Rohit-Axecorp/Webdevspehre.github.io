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
              <h2 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Kick Upstairs Your Brand with Custom Website Design Houston TX
              </h2>
              <p className="mb-6 text-white text-base md:text-lg lg:text-xl">
              At WebDev Sphere, we specialize in crafting bespoke website designs tailored to your unique brand identity and audience. As a leading Houston web design agency, we focus on creating responsive, user-friendly designs that not only captivate but also convert. By addressing key design elements like intuitive navigation, mobile responsiveness, and aesthetic appeal, we ensure your site stands out in today’s competitive market. With our responsive website design Houston expertise, we help businesses enhance their online visibility, improve user engagement, and drive measurable growth.
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
