import React from "react";
import Image from "next/image";

export default function SeoAudit() {
    return (
        <>
            <section className="relative w-full ">
                <div className=" text-white container h-[400px] lg:h-[500px]">
                    {/* Background Image */}
                    <Image
                        src="/Images/build_uk_web.webp"
                        alt="City Skyline Background"
                        fill
                        className="object-cover object-center z-0"
                        priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

                    {/* Content */}
                    <div className="relative z-20 mx-auto h-full px-6 flex flex-col justify-center items-start gap-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                            Build an Online Presence that Customer Can’t Resist
                        </h1>
                        <p className="text-base sm:text-lg max-w-xl">
                            Land potential leads through your site with our user-centric design strategy for web development in London.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="open-popup bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full">
                                Let’s Build Your Website!
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
