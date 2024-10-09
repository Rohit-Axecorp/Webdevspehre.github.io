"use client";


import React from 'react'

export default function Services() {
    return (
        <div className=" py-12">
            <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-4 container">

                <div className="2xl:w-1/3 xl:w-1/2 w-full flex justify-center ">
                    <div className="relative">
                        <img className="object-cover " src="/Images/LL_WhyChoose-2024.webp" alt="Profile Image" />

                    </div>
                </div>


                <div className="2xl:w-2/3 xl:w-1/2 mt-8 md:mt-0 w-full text-center md:text-left">
                    <h2 className="md:text-5xl text-3xl font-normal mb-4">WHY CHOOSE US AS YOUR WEB DESIGN COMPANY?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-red-500">FULL SERVICE EXPERIENCE</h3>
                            <p className="text-[#626161] text-sm">Why choose Webdevspehre web design and development services? Because we serve a potent mix of web design & development, brand strategy, and digital marketing.

                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-500">MOBILE RESPONSIVE WEB DESIGN</h3>
                            <p className="text-[#626161]">Each of our websites is designed and developed to be mobile responsive first and foremost to provide the best user experience—no matter the type of device.

                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-500">WORLD-CLASS VALUE IN WEB DESIGN</h3>
                            <p className="text-[#626161]">We provide top value and long-term satisfaction for increased sales and performance.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-500">CLIENT-CENTERED PROCESS</h3>
                            <p className="text-[#626161]">Our dedicated team works directly with clients to ensure tailored, client-specific designs.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-500">TOP-LEVEL PROJECT MANAGEMENT</h3>
                            <p className="text-[#626161]">Our project managers ensure on-time, well-organized, and clear expectations are met.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-500">WEB DESIGN PROFESSIONALS</h3>
                            <p className="text-[#626161]">We offer award-winning services from a team of leading professionals in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
