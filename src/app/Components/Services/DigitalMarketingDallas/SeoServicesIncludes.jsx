import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: "Search Engine Optimization - SEO",
        description: "As a trusted SEO company, we specialize in boosting your website’s search engine rankings. Our skilled team in the USA focuses on attracting more organic traffic and helping your business grow faster.",
        icon: "/Images/s-icon1.png.webp", // Replace with the correct icon path
    },
    {
        title: "Web Design and Development",
        description: "Your website should do more than just look good – it should build trust and help your business grow. Our web development team is here to create a website that's not only visually appealing but brings high-converting leads.",
        icon: "/Images/s-icon2.png.webp", // Replace with the correct icon path
    },
    {
        title: "Social Media Marketing",
        description: "Our SSM service is all about growing your online presence and turning followers into loyal customers. Want to grow on platforms like Instagram, Facebook, LinkedIn, and TikTok? Our social media marketing can handle it for you!",
        icon: "/Images/s-icon3.png.webp", // Replace with the correct icon path
    },
    {
        title: "Pay-Per-Click",
        description: "If you want to quickly get your business noticed, Pay-Per-Click (PPC) advertising is the way to go. With PPC, your ads reach customers who are already searching for products or services like yours.",
        icon: "/Images/s-icon4.png.webp", // Replace with the correct icon path
    },
    {
        title: "Online Reputation Management",
        description: "If you’re an influencer, entrepreneur, or someone with a personal brand, you know the importance of reputation. Online reputation management keeps your online vibe positive and keeps things real and trustworthy.",
        icon: "/Images/s-icon5.png.webp", // Replace with the correct icon path
    },
    {
        title: "Video Production",
        description: "Our video production services bring your creative ideas to life with captivating, high-quality videos. We specialize in corporate videos, commercials, social media content, and event coverage – all under one roof!",
        icon: "/Images/s-icon6.png.webp", // Replace with the correct icon path
    },
    {
        title: "Content Writing",
        description: "We produce high-quality content, including blogs, articles, website text, and product descriptions, all designed to boost your SEO rankings. Our writers help you build trust and meet your marketing goals.",
        icon: "/Images/s-icon7.png.webp", // Replace with the correct icon path
    },
    {
        title: "Conversion Rate Optimization",
        description: "With our conversion rate optimization services, our experts analyze user behavior on your site, find where things can be better, and develop strategies to improve the overall experience and increase conversions.",
        icon: "/Images/s-icon8.png.webp", // Replace with the correct icon path
    },
];

export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">DIGITAL MARKETING SERVICES DALLAS
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
