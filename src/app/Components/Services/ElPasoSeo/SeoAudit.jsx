import Image from 'next/image';
import React from 'react';

export default function SeoAudit() {
    return (
        <>
            <section className="bg-black py-12">
                <div className='container'>
                    <h4 className="text-white md:text-center text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                        Start Your Journey by Claiming Your
                        <span className="text-[#ED1E3A]  font-semibold"> Free SEO Audit Report Today!</span>
                    </h4>
                    <div className="container mx-auto pt-12 flex flex-col md:flex-row justify-center items-center"> {/* Stack on small screens */}
                        {/* Left Column: Form 3/5 */}
                        <div className="w-full md:w-2/5 p-6 md:p-8 bg-red-600 shadow-lg rounded-lg"> {/* Full width on small screens */}
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Claim Your Free SEO Audit Report Right Away!
                            </h4>
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
                        <div className="w-full md:w-2/4 max-w-lg p-6">
                            <Image
                                src="/Images/result-img.webp"
                                alt="SEO Audit Report"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
