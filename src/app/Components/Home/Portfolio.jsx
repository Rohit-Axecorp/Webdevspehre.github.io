"use client";

import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <>
            <div className="py-10 2xl:py-12 bg-white">
                <div className="container mx-auto text-center px-4 md:px-5">
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-extrabold 2xl:mb-4 text-[#ED1E3A] py-4">
                        Transforming Ideas into Digital Masterpieces
                        <br />
                        <span className="font-medium text-black"> Our Web Development Company Portfolio</span>
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-sm text-gray-600 leading-7 mx-auto">
                        At WebDev Sphere, we pride ourselves on being a versatile web design and development company, crafting tailor-made digital solutions that stand out in the industry. From dynamic eCommerce platforms to sleek corporate websites, our projects reflect creativity and innovation. As the best <a href='https://webdevsphere.com/'>web development company,</a> we bring your vision to life with a perfect blend of functionality and aesthetic appeal, ensuring every project is unique and impactful.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
                {[
                    { src: '/Images/Image1.jpg' },
                    { src: '/Images/Image2.jpg' },
                    { src: '/Images/Image3.jpg' },
                    { src: '/Images/Image4.jpg' },
                    { src: '/Images/Image5.jpg' },
                    { src: '/Images/Image6.jpg' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden h-60 2xl:h-80"
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="transition-transform duration-300 transform group-hover:scale-110 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 lg:p-10">
                            {/* <div className="text-left text-white">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.title}</h2>
                                <p className="text-base lg:text-lg">{item.desc}</p>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
