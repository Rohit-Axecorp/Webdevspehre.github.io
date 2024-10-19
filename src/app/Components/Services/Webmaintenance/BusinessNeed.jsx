"use client";

import React from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle } from 'react-icons/fa'; // Import any icons you want to use

export default function BusinessNeed() {
    const stats = [
        { id: 1, number: 110, label: 'Increased Conversion Rates' },
        { id: 2, number: 99, label: 'Reduction in Security Issues' },
        { id: 3, number: 128, label: 'Higher Search Engine Rankings' },
        { id: 4, number: 500, label: 'Cost Savings with Web Support' },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center mb-16">
                {/* Heading */}
                <h1 className="text-5xl font-bold">
                    <p className="text-black">Why Business Needs </p>
                    <p className="text-red-500">Website Maintenance Services Dubai</p>
                </h1>
            </div>

            {/* Counter Section */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center pr-4"
                    >
                        {/* Animated Number */}
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-500">
                            <CountUp end={stat.number} duration={3} />%
                        </h2>

                        {/* Label */}
                        <p className="mt-4 text-md sm:text-lg font-medium text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Content and Image Section */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
                {/* Left Column - Content */}
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-black">We Provide </span>
                        <span className="text-red-500">Professional </span>
                        <span className="text-black">Web Maintenance Plans </span>
                        <span className="text-red-500">for Your Complete Website Care</span>
                    </h2>

                    <p className="mb-6 text-gray-700 text-2xl">
                        Si3 Digital is your dedicated website maintenance company for your peace of mind
                    </p>
                    {/* Icon List */}
                    <ul className="list-disc space-y-8">
                        <li className="flex items-center text-xl">
                            <FaCheckCircle className="text-red-500 mr-2 w-20" />
                            Our team of experts is available 24/7 to ensure your web pages are always available for your potential customers.
                        </li>
                        <li className="flex items-center text-xl">
                            <FaCheckCircle className="text-red-500 mr-2 w-20" />
                            Our team of experts is available 24/7 to ensure your web pages are always available for your potential customers.
                        </li>
                        <li className="flex items-center text-xl">
                            <FaCheckCircle className="text-red-500 mr-2 w-20" />
                            Our team of experts is available 24/7 to ensure your web pages are always available for your potential customers.
                        </li>
                        <li className="flex items-center text-xl">
                            <FaCheckCircle className="text-red-500 mr-2 w-20" />
                            Our team of experts is available 24/7 to ensure your web pages are always available for your potential customers.
                        </li>
                    </ul>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center justify-center">
                    <img src="/Images/Website-Maintenance-Technologies.png" alt="Website Maintenance Technologies" className="w-2/3 " />
                </div>
            </div>
        </div>
    );
}
