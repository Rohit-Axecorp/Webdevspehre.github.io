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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">
                            Ready to Disrupt the UAE Digital Landscape?
                        </h2>
                        <p className="mt-8 text-base md:text-lg lg:text-xl text-gray-600">
                            Connect With Us to Fuel Your Digital Journey, Uncover New Revenue Streams and Claim Your Spot as The Market Leader!
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2 flex justify-end">
                        <Image
                            src="/Images/signature.gif"
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
