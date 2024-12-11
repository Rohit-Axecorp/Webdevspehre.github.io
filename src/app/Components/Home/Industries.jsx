"use client";

import React from 'react';
export default function Industries() {
  const industries = [
    "Healthcare",
    "Law",
    "Ecommerce",
    "Beauty",
    "Social Networking",
    "Architecture",
    "Educational",
    "Business",
    "Personal",
    "Travel",
    "Restaurant",
    "Real Estate",
    "Management",
    "Point of Sale",
  ];

  return (
    <section className="bg-red-600 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-black text-[#ED1E3A] font-bold uppercase mb-4">
            Industries We Serve
          </h2>
          <p className="text-black text-lg mb-6 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white text-black font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
