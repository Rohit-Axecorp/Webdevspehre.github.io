import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Keyword Research',
        description: 'With our robust San Antonio SEO service, the first step starts with thorough keyword research. Using these metrics, we identify high-value and relevant keywords so you can rank for relevant search terms with qualified traffic that will capture leads with intent.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO Audit',
        description: 'With our expert SEO audit services in San Antonio, you’ll unlock your website’s full potential. Having examined your site in a thorough manner, we find and fix the bottlenecks, giving you actionable suggestions to improve your ranking and visibility.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'We optimize the structure, content, and metadata of your website using our specially developed on-page SEO services in San Antonio. To ensure your site ranks higher, we provide a blissful user experience for your consumers.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Off-Page SEO',
        description: 'With our off-page SEO in San Antonio, we use our off-page SEO services to make your brand more authoritative through effective ones. So, we drive sustainable traffic and improve your website\'s credibility on the search engines.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO Content Optimization',
        description: 'Our SEO company in San Antonio knows how to target your audience using content optimization strategies. There we optimize each piece—blogs, landing pages, whatever—from a keyword, relevance, and user intent, bringing in better rankings.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Local SEO',
        description: 'For our local SEO company San Antonio, it is time to dominate local search results. To start, we look to optimize your Google Business Profile, local citations, and geo-targeted keywords to generate traffic for people from locations near you.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'Our San Antonio SEO company specializes in resolving and identifying technical problems that impact your site ranking. It includes improving crawlability, fast page load, and site structure in general, allowing your site to realize.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'E-commerce SEO',
        description: 'Our customized SEO services San Antonio for e-commerce platforms will help your online store gain visibility. We optimize each and every element from category pages to product descriptions to optimize it for search engines and shoppers.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'We don’t just bring traffic to the table with our San Antonio SEO service. We inspect your site for any strategic changes you want and analyze your user behavior to make sure visitors stay on, become loyal customers, and boost your bottom line.',
        icon: '/Images/s-icon9.png', // Replace with the correct icon path
    },
];

export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">San Antonio SEO Services That Deliver Results
                    </h3>
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
