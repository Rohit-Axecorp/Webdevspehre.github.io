"use client";


import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='container bg-gradient-to-t from-red-950 via-red-600 to-red-400 h-[720px] -mt-64 rounded-3xl'>
                <footer className="w-full pt-60 pb-5">
                    <div className="before:content-[''] before:absolute before:left-0 before:top-[100px] before:h-[1px] before:w-full before:bg-[#AFAFB6]"></div>
                    <div className="max-w-[1250px] mx-auto px-[40px] py-[30px]">

                        <div className="flex justify-between gap-12">
                            <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-xl mb-2 relative">Quick Links <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div></li>
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
                            <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-xl mb-2 relative">Services <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div></li>
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
                            <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-xl mb-2 relative invisible"> demo  <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div></li>
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
                            <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-xl mb-2 relative"> Solutions <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Learning Management Solution/LMS</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">E-Learning</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Ecommerce Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">CMS Development</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Property Management Solution</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Template Management Solution</a></li>
                            </ul>
                            <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-xl mb-2 relative">Contacts <div className="before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-[35px] before:bg-white"></div></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">Office # 802, B8 Building, Al Barsha 1, Dubai UAE</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">info@webdevspehre.com</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">123456789</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="#">123456789</a></li>
                                <li className="my-3 opacity-80 hover:underline text-sm"><a href="https://www.google.com/maps/place/Digital+Graphiks/@25.1134066,55.2004332,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4315868c143d:0xa24ac660b687c87!8m2!3d25.1134018!4d55.2030081!16s%2Fg%2F12hxchh1g?entry=tts">Location</a></li>
                                <li className="my-3 opacity-80"><img src="/Images/download3.svg" alt="" /></li>
                            </ul>
                            {/* <ul className="w-[calc(100%/5-10px)] text-white">
                                <li className="text-lg mb-2 relative">Subscribe</li>
                                <li className="mb-2">
                                    <input type="text" placeholder="Enter your email" className="h-10 w-[calc(100%+55px)] border-2 border-[#AFAFB6] rounded-md px-4 text-black placeholder-[#AFAFB6]" />
                                </li>
                                <li>
                                    <input type="button" value="Subscribe" className="bg-white text-[#140B5C] h-10 w-[calc(100%+55px)] rounded-md cursor-pointer hover:opacity-80" />
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </footer>
            </div>
            <div className="w-full">
                <div className="max-w-[1250px] mx-auto py-5 flex justify-center">
                    <span className="text-black text-sm opacity-80">Copyright © 2024 <a href="#" className="hover:underline">Webdevspehre</a>. All rights reserved</span>
                </div>
            </div>
        </>
    )
}
