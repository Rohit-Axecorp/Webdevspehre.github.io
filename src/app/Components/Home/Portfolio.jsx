"use client";

import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <>
            <div className="py-10 lg:py-14 bg-white">
                <div className="container mx-auto text-center px-4 md:px-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black py-4">
                        Web Design <span className="font-extralight">Portfolio</span>
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto pt-0 md:pt-2">
                        Element8, your trusted partner for avant-garde web design in Dubai. In our portfolio, you’ll find a blend of creativity and functionality that truly embodies our dedication to providing extraordinary digital experiences. We take great care in crafting each project, aiming to not only enhance brands but also redefine what users can expect. Explore our curated selection below, and witness the transformative power of web design Dubai, where innovation meets inspiration.
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
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.title}</h2>
                                <p className="text-base lg:text-lg">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
