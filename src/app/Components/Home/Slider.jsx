"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slidesData = [
    {
        title: "Shopify Web Development",
        description: "As a leading website development company, we specialize in creating fully optimized, visually captivating Shopify stores. From tailored themes to seamless integrations, we ensure your Shopify store is built for peak performance.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Custom Web Design",
        description: "Our web design company delivers customized, user-centric designs that are both functional and aesthetically engaging. Each layout is crafted to provide a memorable user experience, capturing your brand’s essence with precision.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "WordPress Development",
        description: "We offer advanced WordPress solutions as part of our website design company services. From custom themes to plugin integrations, we deliver a robust, scalable platform that adapts effortlessly to your evolving needs.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "E-commerce Development",
        description: "Our eCommerce solutions enable businesses to thrive with optimized, conversion-focused platforms. As a premier web development company, we deliver intuitive, high-performing stores that drive sales and customer satisfaction.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Laravel Web Development",
        description: "At WebDev Sphere, our expertise in Laravel development ensures your web applications are secure, scalable, and high-performing. With this powerful PHP framework, we build solutions that are both efficient and adaptable to complex requirements.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Custom Web Development",
        description: "As a custom web development company, we create tailor-made solutions that align with your unique business objectives. From concept to deployment, each project is handled with precision and a focus on long-term success.",
        icon: "/Images/serv-icon-5.png"
    }, {
        title: "PHP Development",
        description: "Our skilled developers leverage PHP to build flexible, reliable web applications that meet complex demands. Recognized as an innovative web development company, we provide seamless, data-driven PHP solutions for dynamic user experiences.",
        icon: "/Images/serv-icon-5.png"
    },
    {
        title: "Website Maintenance & Support",
        description: "Our ongoing website maintenance services ensure peak performance and security, keeping your site fully updated and user-friendly. As a trusted website development company, we’re here to support your site’s success at every step",
        icon: "/Images/serv-icon-5.png"
    }
];

export default function Slider() {
    return (
        <>
            <div className=' xl:w-2/3 lg:w-1/2 w-full'>
                <Swiper
                    spaceBetween={20}   // Space between each slide
                    slidesPerView={3}    // Show 3 slides at once
                    slidesPerGroup={1}   // Move one slide at a time
                    loop={true}          // Enable infinite loop
                    pagination={{ clickable: true }}  // Optional: enable pagination
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1366: { slidesPerView: 3 }
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="relative bg-[#ED1E3A] text-white p-8 rounded-xl shadow-lg flex flex-col items-start h-full min-h-[300px] justify-between group">
                                <img
                                    src={slide.icon}
                                    alt={`${slide.title} Icon`}
                                    className="w-20 h-20 mb-4 object-contain z-10" // Ensure image stays above the background
                                />
                                <h3 className="text-2xl font-bold mb-4 z-10">{slide.title}</h3>
                                <p className="text-base leading-relaxed flex-grow z-10">{slide.description}</p>

                                {/* Background image on hover */}
                                <div className="absolute inset-0 bg-center bg-no-repeat rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                                    style={{ backgroundImage: `url('/Images/download.svg')` }}>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
