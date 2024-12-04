import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Facebook Marketing',
        description: 'Our Facebook marketing services are all about helping your brand grow where billions connect. We understand your target audience and craft engaging posts, run targeted ads, and spark meaningful conversations.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Instagram Marketing',
        description: 'We’ll optimize your profile for maximum appeal, craft and schedule compelling content that aligns with your unique brand voice, and produce high-quality visuals and captivating content to keep your followers hooked.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'X Marketing',
        description: 'Our X marketing service helps your brand become part of the conversation. We’ll craft a tailored strategy to boost your visibility and connect with your audience through timely, engaging, and authentic tweets.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'LinkedIn Marketing',
        description: 'Our LinkedIn marketing service positions your brand as an industry leader by leveraging the power of professional networking. We’ll enhance your profile and create insightful content that resonates with your target audience.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Snapchat Marketing',
        description: 'Our experts brings your brand to life with fresh, engaging, and interactive content. From profile setup and strategic content planning to creating fun filters and geotags, we help your brand stand out and stay top-of-mind.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'TikTok Marketing',
        description: 'Our TikTok marketing service is your ticket to going viral and reaching millions with authentic, trend-driven content. We create tailored strategies and produce short, captivating videos that showcase your brand’s personality.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'YouTube Marketing',
        description: 'Our YouTube marketing service aims to grow your brand’s presence on the world’s largest video platform. We help you create compelling video content that captivates viewers and converts subscribers into loyal customers.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Pinterest Marketing',
        description: 'Our Pinterest marketing service transforms your brand’s visual content into a traffic-driving powerhouse. We create eye-catching pins that showcase your products or services in a way that inspires clicks, saves, and shares.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Analytics and Reporting',
        description: 'Our analytics and reporting service provides deep insights to guide your marketing strategy. We gather and analyze key data across all your channels to give you a clear picture of what’s working and what needs adjustment.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    // Add more services as needed
];
export default function SocialMediaServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Our Comprehensive Social Media Marketing Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <Image src={service.icon} alt={`${service.title} Icon`} width={30} height={30} />
                                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                                <p className="mt-2 text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
