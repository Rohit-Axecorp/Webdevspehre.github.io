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
                'Our web development company amplifies your brands online presence through data-driven digital marketing strategies. We ensure your reach is optimized and engaging, fueling growth across platforms.',
            services: ['Social Media', 'SEO', 'Influencer Marketing', 'Content Creation', 'PPC', 'Content Writing', 'ASO'],
            icon: faBullhorn,
            number: '01'
        },
        {
            id: 1,
            title: 'Design',
            description:
                'As a web design company with a flair for creativity, we specialize in crafting visually stunning and user-friendly interfaces. Each design is tailored to captivate and connect with your audience.',
            services: ['UI/UX Design', 'Logo Design', 'Graphic Design', 'Social Media Design', 'Marketing Campaign Design', 'Corporate Branding ', 'Landing Page Design '],
            icon: faPalette,
            number: '02'
        },
        {
            id: 2,
            title: 'Web Development',
            description:
                'A trusted web design and development company, we create custom web solutions that are both scalable and secure. From interactive websites to complex platforms, we bring your vision to life with precision.',
            services: ['Front-End Development', 'Back-End Development', 'Full-Stack Development', 'API Integration'],
            icon: faCode,
            number: '03'
        },
        {
            id: 3,
            title: 'Ecommerce Development',
            description:
                'Our expertise in eCommerce development helps businesses thrive online with high-performance stores. We design seamless, conversion-driven experiences that set us apart as a best-in-class web development company.',
            services: ['Shopify Development', 'Magento Development', 'WooCommerce Development', 'Custom Solutions'],
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
                            <h3 className="text-[#ED1E3A] font-semibold text-lg mb-2">
                                Web Design
                                <span className="text-black"> & Development Company</span>
                            </h3>
                            <p className="text-2xl md:text-5xl font-bold text-black">
                                Expanding Digital Horizons Across
                                <span className="text-[#ED1E3A]"> Key Sectors</span>
                            </p>
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
                                    className={`cursor-pointer py-6 font-bold border-b text-lg flex items-center gap-2 hover:text-[#ED1E3A] transition-all ${activeTab === index ? ' text-[#ED1E3A]' : 'text-gray-700'}`}
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
                                <div className="w-full">
                                    <p className="text-xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                        {/* Number with slash */}
                                        <span className="text-[#ED1E3A] font-light">{tabs[activeTab].number}/</span>
                                        {tabs[activeTab].title}
                                    </p>
                                    <p className="lg:text-xl text-black leading-7 my-4">
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
                                                <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform -rotate-45 text-[#ED1E3A]" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                {/* <div className="w-full lg:w-1/3">
                                    <img
                                        src={tabs[activeTab].image}
                                        alt={tabs[activeTab].title}
                                        className="w-full"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
