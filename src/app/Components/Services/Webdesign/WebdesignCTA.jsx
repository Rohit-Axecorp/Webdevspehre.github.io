import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing an icon from react-icons

export default function WebdesignCTA() {
    return (
        <>
            <section className="bg-red-600 py-12">
                <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                    {/* Heading */}
                    <h2 className="text-white text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-6 w-full sm:w-3/4 lg:w-2/3 text-center">
                        Don’t Settle for Ordinary – Let’s Create an Extraordinary Website Design!
                    </h2>

                    {/* Subtext */}
                    <p className="text-white 2xl:text-lg lg:text-base text-sm mb-8 text-center">
                        Your journey towards the perfect website is just one click away.</p>

                    {/* Button */}
                    <button className="flex items-center justify-center bg-white text-[#ED1E3A]  py-4 px-8 md:py-5 md:px-10 rounded-lg 2xl:text-lg lg:text-base text-sm font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
                        Claim Your Free Proposal
                        <FaArrowRight className="ml-2 2xl:text-lg lg:text-base text-sm" />
                    </button>
                </div>
            </section>
        </>
    );
}
