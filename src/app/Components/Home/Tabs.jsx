"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPalette, faCode, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: 'Digital Marketing',
            description:
                'Use our strategic solutions to reach new audiences, increase online visibility, and achieve sustainable growth in the digital arena. Let us be your partner in realizing the full potential of your online market.',
            services: ['Social Media', 'SEO', 'Influencer Marketing', 'Content Creation', 'PPC', 'Content Writing', 'ASO'],
            image: '/Images/digital-marketing-tabs-main-image.webp',
            icon: faBullhorn,
            number: '01'
        },
        {
            id: 1,
            title: 'Design',
            description:
                'Create visually stunning and user-friendly designs to capture your audience\'s attention and convey your brand\'s message effectively.',
            services: ['UI/UX Design', 'Logo Design', 'Graphic Design', 'Social Media Design', 'Marketing Campaign Design', 'Corporate Branding ', 'Landing Page Design '],
            image: '/Images/design-tabs-main-image.webp',
            icon: faPalette,
            number: '02'
        },
        {
            id: 2,
            title: 'Web Development',
            description:
                'Build robust and scalable web applications tailored to your business needs, using the latest technologies and development best practices.',
            services: ['Front-End Development', 'Back-End Development', 'Full-Stack Development', 'API Integration'],
            image: '/Images/web-development-tabs-main-image.webp',
            icon: faCode,
            number: '03'
        },
        {
            id: 3,
            title: 'Ecommerce Development',
            description:
                'Create an engaging and user-friendly eCommerce platform that drives sales and provides an exceptional shopping experience for your customers.',
            services: ['Shopify Development', 'Magento Development', 'WooCommerce Development', 'Custom Solutions'],
            image: '/Images/ecommerce-development-tabs-main-image.webp',
            icon: faShoppingCart,
            number: '04'
        },
    ];

    return (

        <>
            <section className=' lg:py-16 py-10 bg-white'>

                <div className=" relative w-full" >
                    {/* Main container */}
                    <div className="container mx-auto pt-10 bg-no-repeat bg-right bg-contain h-44" style={{ backgroundImage: "url('/Images/dg-vertical-tabs-background-image.webp')" }}>
                        {/* Text Content */}
                        <div className="relative z-10 ">
                            <p className="text-red-500 font-semibold text-lg mb-2">
                                Best <span className="text-black">Web Design Company In Dubai</span>
                            </p>
                            <h1 className="text-2xl md:text-5xl font-bold text-black">
                                Grow Your Business Digitally <span className="text-red-500">With Us</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="bg-white ">
                    <div className="container mx-auto flex flex-col md:flex-row gap-8 border-t">
                        {/* Left Side - Tabs */}
                        <div className="md:w-1/4 border-r border-gray-200">
                            {tabs.map((tab, index) => (
                                <div
                                    key={tab.id}
                                    className={`cursor-pointer py-6 font-bold border-b text-lg flex items-center gap-2 hover:text-red-500 transition-all ${activeTab === index ? ' text-red-500' : 'text-gray-700'}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {/* Display icon before the title */}
                                    <FontAwesomeIcon icon={tab.icon} />
                                    {tab.title}
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Content */}
                        <div className="md:w-3/4 py-5">
                            <div className="flex flex-col lg:flex-row items-start gap-8">
                                {/* Content Section */}
                                <div className="w-full lg:w-2/3">
                                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                        {/* Number with slash */}
                                        <span className="text-red-500 font-light">{tabs[activeTab].number}/</span>
                                        {tabs[activeTab].title}
                                    </h2>
                                    <p className="text-gray-600 my-4">
                                        {tabs[activeTab].description}
                                    </p>

                                    {/* Service Buttons with Arrow */}
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {tabs[activeTab].services.map((service, index) => (
                                            <button
                                                key={index}
                                                className="px-4 py-2 border-2 border-black text-black rounded-full text-sm flex items-center justify-between w-full lg:w-auto hover:bg-red-100 transition-all"
                                            >
                                                <span>{service}</span>
                                                {/* Display an arrow icon pointing diagonally */}
                                                <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform -rotate-45 text-red-500" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="w-full lg:w-1/3">
                                    <img
                                        src={tabs[activeTab].image}
                                        alt={tabs[activeTab].title}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
