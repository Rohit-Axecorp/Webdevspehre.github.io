import React from 'react'

export default function CrossPlatform() {
    return (
        <>
            <section className='container 2xl:py-12 py-10 px-4 sm:px-6 lg:px-8'>
                <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-8"><span className='text-[#ED1E3A]'> Why Choose Web Dev Sphere
                </span>
                    <br />As Your Cross-Platform App Development Company?
                </h4>
                <div className="flex flex-col lg:flex-row justify-between items-center md:items-start ">
                    {/* Left Column - Code Section */}
                    <div className="lg:w-1/2 bg-white lg:pr-8 mb-8 lg:mb-0">

                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            Web Dev Sphere knows cross-platform app development at its core. Our passion for learning and adapting to the latest tech gives us an edge over our competition.
                        </p>
                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            We harness the power of the latest technologies for cross-platform app development and deliver apps that run smoothly on various platforms.
                        </p>
                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            Web Dev Sphere&apos;s cross-platform prowess guarantees cost-effectiveness, rapid deployment, and a strategic edge in the ever-evolving market, marking a seamless journey toward app excellence and market dominance.
                        </p>
                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            Choosing Web Dev Sphere for your cross platform mobile application development guarantees a myriad of benefits derived from our specialized proficiency and unwavering dedication to achieving excellence.
                        </p>
                        <button className="group mt-5 relative px-6 py-3 text-white border-[#ED1E3A] bg-red-600 rounded-full 2xl:text-2xl lg:text-lg text-base  flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
                            Schedule A Free Consultation Session
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <img
                            src="/Images/Why-Choose.webp"
                            alt="Process Image"
                            className="rounded-lg md:w-4/5 w-full"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}
