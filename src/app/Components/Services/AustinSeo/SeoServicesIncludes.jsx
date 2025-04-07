import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'Local SEO',
        description: 'We optimize your online presence to ensure your business appears prominently in local search results and maps. When potential customers search for services in your area, you will be at the top of their list!',
        icon: '/Images/s-icon1.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Keyword Research and Analysis',
        description: 'We believe that effective keyword strategies can open the door to increased visibility. With our SEO services, we’ll help you discover the right keywords, develop a winning strategy, and ultimately drive more traffic. ',
        icon: '/Images/s-icon2.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Content Marketing',
        description: 'Your brand deserves to shine through exceptional content that engages, informs, and converts. With our content writing services, you’ll receive high-quality, customized content that aligns with your goals.',
        icon: '/Images/s-icon3.png.webp', // Replace with the correct icon path
    },
    {
        title: 'On-Page SEO',
        description: 'Your website deserves to be seen and appreciated online. With our on-page SEO services, our team will help you fine-tune every aspect of your site, ensuring it’s optimized for search engines and user-friendly. ',
        icon: '/Images/s-icon4.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Technical SEO',
        description: 'With our specialized technical SEO services, our expert team ensures your site is optimized for both users and search engines, leading to improved performance, higher rankings, and a better overall experience.',
        icon: '/Images/s-icon5.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Amazon Marketing Services',
        description: 'Your product listing is your storefront on Amazon, and it needs to make a strong first impression. We optimize your product titles, descriptions, and bullet points to ensure they are keyword-rich and compelling.',
        icon: '/Images/s-icon6.png.webp', // Replace with the correct icon path
    },
    {
        title: 'eCommerce SEO',
        description: 'Our e-commerce SEO services enhance your visibility and drive targeted traffic. We focus on optimizing every aspect of your website, from product descriptions to technical elements that improve site performance.  ',
        icon: '/Images/s-icon7.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Franchise SEO',
        description: 'Franchising can be a powerful way to grow your brand, but standing out can be challenging. We help franchise businesses boost their online visibility, both at the franchise level and across the entire brand.',
        icon: '/Images/s-icon8.png.webp', // Replace with the correct icon path
    },
    {
        title: 'Digital PR & Link Building',
        description: 'Quality backlinks from reputable sites signal search engines that your content is valuable and trustworthy. Our approach is focused on acquiring links from authoritative sources that align with your brand’s goals. ',
        icon: '/Images/s-icon9.png', // Replace with the correct icon path
    },

];
export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Our All-Inclusive SEO Services Austin
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
