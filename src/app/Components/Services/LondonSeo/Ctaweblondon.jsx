import React from 'react';
import Image from "next/image";

export default function 
Ctaweblondon() {
    return (
        <section className="relative w-full">
            <div className="relative text-white w-full h-full py-20">
                {/* Background Image */}
                <Image
                    src="/Images/achieve-uk-web2.webp"
                    alt="City Skyline Background"
                    fill
                    className="object-cover object-center z-0"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

                {/* Content aligned right within a container */}
                <div className="relative z-20 mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10 container">
                    <div className="w-full lg:w-1/2" /> {/* Empty spacer on left for image alignment */}

                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-left gap-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-loose">
                            Scale Up <span className='text-[#ED1E3A]'> Your Business all Across
                            </span> the Digital Marketplace of UK
                        </h1>
                        <p className="text-base sm:text-lg text-white">
                            If you want to outshine your competitors, let your business grow to its true potential with digitization through web development and lead the digital horizons of the UK. Consult with our expert web developers in London and finalize your requirements to build a full-fledged website.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="bg-[#ED1E3A] hover:bg-[#ED1E3A] text-white font-semibold px-6 py-3 rounded-full">
                                Talk to Our Experts on the Go!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}