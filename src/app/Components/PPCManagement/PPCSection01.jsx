"use client";
import React from "react";
import Image from "next/image";
import PopupModal from "../PopupModal";

export default function PPCSection01() {
    return (
        <section className="relative w-full h-[550px] bg-[#000000] text-white overflow-hidden">
            {/* Background Image */}
            <Image
                src="/Images/PPC-Ecom-banner.jpg" // Replace with your actual image path
                alt="PPC Banner"
                fill
                className="object-cover object-center opacity-30 md:opacity-40"
                priority
            />

            {/* Overlay Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
                <div className="max-w-3xl">
                    <p className="text-sm md:text-3xl font-normal tracking-wide uppercase text-white/90 mb-2">
                        E-Commerce PPC Management
                    </p>
                    <h1 className="text-4xl lg:text-7xl font-bold uppercase leading-tight mb-4">
                        Drive More Sales
                    </h1>
                    <p className="text-base md:text-xl mb-6 text-white/90">
                        Maximize Your PPC Pound for Better ROI
                    </p>

                    {/* Badges */}
                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <Image
                            src="/Images/badge-google.webp"
                            alt="Google Partner"
                            width={80}
                            height={50}
                            className="object-contain"
                        />
                        <Image
                            src="/Images/badge-microsoft.webp"
                            alt="Microsoft Partner"
                            width={200}
                            height={50}
                            className="object-contain"
                        />
                    </div>

                    <PopupModal />
                    <button id="open-popup" className="open-popup group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-16 2xl:py-4 border text-white border-white bg-transparent rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-white">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
