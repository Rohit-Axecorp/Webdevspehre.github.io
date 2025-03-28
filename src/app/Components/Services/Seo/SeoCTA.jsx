import React from 'react'

export default function SeoCTA() {
    const image = '/Images/remover.png'; // Static image path
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
                            Let&apos;s Revolutionize Your Online Presence into Measurable Success!
                        </h4>
                        <p className="mb-6 2xl:text-lg lg:text-base text-sm">
                            Discover the smarter way to attract more customers and dominate search rankings with our Houston SEO services. We design result-driven strategies tailored to your business needs, helping you capture leads, increase conversions, and achieve sustainable growth. Your journey to online success starts here—let’s make every search count.
                        </p>
                        <button className="open-popup bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-gray-900 w-full md:w-1/2">
                            Start Your Growth Journey
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
