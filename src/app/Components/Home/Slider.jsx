"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slidesData = [
    {
        title: "Shopify Web Development",
        description:
            "Being a top website development company, we specialize in creating beautiful completely optimized Shopify stores. We provide tailored themes, and seamless integrations to make sure that your Shopify store runs at maximum performance.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "Custom Web Design",
        description:
            "As a <a href='/houston-texas-web-design' rel='noopener noreferrer'>web design company</a>, we create user-focused designs to make your site appealing. There is a different layout created for every experience of the user, recreating the brand's dictionary.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "WordPress Development",
        description:
            "As a part of our website design company services, we can provide you with advanced WordPress solutions. We provide a robust, scalable, and easy-to-adapt platform built on custom themes and with plugin integrations.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "E-commerce Development",
        description:
            "With our eCommerce solutions, businesses are able to thrive with optimized, conversion-focused platforms. We are a premier web development company, specializing in driving sales and customer satisfaction with intuitive, high-performing websites.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "Laravel Web Development",
        description:
            "We are known for delivering web applications secure, scalable, and high-performance based on Laravel development. We use this powerful PHP framework to put together solutions that are both efficient and adaptable to anything.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "Custom Web Development",
        description:
            "Being a custom web development company, we develop custom tailored solutions as per your specific corporate goals. Each project is handled from concept to deployment with precision and in mind for long-term success.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "PHP Development",
        description:
            "We have the best people writing PHP to make flexible, reliable applications that serve the needs of complex demands. We create dynamic user experiences, with data driven php solutions.",
        icon: "/Images/serv-icon-5.png",
    },
    {
        title: "Website Maintenance & Support",
        description:
            "Ongoing website maintenance services from us ensure a site that is fully updated, performing at its peak, and just as easy to use as it was yesterday. Being a dependable website development company, we stand by your site’s success at every step.",
        icon: "/Images/serv-icon-5.png",
    },
];

export default function Slider() {
    return (
        <>
            <div className="xl:w-2/3 lg:w-1/2 w-full">
                <Swiper
                    spaceBetween={20} // Space between each slide
                    slidesPerView={3} // Show 3 slides at once
                    slidesPerGroup={1} // Move one slide at a time
                    loop={true} // Enable infinite loop
                    pagination={{ clickable: true }} // Optional: enable pagination
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1366: { slidesPerView: 3 },
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="relative bg-[#ED1E3A] text-white p-8 rounded-xl shadow-lg flex flex-col items-start min-h-[450px] justify-between group">
                                <img
                                    src={slide.icon}
                                    alt={`${slide.title} Icon`}
                                    className="w-20 h-20 mb-4 object-contain z-10"
                                />
                                <h3 className="text-2xl font-bold mb-4 z-10">{slide.title}</h3>
                                <p
                                    className="text-base leading-relaxed flex-grow z-10"
                                    dangerouslySetInnerHTML={{ __html: slide.description }}
                                />
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 min-h-[300px]"
                                    style={{ backgroundImage: `url('/Images/download.svg')` }}
                                ></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}
