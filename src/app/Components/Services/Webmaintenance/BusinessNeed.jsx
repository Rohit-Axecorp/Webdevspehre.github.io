"use client";

import React from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle } from 'react-icons/fa';

export default function BusinessNeed() {
    const stats = [
        { id: 1, number: 110, label: 'Increased Conversion Rates' },
        { id: 2, number: 99, label: 'Reduction in Security Issues' },
        { id: 3, number: 128, label: 'Higher Search Engine Rankings' },
        { id: 4, number: 500, label: 'Cost Savings with Web Support' },
    ];

    const benefits = [
        'Our team of experts is available 24/7 to ensure your web pages',
        'We provide regular backups to prevent data loss.',
        'Our services include security checks to keep your website safe from threats.',
        'We ensure that your website is always optimized for performance and speed.',
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center mb-16">
                <h1 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                    <p className="text-black">Why Business Needs </p>
                    <p className="text-[#ED1E3A]">Website Maintenance Services Dubai</p>
                </h1>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center pr-4">
                        <h2 className="text-3xl sm:text-5xl 2xl:text-7xl font-bold text-[#ED1E3A]">
                            <CountUp end={stat.number} duration={3} />%
                        </h2>
                        <p className="mt-4 2xl:text-lg lg:text-base text-sm font-medium text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
                <div className="flex flex-col items-center">
                    <h2 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                        <span className="text-black">We Provide </span>
                        <span className="text-[#ED1E3A]">Professional </span>
                        <span className="text-black">Web Maintenance Plans </span>
                        <span className="text-[#ED1E3A]">for Your Complete Website Care</span>
                    </h2>
                    <p className="mb-6 text-gray-700 2xl:text-lg lg:text-base text-sm">
                        Si3 Digital is your dedicated website maintenance company for your peace of mind.
                    </p>
                    <ul className="list-disc 2xl:space-y-8 space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center 2xl:text-lg lg:text-base text-sm">
                                <FaCheckCircle className="text-[#ED1E3A]  mr-2 w-20" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                        src="/Images/student-8.jpg" 
                        alt="Website Maintenance Technologies" 
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
