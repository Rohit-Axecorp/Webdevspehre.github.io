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
                        <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-[#ED1E3A]" >
                            Partner with the Leading Plano SEO Company
                        </h4>
                        <p className="mb-6 2xl:text-lg lg:text-base text-sm">
                            Take the first step toward digital success! Reach out to leading Plano TX SEO company to make your mark.
                        </p>
                        <button className="open-popup bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-gray-900 w-full md:w-1/2">
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
