import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Local SEO',
        description: 'Our local SEO services help you rise to the top of local searches, whether you’re a local restaurant or a real estate agent serving the Plano area. We’ll optimize your business for “near me” searches, ensuring you’re the first choice.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Keyword Research & Analysis',
        description: 'Our keyword research and analysis service is all about finding the search terms that local customers are actually using. We get into Plano-specific search data, uncovering the keywords that will drive targeted traffic to your site.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Writing',
        description: 'Need content that connects with your Plano audience and drives results? Our content writing service is here to help your business shine. Our expert writers create conversion-driven content that boosts your visibility in search engines.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'Our on-page SEO service is all about making sure your site is fully optimized to capture attention, rank higher, and convert visitors into customers. With Web Dev Sphere, you’ll have a website that will stand out and succeed.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'Is your website struggling to perform? Our technical SEO service is here to help! We focus on improving the backend aspects of your site, to help it perform better, be easier to navigate, and rank higher on search engines.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Amazon Marketing Services',
        description: 'With millions of listings, it’s crucial to have a solid marketing strategy to capture the attention of potential buyers. Our Amazon Marketing Services are designed to help your products stand out in a competitive marketplace.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'eCommerce SEO',
        description: 'Ready to take your eCommerce store to new heights? Our team of experts optimizes your product listings, category pages, and overall site structure to ensure they’re easily found by both search engines and shoppers.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Franchise SEO',
        description: 'Our Franchise Houston SEO services tackle the unique challenges faced by multi-location businesses. We concentrate on optimizing your online presence, enhancing local visibility, and driving targeted traffic to each franchise location.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Digital PR & Link Building',
        description: 'Digital PR and link building are essential for strengthening your online reputation and boosting your brand\'s visibility. By getting your brand featured on trusted websites, we help you build credibility and establish authority in the industry.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    }
];

export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Plano SEO Services
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
