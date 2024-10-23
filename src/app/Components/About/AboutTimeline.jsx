"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutTimeline() {
  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-500">Explore 11+ Years Of</h2>
          <h3 className="text-2xl text-gray-300 mt-4">Ideation. Innovation. Transformation</h3>
        </div>

        {/* Timeline Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 items-start relative z-10">
          {/* Year Blocks */}
          {[
            { year: "2012", description: "We launched to cater businesses in styling UI/UX within the leading technology industries.", img: "/Images/tim5.png" },
            { year: "2013", description: "Team strength increased to 50+ designers & developers.", img: "/Images/tim1.png" },
            { year: "2014", description: "Added new technology stack.", img: "/Images/tim1.png" },
            { year: "2015", description: "Introduced in-house car rental service.", img: "/Images/tim5.png" },
            { year: "2016", description: "Awarded with outstanding big eCommerce web design.", img: "/Images/tim1.png" },
            { year: "2017", description: "Grew our team to 150+ designers & developers.", img: "/Images/tim5.png" },
            { year: "2018", description: "Awarded with Zoho partner badge.", img: "/Images/tim1.png" },
            { year: "2019", description: "Associated with Google partner badge.", img: "/Images/tim5.png" },
            { year: "2020", description: "Associated with Google partner badge.", img: "/Images/tim5.png" },
            { year: "2021", description: "Associated with Google partner badge.", img: "/Images/tim1.png" },
            { year: "2022", description: "Associated with Google partner badge.", img: "/Images/tim1.png" },
            { year: "2023", description: "Associated with Google partner badge.", img: "/Images/tim5.png" },
            { year: "2024", description: "Associated with Google partner badge.", img: "/Images/tim1.png" },
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-start z-10">
              {/* Layered dot */}
              <div className="absolute -top-4 z-10">
                <div className="bg-white rounded-full w-5 h-5 absolute top-0 left-0" />
              </div>
              <h4 className="text-xl font-semibold mt-8" style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#d3d3d3',
                color: 'transparent',
                fontSize: '38px',
                fontWeight: '800',
              }}>
                {item.year}
              </h4>
              <p className="text-gray-100 text-lg mt-4">{item.description}</p>
              <div className="flex justify-start mt-4">
                <Image
                  src={item.img}
                  alt={`${item.year} Icon`}
                  width={200}
                  height={50}
                  className="max-w-full h-auto" // Ensure image is responsive
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
