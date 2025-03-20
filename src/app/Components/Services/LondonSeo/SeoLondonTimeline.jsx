import React from "react";
import Image from "next/image";

const industries = [
    { name: "E-commerce", icon: "/Images/Webdev1.svg" },
    { name: "Taxi Booking", icon: "/Images/Webdev2.svg" },
    { name: "Tourism", icon: "/Images/Webdev3.svg" },
    { name: "Healthcare", icon: "/Images/Webdev4.svg" },
    { name: "Retail", icon: "/Images/Webdev5.svg" },
    { name: "Real Estate", icon: "/Images/Webdev6.svg" },
    { name: "Metaverse", icon: "/Images/Webdev7.svg" },
    { name: "Oil & Gas", icon: "/Images/Webdev8.svg" },
    { name: "Banking", icon: "/Images/Webdev9.svg" },
    { name: "Manufacturing", icon: "/Images/Webdev10.svg" },
    { name: "Logistics", icon: "/Images/Webdev11.svg" },
    { name: "FinTech", icon: "/Images/Webdev12.svg" },
];

export default function SeoLondonTimeline() {
    return (
        <section className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Delivering <span className="text-[#ED1E3A]">Web Excellence</span> Across Industries
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-xl">
                As a premier web development company in the UK, we provide tailored solutions using the latest technologies.
                Our focus on industry-specific needs ensures the delivery of robust, scalable websites optimized for performance and user experience.
                We leverage advanced frameworks and best practices to drive measurable business results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {industries.map((industry, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition">
                        <Image src={industry.icon} alt={industry.name} width={90} height={90} className="mb-3" />
                        <p className="font-bold text-gray-700 text-base md:text-xl">{industry.name}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <button className="border-2 border-[#ED1E3A] text-[#ED1E3A] hover:bg-[#ED1E3A] hover:text-white px-6 py-3 rounded-full font-medium transition">
                    Get Industry Specific Web Development
                </button>
            </div>
        </section>
    );
}