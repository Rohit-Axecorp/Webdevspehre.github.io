import React from 'react'

export default function CrossPlatform() {
    return (
        <>
            <section className='container 2xl:py-12 py-10 px-4 sm:px-6 lg:px-8'>

                <div className="flex flex-col lg:flex-row justify-between items-center md:items-start ">
                    {/* Left Column - Code Section */}
                    <div className="lg:w-1/2 bg-white lg:pr-8 mb-8 lg:mb-0">

                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            We are the London web development agency that goes above and beyond to ensure your business is elevated through tailored web solutions that boost brand value and growth. We combine a modern tech stack with deep knowledge of your requirements to make websites that impress the audience and provide measurable results.
                        </p>
                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            As one of the premier web development agencies in London, we have expertise in taking ideas and making them impact full digital realities. We enjoy building intuitive designs, robust functions, and scalable architectures for your specific goal and purpose. We make sure that every project matches your brand while putting emphasis on a seamless user experience and engagement.
                        </p>
                        <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                            Our web development company London facilitates our clients access to the best of the industry, using the most advanced technologies in a strategy-led approach. We have a combination of complete web development services in London with a client focus ensuring unmatched outcomes that maximize your brand’s exposure and engagement.
                        </p>

                        <button className="open-popup group mt-5 relative px-6 py-3 text-white border-[#ED1E3A] bg-red-600 rounded-full 2xl:text-2xl lg:text-lg text-base  flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
                            Let’s Discuss Your Plan
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold  mb-8"><span className='text-[#ED1E3A]'> Scaling Success—The Unmatched {' '}
                        </span>
                             Value of London Web Development
                        </h4>
                        <img
                            src="/Images/uk_next_gen.webp"
                            alt="Process Image"
                            className="rounded-lg md:w-4/5 w-full"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}
