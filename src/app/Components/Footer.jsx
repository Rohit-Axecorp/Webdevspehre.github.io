"use client";

import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='container bg-gradient-to-t from-red-950 via-red-600 to-red-400 min-h-[720px] -mt-64 md:rounded-3xl rounded-none'>
                <footer className="w-full pt-60 pb-5">
                    {/* Horizontal line above footer content */}
                    <div className="before:content-[''] before:absolute before:left-0 before:top-[100px] before:h-[1px] before:w-full before:bg-[#AFAFB6]"></div>
                    <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-12 h-full">
                            {/* Column 1 - Quick Links */}
                            <ul className="text-white">
                                <li className="text-lg mb-2 relative">
                                    Quick Links
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#" target='_blank'>About Us</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#" target='_blank'>Contact Us</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#" target='_blank'>Terms & Conditions</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#" target='_blank'>Privacy Policy</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/sitemap.html" target='_blank'>Sitemap</a></li>
                            </ul>

                            {/* Column 2 - Services */}
                            <ul className="text-white">
                                <li className="text-lg mb-2 relative">
                                    Locations
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/austin-seo-company">Austin</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/fort-worth-seo-company">Fort Worth</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/dallas-seo-company">Dallas</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/plano-seo-company">Plano</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/san-antonio-seo-company">San Antonio</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/el-paso-seo-company">El Paso</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/houston-seo-company">Houston</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="/london-seo-company">London</a></li>
                            </ul>
                            {/* Column 3 - Web Development Services */}
                            {/* <ul className="text-white">
                                <li className="text-lg mb-2 relative invisible">
                                    demo
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Web Application Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">WordPress Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Webflow Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Custom Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Mobile App Development</a></li>
                                <hr className="bg-gray-300 w-4/5 h-[1px] my-3 border-0" />
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Magento Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Shopify Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Woocommerce Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Custom Ecommerce Solution</a></li>
                            </ul> */}
                            {/* Column 4 - Solutions */}
                            <ul className="text-white">
                                <li className="text-lg mb-2 relative">
                                    Solutions
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Learning Management Solution/LMS</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">E-Learning</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Ecommerce Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">CMS Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Property Management Solution</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Template Management Solution</a></li>
                            </ul>
                            {/* Column 5 - Contacts */}
                            <ul className="text-white">
                                <li className="text-lg mb-2 relative">
                                    Contacts
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">American General Center, 2929 Allen Pkwy STE. 200, Houston, TX 77019</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="mailto:info@webdevspehre.com">info@webdevspehre.com</a></li>
                                {/* <li className="my-3 opacity-80">
                                    <img src="/Images/download3.svg" alt="Google Map" className="w-40 h-auto" />
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="w-full bg-white text-black text-center py-4">
                <p className="2xl:text-lg lg:text-base text-sm font-medium">
                    © {new Date().getFullYear()} Web Dev Sphere. All rights reserved.
                </p>
            </div>
        </>
    );
}