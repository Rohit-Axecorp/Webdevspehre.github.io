import React from 'react';
import Image from 'next/image';

export default function SocialMediaContact() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">
                        {/* New Heading: CHICAGO SEO COMPANY */}
                        <h1 className="text-xl font-bold text-red-600 mb-2">USA’S TOP-NOTCH DIGITAL EXPERTS
                        </h1>

                        <p className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Grow Your Business with Expert Social Media Marketing Services
                        </p>
                        <p className="mb-6 text-base md:text-lg text-gray-800">
                            Web Dev Sphere is a leading digital agency that offers the best social media marketing services to help you grow your online presence. Our team integrates the latest trends, tools, and data-driven insights to achieve your marketing goals.
                        </p>
                        <div className="flex items-center my-8">
                            <div className="flex items-center mr-4">
                                <Image src="/Images/Clutch_SEO_Companies_2021.png" alt="Clutch 2021" width={150} height={150} />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Images/upcity-excellence-2022.png" alt="Excellence Award 2022" width={150} height={150} />
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Our SMM Experts Now!
                        </h2>
                        <form action="#" method="POST">
                            <div className="space-y-4">
                                {/* First and Last Name in one row */}
                                <div className="flex flex-col md:flex-row md:space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <input
                                            id="first-name"
                                            type="text"
                                            className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <input
                                            id="last-name"
                                            type="text"
                                            className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                        placeholder="Phone"
                                        required
                                    />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <input
                                        id="company-name"
                                        type="text"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>

                                {/* Industry */}
                                <div>
                                    <select
                                        id="industry"
                                        className="w-full p-3 border rounded-md text-gray-500 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                    >
                                        <option className="text-gray-400">Industry</option>
                                        <option>Healthcare</option>
                                        <option>Education</option>
                                        <option>Finance</option>
                                        <option>Technology</option>
                                    </select>
                                </div>

                                {/* Help */}
                                <div>
                                    <select
                                        id="help"
                                        className="w-full p-3 border rounded-md text-gray-500 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                                    >
                                        <option className="text-gray-400">What can we help you with?</option>
                                        <option>SEO Audit</option>
                                        <option>Link Building</option>
                                        <option>Content Marketing</option>
                                        <option>SEO Strategy</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#ED1E3A] text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                                >
                                    Schedule a 30-minute Call Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
