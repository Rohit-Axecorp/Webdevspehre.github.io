import Image from 'next/image'
import React from 'react'

export default function SeoAudit() {
    return (
        <>
            <section className="bg-black py-12">
                <h1 className="text-white text-center text-5xl font-bold">Get Your FREE Instant <span className="text-red-500 font-semibold">SEO Audit Report Now!</span></h1>
                <div className="container mx-auto pt-12 flex justify-center items-center">
                    {/* Left Column: Form 3/5 */}
                    <div className="w-2/5 p-8 bg-red-500 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Free Instant SEO Audit Report</h2>
                        <form action="#" method="POST">
                            <div className="space-y-4">
                                {/* First Name */}
                                <div>
                                    <input
                                        id="first-name"
                                        type="text"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <input
                                        id="last-name"
                                        type="text"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>

                                {/* Website */}
                                <div>
                                    <input
                                        id="website"
                                        type="text"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                        placeholder="Enter Website"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                        placeholder="Your E-Mail"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600 transition mt-6"
                                >
                                    Get Free Report Now
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Image 2/5 */}
                    <div className="w-2/4 max-w-lg">
                        <Image
                            src="/Images/result-img.webp"  // Update this to match the image path you've uploaded
                            alt="SEO Audit Report"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
