"use client";

import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <>
            <div className="py-10 lg:py-12 bg-white">
                <div className="container mx-auto text-center px-4 md:px-5">
                    <h2 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-extrabold md:mb-6 text-black py-4">
                        Showcasing Creativity:
                        <br />
                        <span className="font-extralight">Houston’s Finest Web Designs</span>
                    </h2>
                    <p className="text-base lg:text-xl text-gray-600 leading-relaxed mx-auto pt-0 md:pt-2">
                        At <a href="/">WebDev Sphere</a>, we take immense pride in crafting versatile, user-centric web designs that reflect the uniqueness of our clients’ brands. Our portfolio highlights projects from diverse industries, demonstrating why we’re recognized as the best web design company in Houston. From responsive websites to intricate branding elements, we ensure every design resonates with excellence, making us a go-to web design company in Houston.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
                {[
                    { src: '/Images/Image1.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                    { src: '/Images/Image2.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                    { src: '/Images/Image3.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                    { src: '/Images/Image4.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                    { src: '/Images/Image5.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                    { src: '/Images/Image6.jpg', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden h-72 md:h-80"
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="transition-transform duration-300 transform group-hover:scale-110 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 lg:p-10">
                            <div className="text-left text-white">
                                <h2 className="text-xl md:text-2xl lg:text-[#ED1E3A]xl font-bold mb-2">{item.title}</h2>
                                <p className="text-base lg:text-lg">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
