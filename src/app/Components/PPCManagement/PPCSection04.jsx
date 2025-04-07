"use client";
import React from "react";

const features = [
  {
    title: "FeedLogic Integration",
    image: "/Images/ppc-ecommerce-bg_1.jpg",
    desc: "Enhance your shopping feed accuracy and delivery.",
    isActive: false,
  },
  {
    title: "Merchant Center Support",
    image: "/Images/ppc-ecommerce-bg_2.jpg",
    desc: "A successful Google Shopping PPC campaign starts with a well-maintained product feed and merchant center account. Our internal data feed team stays ahead of the curve on merchant center changes to assist with troubleshooting.",
    isActive: false,
  },
  {
    title: "Call Analytics & Recordings",
    image: "/Images/ppc-ecommerce-bg_3.jpg",
    desc: "Monitor and optimize call performance with detailed recordings.",
    isActive: false,
  },
  {
    title: "Remarketing Ads",
    image: "/Images/ppc-ecommerce-bg_4.jpg",
    desc: "Re-capture your visitors with strategic ad placements.",
    isActive: false,
  },
  {
    title: "Account Ownership",
    image: "/Images/ppc-ecommerce-bg_5.jpg",
    desc: "Maintain control and transparency with dedicated account access.",
    isActive: false,
  },
];

export default function PPCSection04() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#ED1E3A] uppercase tracking-wide">
          The Full Suite of Features You Need
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 container mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`relative group h-72 rounded-lg overflow-hidden shadow-xl transition duration-300`}
            style={{
              backgroundImage: feature.isActive ? "none" : `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Front Side: Default Image and Title */}
            <div className="absolute inset-0 transition-all duration-500 ease-in-out transform group-hover:scale-105">
              <div
                className={`w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-semibold transition duration-300 group-hover:bg-[#ED1E3A] group-hover:text-white`}
              >
                <h3 className="px-4 text-center">{feature.title}</h3>
              </div>
            </div>

            {/* Back Side: Description */}
            <div className="absolute inset-0 bg-[#ED1E3A] text-white opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex items-center justify-center text-center">
              <p className="text-base font-normal">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
