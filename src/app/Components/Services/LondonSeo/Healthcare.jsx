import React from 'react'

export default function Healthcare() {
    return (
        <>
            <section className="2xl:py-12 py-10 bg-gray-100">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="image md:w-1/2  ">
                        <img
                            src="/Images/seo-client-2.png"
                            alt="Process Image"
                            className="rounded-lg md:w-4/5 w-full"
                        />
                    </div>
                    <div className="content md:w-1/2 mb-8 md:justify-end items-center">
                        <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-8">
                            <span className='text-[#ED1E3A]'>The London SEO agency of choice for
                            </span>
                            {" "} healthcare + professional services.
                        </h3>
                        <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-4">
                            We’re Figment – Our London-based SEO agency specialise in working with established healthcare practices and professional service providers to maximise their SEO.
                        </p>
                        <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-4">
                            This is SEO that helps drive a more reliable flow of warm enquiries – so you can sustainably grow your business.
                        </p>
                        <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-8">
                            It’s simple, powerful SEO that creates better connections and a stronger business.
                        </p>
                        <button className="group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-10 2xl:py-4 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent">
                            Book a consultation
                        </button>
                    </div>


                </div>
            </section>


        </>
    )
}
