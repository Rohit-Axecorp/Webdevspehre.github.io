import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Keyword Research',
        description: 'Our detailed keyword research enables us to uncover the most profitable and search-intensive industry keywords that really count. As an SEO company El Paso, we’re trusted to combine advanced tools and market knowledge to determine the keyword leads to conversions and visibility.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Competitor Analysis',
        description: 'Get ahead of the competition by understanding our Competitor analysis. Through assessing your competitors, we have an opportunity to learn of their strengths and find leverage points for outperforming them. Find the best SEO company El Paso TX to give a competitive edge to your business.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Link Building',
        description: 'We build high-quality backlinks from authoritative sources, strengthening your website’s credibility and rankings. As an experienced El Paso TX SEO company, we ensure every link supports your long-term success.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO Content Optimization',
        description: 'Boost engagement and rankings with our expert SEO content optimization. By integrating targeted keywords and enhancing readability, we transform your content into a powerhouse of conversions. Trust the SEO company in El Paso to make your content shine.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'Our on-page SEO services use meta tags to structure data to fine-tune your site to its fullest potential. That’s why in El Paso SEO Services, we have the expertise to make every page of your website work in full alignment with search engine algorithms.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Local SEO',
        description: 'Take up our local SEO and focus on local search results. Going geo-specific with your keywords, understanding Google My Business optimization, and producing location-centric content will add to your visibility. The best SEO service El Paso has to offer, partner with us.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'Our technical SEO services optimize your website’s architecture, speed, and mobile compatibility. With our SEO agency El Paso working in the background, we get around technical barriers that can keep your search rankings down.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'E-commerce SEO',
        description: 'With our specialized e-commerce SEO strategies you can increase traffic and drive sales of your online store. As an El Paso TX SEO agency, we offer product optimization and structured data implementation to make your store stand out.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Turn visitors into loyal customers with our proven conversion rate optimization techniques. By analyzing user behavior and testing strategies, we maximize your ROI. Trust the El Paso SEO companies to supercharge your website’s performance.',
        icon: '/Images/s-icon9.png.webp', // Replace with the correct icon path
    },
];


export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">El Paso SEO Services That Deliver Results
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
