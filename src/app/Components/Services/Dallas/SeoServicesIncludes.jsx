import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Local SEO',
        description: 'Looking to get more local customers? Whether you have a physical store in Chicago or offer home services around the city, we’ll get you top spots in “near me” searches, so your business is the first thing people find.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Keyword Research and Analysis',
        description: 'Your SEO strategy starts with keyword research and analysis. By keeping an eye on trending keywords, you can make sure your content connects with your target audience and grows your organic reach.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Marketing',
        description: 'When you customize your content strategy, you’re strategically targeting the right audience in the most relevant spaces. Engaging with your audience where they’re most active boosts interest and drives traffic.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'At Web Dev Sphere, our SEO services Dallas optimize websites for ultimate performance. Our team works on on-page SEO strategies to ensure your website ranking is much higher and attracts more traffic.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'Struggling with ranking on Google’s first page? Technical SEO problems could be why you’re not ranking higher on the SERP. Issues like rel=canonical tags or poor meta descriptions might be holding you back.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Amazon Marketing Services',
        description: 'Amazon marketing services can be a game-changer for brands looking to enhance their visibility, attract new customers, and drive sales. We help you promote your products and make them stand out in the market.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'eCommerce SEO',
        description: 'Our team of SEO experts specializes in implementing effective Houston SEO strategies tailored specifically for eCommerce businesses, helping you drive organic traffic, boost sales, and grow your brand to success.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Franchise SEO',
        description: 'Our Franchise SEO services address the unique challenges of multi-location businesses. We focus on enhancing your online visibility, driving local traffic, and ultimately increasing your sales across all franchise locations.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Digital PR & Link Building',
        description: 'Digital PR & link building strengthen your online reputation by getting your brand featured on trusted sites and generating quality backlinks. With targeted outreach, we ensure your brand gets the exposure it deserves.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    }
];

export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Our All-Inclusive SEO Services Austin
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
