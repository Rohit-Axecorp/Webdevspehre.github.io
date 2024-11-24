"use client";

import React from 'react';
import CountUp from 'react-countup';

export default function Counter() {
  const stats = [
    { id: 1, number: 100, label: 'Websites & Projects Delivered' },
    { id: 2, number: 60, label: 'Certified Team of Experts' },
    { id: 3, number: 200, label: 'Clients Served Globally' },
    { id: 4, number: 12, label: 'Years of Excellence' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center ${
              index % 2 === 0 && index !== stats.length - 1 && 'sm:border-r-4 lg:border-r-4 border-[#ED1E3A]'
            } ${index < stats.length - 1 && 'lg:border-r-4 border-[#ED1E3A]'} pr-4`}
          >
            {/* Animated Number */}
            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ED1E3A]">
              <CountUp end={stat.number} duration={3} />+
            </p>

            {/* Label */}
            <p className="mt-4 text-md sm:text-lg font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
