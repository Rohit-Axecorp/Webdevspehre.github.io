import React from 'react'

export default function SeoCTA() {
    const image = '/Images/national_cta-cutout2.webp'; // Static image path
    const backgroundImage = '/Images/Linework.svg'; // Background image path

    return (
        <>
            <section className="py-12">
                <div
                    className="flex flex-col md:flex-row items-center p-6 container bg-gray-100 mx-auto gap-10 md:gap-20 rounded-md"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                    }}
                >
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col p-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Partner with Austin Texas SEO Company
                        </h2>
                        <p className="mb-6 text-base md:text-lg text-gray-700">
                            Maximize your online presence, bring in more traffic, and scale your business with our targeted SEO services Austin TX.
                            </p>
                        <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-gray-900 w-full md:w-1/2">
                            Start Your Search Journey
                        </button>
                    </div>

                    {/* Right Column - Static Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={image}
                            alt="Chicago Business Solution"
                            className="w-3/4 md:w-[500px] mx-auto"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
