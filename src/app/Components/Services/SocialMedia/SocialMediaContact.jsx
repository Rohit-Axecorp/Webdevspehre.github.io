import React from 'react';
import Image from 'next/image';
import Form from '../../Form/Form';

export default function SocialMediaContact() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">
                        {/* New Heading: CHICAGO SEO COMPANY */}
                        <h1 className="2xl:text-lg lg:text-base text-sm font-bold text-[#ED1E3A] mb-2">USA’S TOP-NOTCH DIGITAL EXPERTS
                        </h1>

                        <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-4">
                            Grow Your Business with Expert Social Media Marketing Services
                        </p>
                        <p className="mb-6 2xl:text-lg lg:text-base text-sm text-gray-800">
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

                    <Form />
                </div>
            </section>
        </>
    );
}
