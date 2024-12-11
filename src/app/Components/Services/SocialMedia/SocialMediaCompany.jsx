"use client";

import React from 'react';

export default function SocialMediaCompany() {
    return (
        <section className='bg-gray-100 py-6 md:py-12'> {/* Reduced padding for smaller screens */}
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Image Column */}
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full -mb-10 md:-mb-16 lg:-mb-32"> {/* Adjusted margin for smaller screens */}
                        <img
                            src="/Images/social-media-marketing-500x500.webp"
                            alt="Chicago City View"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-2xl md:text-[#ED1E3A] font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        Expert Social Media Marketing Services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Engage, Connect, and Convert with Our Social Media Marketing Services
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            Ready to grow your business through the power of social media? We provide top-notch social media marketing services specifically for U.S.-based companies, designed to build your brand and boost engagement. Our approach is simple: authentic, tailored strategies that bring your brand closer to your audience. From eye-catching posts to targeted ads, we handle every detail, ensuring your message reaches the right people on platforms like Facebook, Instagram, LinkedIn, and Twitter.
                            <br />
                            We know what makes American audiences tick, and we use that insight to create campaigns that not only capture attention but drive real results. Think of us as your dedicated social media marketing service team, committed to helping you connect, convert, and grow. Let’s turn those followers into fans and your brand into a social media powerhouse!
                            <br />
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-blue-600 mr-2">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
