import React from 'react';
import Image from 'next/image';

export default function AboutDigitalLandscape() {
    return (
        <>
            <section className="py-12 px-4 md:px-10">
                {/* Container with two columns */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left Column: Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-red-500">
                            Ready to Grow Your Online Presence?
                        </h2>
                        <p className="2xl:mt-8 mt-4 2xl:text-lg lg:text-base text-sm">
                            Reach out to our team of experts to build sustainable digital solutions. Make your mark now!
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2 flex justify-end">
                        <Image
                            src="/Images/21.png"
                            alt="Foreground Image"
                            width={193}
                            height={293}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
