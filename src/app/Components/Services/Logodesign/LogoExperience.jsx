"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LogoExperience() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let timer;
        if (counter < 7) {
            timer = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 100);
        }
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    {/* Left Column */}
                    <div className="md:w-1/3 space-y-4">
                        <h5 className="text-sm font-medium text-gray-500 uppercase" style={{ letterSpacing: "10px" }}>Be Visible</h5>
                        <h1 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-gray-900">Beautify Your Brand with a Professional Logo Design</h1>
                        <p className="text-gray-600 text-lg">
                            Startups, small businesses, and enterprises can brand their offerings through custom logo designs, branding design solutions, and the web design expertise of Logo Design Valley.
                        </p>
                    </div>

                    {/* Center Column */}
                    <div className="md:w-1/3 flex justify-center">
                        <div className="flex flex-col items-center">
                            {/* Outer Circle (Outline) */}
                            <div className="relative flex items-center justify-center">
                                {/* Outer Border Circle */}
                                <div className="p-4 rounded-full border-2 border-red-200">
                                    {/* Inner Red Circle */}
                                    <div className="md:p-24 p-16 bg-red-600 text-white rounded-full flex items-center justify-center text-8xl font-medium">
                                        {counter}+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/3 space-y-4">
                        <h1 className="text-2xl font-medium text-gray-900">7+ YEARS OF EXPERIENCE</h1>
                        <p className="text-gray-600 text-lg">
                            We are dedicated to providing outstanding digital and design services that deliver both functionality and aesthetic appeal, ensuring your brand stands out and achieves its goals.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto pt-20">
                    <div className="flex justify-between items-center gap-5 space-x-4 lg:flex-row flex-col">
                        {/* Guarantee Item */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-red-50 rounded-full">
                                {/* Replace the image path below with your actual image */}
                                <Image src="/Images/b1.webp" alt="100% Satisfaction Guarantee" width={100} height={100} />
                            </div>
                            <div className="border-b border-gray-300 w-full my-2"></div>
                            <h3 className="text-center font-medium text-gray-900">
                                100% Satisfaction <br /> Guarantee
                            </h3>
                        </div>

                        {/* Unique Design Item */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-red-50 rounded-full">
                                {/* Replace the image path below with your actual image */}

                                <Image src="/Images/b2.webp" alt="100% Satisfaction Guarantee" width={100} height={100} />
                            </div>
                            <div className="border-b border-gray-300 w-full my-2"></div>
                            <h3 className="text-center font-medium text-gray-900">
                                Unique Design <br /> Guarantee
                            </h3>
                        </div>

                        {/* Money Back Item */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-red-50 rounded-full">
                                {/* Replace the image path below with your actual image */}

                                <Image src="/Images/b3.webp" alt="100% Satisfaction Guarantee" width={100} height={100} />
                            </div>
                            <div className="border-b border-gray-300 w-full my-2"></div>
                            <h3 className="text-center font-medium text-gray-900">
                                100% Money Back <br /> Guarantee
                            </h3>
                        </div>

                        {/* Design Consultancy Item */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-red-50 rounded-full">
                                {/* Replace the image path below with your actual image */}

                                <Image src="/Images/b4.webp" alt="100% Satisfaction Guarantee" width={100} height={100} />
                            </div>
                            <div className="border-b border-gray-300 w-full my-2"></div>
                            <h3 className="text-center font-medium text-gray-900">
                                24/7 Design <br /> Consultancy
                            </h3>
                        </div>

                        {/* Award Winning Item */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-red-50 rounded-full">
                                {/* Replace the image path below with your actual image */}

                                <Image src="/Images/b5.webp" alt="100% Satisfaction Guarantee" width={100} height={100} />
                            </div>
                            <div className="border-b border-gray-300 w-full my-2"></div>
                            <h3 className="text-center font-medium text-gray-900">
                                Award Winning <br /> Designers & Developers
                            </h3>
                        </div>
                    </div>
                </div>



            </section>
        </>
    );
}
