"use client";

import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='container bg-gradient-to-t from-red-950 via-red-600 to-red-400 min-h-[720px] -mt-64 md:rounded-3xl rounded-none'>
                <footer className="w-full pt-60 pb-5">
                    <div className="before:content-[''] before:absolute before:left-0 before:top-[100px] before:h-[1px] before:w-full before:bg-[#AFAFB6]"></div>
                    <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 h-full">
                            {/* Column 1 */}
                            <ul className="text-white">
                                <li className="text-xl mb-2 relative">
                                    Quick Links
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                {/* Example image added in this column */}
                                <li className="mb-4">
                                    {/* <img src="/Images/footer-logo.svg" alt="Footer Logo" className="w-24 h-auto" /> */}
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Company</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Case studies</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Blogs</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Contact Us</a></li>
                                <hr className="bg-gray-300 w-4/5 h-[1px] my-3 border-0" />
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Dubai</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Abu Dhabi</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Sharjah</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Ajman</a></li>
                            </ul>
                            
                            {/* Column 2 */}
                            <ul className="text-white">
                                <li className="text-xl mb-2 relative">
                                    Services
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Social Media Marketing</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Influencer Marketing</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Content Creation</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Search Engine Optimization</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Content Writing</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Pay Per Click</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Video Animation</a></li>
                                <hr className="bg-gray-300 w-4/5 h-[1px] my-3 border-0" />
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Web Design</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">UI/UX Design</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Logo Design</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Corporate Branding</a></li>
                            </ul>

                            {/* Column 3 */}
                            <ul className="text-white">
                                <li className="text-xl mb-2 relative invisible">
                                    demo
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Web Application Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Wordpress Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Webflow Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Custom Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Mobile App Development</a></li>
                                <hr className="bg-gray-300 w-4/5 h-[1px] my-3 border-0" />
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Magento Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Shopify Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Woocommerce Web Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Custom Ecommerce Solution</a></li>
                            </ul>

                            {/* Column 4 */}
                            <ul className="text-white">
                                <li className="text-xl mb-2 relative">
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

                            {/* Column 5 */}
                            <ul className="text-white">
                                <li className="text-xl mb-2 relative">
                                    Contacts
                                    <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div>
                                </li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Office # 802, B8 Building, Al Barsha 1, Dubai UAE</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">info@webdevspehre.com</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">123456789</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">123456789</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="https://www.google.com/maps/place/Digital+Graphiks/@25.1134066,55.2004332,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4315868c143d:0xa24ac660b687c87!8m2!3d25.1134018!4d55.2030081!16s%2Fg%2F12hxchh1g?entry=tts">Location</a></li>
                                <li className="my-3 opacity-80">
                                    <img src="/Images/download3.svg" alt="Google Map" className="w-40 h-auto" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
