import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Local SEO',
        description: 'Whether you\'re a brick-and-mortar businesses or simply service the Chicago area, our experts will get you ranking for coveted "near me" searches, sending high-intent customers your way.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Keyword Research and Analysis',
        description: 'An essential part of your SEO strategy is keyword research and analysis. Staying up-to-date on the trending keywords in your industry is imperative to getting your content in front of the right audience and increasing your organic traffic.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Marketing',
        description: 'With channel-specific content marketing strategies, you can form a connection between you and your audience. This connection will lead to improved organic traffic and recognized brand awareness.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Site and Off-Site Optimization',
        description: 'Our experts are able to implement both on-site and off-site optimization like link building, metadata, title tags, and more.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'B2B SEO',
        description: 'B2B SEO is a whole different ball game than B2C, local, or international SEO. From creating buyer personas to optimizing your landing pages, there is a lot of work to be done, and our team of experts are ready to help.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Lead Generation SEO',
        description: 'Ignite has worked with hundreds of lead generation companies and knows the intricacies of working with this type of business. We have the skills and knowledge to get your website ranking, converting, and getting those leads in.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO for All Industries',
        description: 'Ignite Visibility has a deep understanding of many different industries including automotive, home services, healthcare, finance and more. Let us create a custom strategy that works for your business.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO for All Industries',
        description: 'Ignite Visibility has a deep understanding of many different industries including automotive, home services, healthcare, finance and more. Let us create a custom strategy that works for your business.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'SEO for All Industries',
        description: 'Ignite Visibility has a deep understanding of many different industries including automotive, home services, healthcare, finance and more. Let us create a custom strategy that works for your business.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    // Add more services as needed
];
export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-4xl font-bold text-center mb-8 text-red-500">Chicago SEO Services Include</h2>
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
