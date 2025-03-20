import React from 'react'
import Image from 'next/image';
const services = [
    {
        title: 'UI/UX Design',
        description: 'Our web design development service focuses on crafting visually stunning and user-friendly designs. We create engaging interfaces and seamless user experiences, ensuring your website not only captivates visitors but also drives meaningful interactions, boosting conversions and building brand loyalty.',
        icon: '/Images/Frame1.svg', // Replace with the correct icon path
    },
    {
        title: 'Custom Web Development',
        description: 'Our tailored web development service in London ensures websites align with your unique business objectives. From robust coding to feature-rich functionality, we deliver scalable, custom-built solutions that stand out, ensuring your digital presence reflects your brand’s identity and drives measurable success.',
        icon: '/Images/Frame2.svg', // Replace with the correct icon path
    },
    {
        title: 'E-commerce Web Development',
        description: 'Our web development company in London possesses the expertise to transform your online store. Secure, scalable, and user-friendly eCommerce platforms that streamline customer journeys. We further integrate multiple payment gateways and maximize conversions helping you grow your business in the highly competitive digital space.',
        icon: '/Images/Frame3.svg', // Replace with the correct icon path
    },
    {
        title: 'Laravel Web Development',
        description: 'Take advantage of Laravel with our Laravel web development London solutions. We provide you with scalable applications, seamless integration, and advanced functionalities to drive efficiency and improve your business operations through secure, high-performance applications built specifically to your needs.',
        icon: '/Images/Frame4.svg', // Replace with the correct icon path
    },
    {
        title: 'WordPress Web Development',
        description: 'Our London web developers craft versatile WordPress websites using WordPress with great functionality so you can be sure they will be practical and look great too. Whether it be a blog, portfolio, or business site, we provide a responsive and SEO-optimized platform for your business goals and better user experience.',
        icon: '/Images/Frame5.svg', // Replace with the correct icon path
    },
    {
        title: 'CMS Web Development',
        description: 'Our customized web development company in London services simplify content management. By creating CMS platforms, we enable content updates, intuitive workflows, and scalability so businesses can effortlessly maintain control of their digital content strategy.',
        icon: '/Images/Frame6.svg', // Replace with the correct icon path
    },
    {
        title: 'Web App or Web Portal Development',
        description: 'Proactively propel your digital operations through our incisive Web Development service provider solutions. Working with you, we design and develop feature-rich web portals and applications that are properly designed, fully usable, secure, and scalable to support long-term growth.',
        icon: '/Images/Frame2.svg', // Replace with the correct icon path
    },
    {
        title: 'Website Maintenance & Update',
        description: 'Our web development in London will help ensure you achieve peak website performance. Along with regular and updated features, security enhancements, and technical support, we ensure that your site is always optimized, secure, and is capable of delivering the best user experience for your visitors..',
        icon: '/Images/Frame1.svg', // Replace with the correct icon path
    },
    {
        title: 'Web Content Development',
        description: 'Ensure your web design engagement through our web development company in London. Through our effort in creating SEO Optimized and user-friendly content, we bring your brand visibility, and credibility, build strong connections with the target audience, and create a long-lasting digital success.',
        icon: '/Images/Frame5.svg', // Replace with the correct icon path
    },

];
export default function SeoServicesIncludes() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold md:text-center mb-8 text-[#ED1E3A]">Bespoke Web Development Services in London for Your Unique Business
                    </h3>
                    <p className="2xl:text-lg text-center lg:text-base text-sm text-black leading-7 mb-8">
                            WebDev Sphere is a web development agency in London that has built a great reputation for delivering user-first web solutions that clearly produce results. We facilitate our clients with an experienced and skillful developer team to create fully functional websites, aesthetically appealing, and high-performing to serve various business requirements. Being among the top web development companies in London, we concentrate on excellence, easy user experience, and customer satisfaction. Our web solutions align with your objectives and set out to deliver measurable results.

                        </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <Image src={service.icon} alt={`${service.title} Icon`} width={50} height={50} />
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
