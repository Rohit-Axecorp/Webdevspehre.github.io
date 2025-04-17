import React from 'react'
import Form from '../Form/Form';
import PopupModal from '../PopupModal';

export default function PortfolioSection01() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">

                        <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-4">
                            Passion-Fueled Innovation: Where Dreams Become Reality
                        </p>
                        <p className="mb-6 2xl:text-lg lg:text-base text-sm text-gray-800">
                            Web Dev Sphere is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most.
                        </p>
                        <div className="flex items-center my-8">

                            <PopupModal />
                            <button id="open-popup" className="open-popup group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-10 2xl:py-4 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent">
                                Digitize Your Presence!
                                {/* Inline SVG for the arrow icon */}
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    ></path>
                                </svg>
                            </button>

                        </div>
                    </div>

                    <Form />

                </div>
            </section>

        </>
    )
}
