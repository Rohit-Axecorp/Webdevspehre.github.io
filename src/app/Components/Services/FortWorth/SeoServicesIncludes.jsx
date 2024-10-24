import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: 'Local SEO',
        description: 'Our local SEO service helps you attract more local customers than you thought. Whether you run a physical store in Fort Worth or offer home services across the city, we’ll help you rank at the top of searches.',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Keyword Research & Analysis',
        description: 'Your SEO strategy kicks off with in-depth keyword research and analysis. By tracking the latest keyword trends, we’ll help you align your content with what your audience is searching for, maximizing your organic reach.',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Writing',
        description: 'Great content is the heart of any successful business’s online presence. Our content writing services are designed to help you tell your story, connect with your audience, and grow your brand in the competitive market.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'Web Dev Sphere\'s specialized on-page SEO services are designed to optimize every element of your website, ensuring it not only ranks well in search engines but also provides an exceptional user experience.',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'Struggling to secure a spot on Google’s first page? Many businesses face hurdles in achieving higher rankings. Our technical SEO service optimizes the behind-the-scenes elements of your website to ensure it is well-optimized.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Amazon Marketing Services',
        description: 'With millions of shoppers browsing Amazon every day, making your products stand out is essential. Our Austin Texas SEO experts help you promote your products effectively and get them noticed in the crowded marketplace.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'eCommerce SEO',
        description: 'A well-optimized website is the backbone of any successful e-commerce business. We specialize in helping online stores like yours enhance visibility, attract the right customers, and ultimately drive sales.',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Franchise SEO',
        description: 'With multiple locations to manage, ensuring each franchise is visible online can feel overwhelming. Our team specializes in creating tailored SEO strategies that optimize individual franchise locations.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Digital PR & Link Building',
        description: 'Our link-building strategies focus on acquiring high-quality backlinks from reputable sites, which are crucial for improving your search engine rankings. Build relationships with sites that align with your brand’s values!',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
];

export default function SeoServicesIncludes() {
    return (
        <section className='bg-gray-100'>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-red-500">Our All-Inclusive SEO Services Austin</h2>
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
    );
}
