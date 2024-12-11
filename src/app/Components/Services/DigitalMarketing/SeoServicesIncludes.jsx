import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Search Engine Optimization - SEO',
        description: 'Being a leading SEO company, we help your website climb to the top of search engine results. Our team of SEO specialists in the USA focuses on driving more organic traffic, generating leads, and growing your business.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Web Design and Development',
        description: 'Your website should inspire trust, drive engagement, and help your business grow. Our Web Development team will create a stunning, user-friendly website that not only looks great but also drives conversions.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Social Media Marketing',
        description: 'Our SMM service is designed to help you grow your online presence, connect with your audience, and turn followers into loyal customers. Whether it’s Instagram, Facebook, LinkedIn, or TikTok, we handle it all!',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Pay-Per-Click',
        description: 'If you’re looking for a fast way to get your business in front, Pay-Per-Click (PPC) advertising is the answer. With PPC, your ads are shown to targeted customers who are already searching for products or services.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Online Reputation Management',
        description: 'Online reputation management helps maintain a good image on the web. The services are focused on monitoring, addressing, and mitigating negative content or reviews that may harm a business brand or personal reputation.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Video Production',
        description: 'Video production services can help bring your vision to life with highly engaging, high-quality video content. Be it corporate videos, commercial videography, social media content, or event coverage, we handle it all!',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Writing',
        description: 'We create high-quality content that includes blogs, articles, website content, product descriptions, and more. Our writers ensure you build trust with your audience and reach your marketing objectives.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Conversion Rate Optimization',
        description: 'CRO services include the analysis of general user behavior, finding exactly where improvements need to be made, and implementing a plan for enhancing user experience and increasing conversions.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
];

export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-[#ED1E3A] md:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Experience Excellence with Professional Houston SEO Services
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
