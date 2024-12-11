"use client";

import React from 'react';

export default function SeoCompany() {
    return (
        <section className='bg-gray-100 py-6 md:py-12'> {/* Reduced padding for smaller screens */}
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Image Column */}
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full -mb-10 md:-mb-16 lg:-mb-32"> {/* Adjusted margin for smaller screens */}
                        <img
                            src="/Images/Chicago-SEO-Agency.jpg.webp"
                            alt="Chicago City View"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-2xl md:text-[#ED1E3A] font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        Houston Digital Marketing Agency
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Scale Your Business with The #1 Digital Marketing Agency in Houston, TX
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            Houston is a city where new ideas and opportunities are always taking shape, energized by a strong economy and an entrepreneurial mindset that knows no limits.
                            <br />
                            As a digital marketing agency in Houston, we tap into this dynamic environment, crafting high-impact solutions that help businesses of all kinds grow and succeed.
                            <br />
                            With an expert team dedicated to Houston digital marketing service, <a href="/">Web Dev Sphere</a> provide comprehensive services to help businesses increase online visibility, drive engagement, and maximize ROI. From <a href="/houston-seo-company">SEO</a> to Social Media Marketing and beyond, our strategies are tailored to meet Houston’s unique market needs.
                            <br />
                            Whether you&apos;re a startup or an established brand, our team is here to bring online success to your doorstep. Contact us today to learn how we can transform your digital presence with digital marketing services Houston.
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-blue-600 mr-2">Want better results? We’re here to help boost your leads and sales.
                        </span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
