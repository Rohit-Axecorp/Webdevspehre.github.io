"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutTimeline() {
  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto">
        <div className=" mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">Web Dev Sphere Timeline
          </h2>
          <h3 className="text-gray-100 text-base md:text-lg lg:text-xl mt-4">Here’s how we got started:
          </h3>
        </div>

        {/* Timeline Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 items-start relative z-10">
          {/* Year Blocks */}
          {[
            { year: "2012", description: "Founded to empower businesses through website design and basic digital services.", img: "/Images/tim5.png" },
            { year: "2013", description: "Successfully completed our initial projects, showcasing our ability to create engaging websites.", img: "/Images/tim1.png" },
            { year: "2014", description: "Broaden our offerings to include basic digital marketing, logo design and social media.", img: "/Images/tim1.png" },
            { year: "2015", description: "Landed our first major client, marking a significant milestone in our growth.", img: "/Images/tim5.png" },
            { year: "2016", description: "Growing a team of 80+ web experts, digital marketers, and designers.", img: "/Images/tim1.png" },
            { year: "2017", description: "Introduce SEO services to help clients improve their search engine rankings.", img: "/Images/tim5.png" },
            { year: "2018", description: "Proudly received the Google Partner Award.", img: "/Images/tim1.png" },
            { year: "2019", description: "Received the Best Digital Agency Award at the Annual Marketing Excellence Awards.", img: "/Images/tim5.png" },
            { year: "2020", description: "Pivot our strategies to meet the evolving digital needs of businesses online.", img: "/Images/tim5.png" },
            { year: "2021", description: "Invest in the latest technologies and tools, ensuring our solutions remain cutting-edge.", img: "/Images/tim1.png" },
            { year: "2022", description: "Receive industry recognition for innovative projects and commitment to client success.", img: "/Images/tim1.png" },
            { year: "2023", description: "Garner recognition from Clutch and Design Rush as the best SEO company.", img: "/Images/tim5.png" },
            { year: "2024", description: "Web Dev Sphere stands as a trusted partner for businesses across diverse industries.", img: "/Images/tim1.png" },
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
