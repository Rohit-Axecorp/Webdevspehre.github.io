"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SeoCaseStudies() {

  const caseStudies = [
    {
      title: "DFW Fence Contractor",
      author: "Marcus McCrary",
      description:
        "Discover how our team helped pave the way for this growing business to become one of the leading fence contractors in DFW.",
      results: [
        { label: "Organic Traffic", value: "+35%" },
        { label: "Conversion Rate", value: "+38%" },
        { label: "Conversions", value: "+84%" },
        { label: "Page 1 Rankings", value: "+56%" },
      ],
      imageUrl: "/Images/2022-03-02_12-56-34.png",
    },

    {
      title: "DFW Fence Contractor",
      author: "Marcus McCrary",
      description:
        "Discover how our team helped pave the way for this growing business to become one of the leading fence contractors in DFW.",
      results: [
        { label: "Organic Traffic", value: "+35%" },
        { label: "Conversion Rate", value: "+38%" },
        { label: "Conversions", value: "+84%" },
        { label: "Page 1 Rankings", value: "+56%" },
      ],
      imageUrl: "/Images/2022-03-02_12-56-34.png",
    },
    // Add more case studies as needed
  ];
  return (

    <>

      <div className="bg-gray-50 py-12">
        <h2 className="text-5xl font-bold text-center mb-8">Case Studies</h2>
        <Swiper
          // modules={[Navigation]}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 w-4/6 mx-auto">
                {/* Image Column */}
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-96 h-80 rounded-md"
                  />
                </div>
                {/* Content Column */}
                <div className="flex-1 p-4 lg:p-6">
                  <h3 className="text-2xl font-semibold text-black">{study.title}</h3>
                  <h4 className="text-xl font-medium text-red-500">{study.author}</h4>
                  <p className="text-gray-700 my-4 text-lg">{study.description}</p>
                  <a
                    href="#"
                    className="text-red-500 hover:underline"
                  >
                    View Case Study
                  </a>
                </div>
                {/* Results Column */}
                <div className="hidden lg:flex flex-col w-1/3">
                  <h4 className="text-lg font-semibold text-black mb-4">Results Summarized</h4>
                  <ul className="list-none p-0">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex justify-between items-center mb-4 border-b pb-2">
                        <span className="text-black font-normal text-lg">{result.label}</span>
                        <span className="text-red-500 text-4xl">{result.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          {/* <div className="swiper-button-prev">
          <FaArrowLeft className="text-red-500" />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight className="text-red-500" />
        </div> */}
        </Swiper>
      </div>

    </>
  )
}
