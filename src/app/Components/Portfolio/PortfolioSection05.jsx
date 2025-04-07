"use client";
import React from 'react';

export default function PortfolioSection05() {

    const awards = [
        { id: 1, image: '/Images/clienticon1.jpg' },
        { id: 2, image: '/Images/clienticon2.jpg' },
        { id: 3, image: '/Images/clienticon3.jpg' },
        { id: 4, image: '/Images/clienticon4.jpg' },
        { id: 5, image: '/Images/clienticon5.jpg' },
        { id: 6, image: '/Images/clienticon6.jpg' },
        { id: 7, image: '/Images/clienticon7.jpg' },
        { id: 8, image: '/Images/clienticon8.jpg' },
        { id: 9, image: '/Images/clienticon9.jpg' },
        { id: 10, image: '/Images/clienticon10.jpg' },
        { id: 11, image: '/Images/clienticon11.jpg' },
        { id: 12, image: '/Images/clienticon12.jpg' },
        { id: 13, image: '/Images/clienticon13.jpg' },
        { id: 14, image: '/Images/clienticon14.jpg' },
        { id: 15, image: '/Images/clienticon15.jpg' },
        { id: 16, image: '/Images/clienticon16.jpg' },
        { id: 17, image: '/Images/clienticon17.jpg' },
        { id: 18, image: '/Images/clienticon18.jpg' },
    ];

    return (
        <section className='py-12 2xl:py-16 bg-white'>
            <div className="container mx-auto px-4 md:px-5">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
                    Our Clients
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-0">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="w-full h-52 border bg-white flex justify-center items-center group relative overflow-hidden"
                        >
                            {/* Animated Borders */}
                            <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#ED1E3A] group-hover:w-full transition-all duration-200"></span>
                            <span className="absolute top-0 right-0 h-0 w-[2px] bg-[#ED1E3A] group-hover:h-full transition-all duration-200 delay-150"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#ED1E3A] group-hover:w-full transition-all duration-200 delay-300"></span>
                            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#ED1E3A] group-hover:h-full transition-all duration-200 delay-500"></span>

                            {/* Image */}
                            <img
                                src={award.image}
                                alt={`Award ${index}`}
                                className="h-full max-h-full w-auto object-contain grayscale group-hover:grayscale-0 transition z-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
