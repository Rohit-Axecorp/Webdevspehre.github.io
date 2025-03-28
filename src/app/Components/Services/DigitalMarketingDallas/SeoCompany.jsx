
import React from 'react';

export default function SeoCompany() {
    return (
        <section className='bg-gray-100 py-6 md:py-12'> {/* Reduced padding for smaller screens */}
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Image Column */}
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full -mb-10 md:-mb-16 lg:-mb-32"> {/* Adjusted margin for smaller screens */}
                        <img
                            src="/Images/digital-marketing-1.jpg"
                            alt="Chicago City View"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl md:text-[#ED1E3A] font-bold mb-2"> {/* Adjusted text size */}
                        Dallas Digital Marketing Agency
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-sm text-gray-700 my-4"> {/* Adjusted text size */}
                        Grow Your Business with Digital Marketing Agency in Dallas
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="2xl:text-lg lg:text-base text-sm text-gray-600 mb-6">
                            Dallas is a city that never stops growing, with thousands of new opportunities every single day. Its strong economy and busy business scene keep things moving forward.
                            <br />
                            In 2025, over 10+ digital marketing trends are emerging that you can’t afford to ignore if you want to stay competitive. As your digital marketing agency in Dallas, we know how to keep up with the latest trends and leverage them to grow your business 10x.
                            <br />
                            Web Dev Sphere is one of the best digital marketing agencies in Dallas offering comprehensive solutions to help businesses boost online visibility, drive engagement, and maximize ROI. From SEO to social media marketing and beyond, our strategies are designed to meet the unique needs of the Dallas market.
                            <br />
                            Whether you&apos;re a startup or an established brand, our team is here to bring online success to your doorstep. Contact us today to discover how we can transform your digital presence with digital marketing services in Dallas.
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="open-popup 2xl:text-lg lg:text-base text-sm font-semibold text-red-500 mr-2 cursor-pointer">Want better results? We’re here to help boost your leads and sales.
                        </span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
