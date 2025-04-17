import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Keyword Research',
        description: 'Our experts dive deep into search trends and audience behavior to identify keywords with the highest potential. By analyzing intent and competition, we craft a strategic foundation for content that ranks. This level of detail ensures your business stays ahead with top-notch SEO services Houston businesses trust for impactful growth.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Competitor Analysis',
        description: 'Gain a competitive edge with detailed insights into your competitors\' strategies. We analyze their strengths and weaknesses, identifying opportunities to improve your online presence. With Google SEO services in Houston, you can outshine the competition in your niche market.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Link Building',
        description: 'We create high-quality backlinks from authoritative websites to enhance your domain authority and search engine rankings. Our approach as a local SEO company in Houston ensures your business is seen as credible, boosting organic traffic and engagement.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO Content Optimization',
        description: 'We optimize your website’s content for keywords, readability, and user experience. This ensures that your pages resonate with both users and search engines. Trust our SEO service in Houston to deliver a content strategy that maximizes visibility and conversions.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'We optimize critical on-page elements, including meta tags, headings, and internal linking structures, to enhance website performance. With the best Houston SEO company, you can achieve optimal rankings and user engagement.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Local SEO',
        description: 'Dominate local search results with tailored strategies like Google My Business optimization, localized content, and citation management. As an SEO company Houston, we help your business become a go-to choice for local customers.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'We resolve technical issues such as site speed, mobile optimization, and structured data to improve website performance. So, partner with our trusted SEO company Houston TX to enhance user experience and search engine rankings.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'E-commerce SEO',
        description: 'Boost your online store’s sales with SEO strategies designed for product discovery and checkout ease. Our SEO Houston company helps e-commerce businesses achieve sustainable growth through optimized listings and conversions.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Conversion Rate Optimization',
        description: 'We transform website visitors into loyal customers by improving user experience, calls-to-action, and navigation. With our proven Houston SEO service, your business will see increased engagement and revenue.',
        icon: '/Images/s-icon9.png', // Replace with the correct icon path
    },
    // Add more services as needed
];
export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Experience Excellence with Professional Houston SEO Services
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
