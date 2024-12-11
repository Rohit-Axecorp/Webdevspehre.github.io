"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SeoCaseStudies() {
  const caseStudies = [
    {
      title: "YO Steakhouse",
      author: "Daniel Louis",
      description:
        "YO Steakhouse was having trouble distinguishing its brand in a competitive market. They turned to Web Dev Sphere for a comprehensive audit, and within six months, they experienced a remarkable increase in organic traffic.",
      results: [
        { label: "Organic Traffic:", value: "60%" },
        { label: "Conversion Rate:", value: "80%" },
        { label: "Keyword Rankings:", value: "15+" },
        { label: "Lead Generation:", value: "55%" },
      ],
      imageUrl: "/Images/2022-03-02_12-56-34.png",
    },

    {
      title: "YO Steakhouse",
      author: "Daniel Louis",
      description:
        "YO Steakhouse was having trouble distinguishing its brand in a competitive market. They turned to Web Dev Sphere for a comprehensive audit, and within six months, they experienced a remarkable increase in organic traffic.",
      results: [
        { label: "Organic Traffic:", value: "60%" },
        { label: "Conversion Rate:", value: "80%" },
        { label: "Keyword Rankings:", value: "15+" },
        { label: "Lead Generation:", value: "55%" },
      ],
      imageUrl: "/Images/2022-03-02_12-56-34.png",
    },



  ];
  return (
    <>
      <div className="bg-gray-100 py-12">
        <h4 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-8">
          SEO Company Austin TX Portfolio
        </h4>
        <Swiper slidesPerView={1} spaceBetween={30}>
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-4 lg:p-6 w-full container mx-auto">
                {/* Image Column */}
                <div className="flex-shrink-0 w-full lg:w-1/3 mb-6 lg:mb-0">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-64 lg:w-full lg:h-96 object-cover rounded-md"
                  />
                </div>
                {/* Content Column */}
                <div className="flex-1 p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">
                    {study.title}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-medium text-[#ED1E3A]  mb-4">
                    {study.author}
                  </h4>
                  <p className="text-gray-700 mb-4 text-base sm:text-lg">
                    {study.description}
                  </p>
                  <a href="#" className="text-[#ED1E3A]  hover:underline">
                    View Case Study
                  </a>
                </div>
                {/* Results Column */}
                <div className="hidden lg:flex flex-col w-1/3">
                  <h4 className="text-lg font-semibold text-black mb-4">
                    Results Summarized
                  </h4>
                  <ul className="list-none p-0">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center mb-4 border-b pb-2"
                      >
                        <span className="text-black font-normal text-base sm:text-lg">
                          {result.label}
                        </span>
                        <span className="text-[#ED1E3A]  text-2xl sm:text-[#ED1E3A] lg:text-4xl">
                          {result.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
