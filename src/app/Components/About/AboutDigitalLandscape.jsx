import React from 'react'
import Image from 'next/image';

export default function AboutDigitalLandscape() {
    return (
        <>
            <section className="py-12 px-4 md:px-10  ">
                {/* Container with two columns */}
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Column: Content */}
                    <div className="w-1/2">
                        <h2 className="text-6xl font-bold text-red-500">
                            Ready to Disrupt the UAE Digital Landscape?
                        </h2>
                        <p className="mt-8 text-gray-600 text-2xl">
                            Connect With Us to Fuel Your Digital Journey  Uncover New Revenue Streams and Claim Your Spot as The Market Leader!
                        </p>
                    </div>


                    <div className="w-1/2 flex justify-end">
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
    )
}
