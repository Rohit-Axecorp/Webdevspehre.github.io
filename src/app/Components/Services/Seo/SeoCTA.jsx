import React from 'react'

export default function SeoCTA() {
    const image = '/Images/national_cta-cutout2.webp'; // Static image path
    const backgroundImage = '/Images/Linework.svg'; // Background image path

    return (
        <>
            <section className="py-12">
                <div className="flex flex-col md:flex-row items-center pt-6 ps-6 container bg-gray-100 mx-auto gap-20 rounded-md"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col p-4">
                        <h2 className="text-3xl font-semibold mb-4">
                            Let&apos;s turn those searches into success!
                        </h2>
                        <p className="mb-6 text-lg">
                            Discover the hands-free way to drive more customers to your business with a Seattle SEO firm.
                            Discover the hands-free way to drive more customers to your business with a Seattle SEO firm.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded hover:bg-gray-900 w-1/2 ">
                            Start Your Search Journey
                        </button>
                    </div>

                    {/* Right Column - Static Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={image}
                            alt="Chicago Business Solution"
                            className="w-[500px] mx-auto"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
