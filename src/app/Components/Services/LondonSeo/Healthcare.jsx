import React from 'react'

export default function Healthcare() {
    return (
        <>
            <section className="2xl:py-12 py-10 bg-gray-100">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="image md:w-1/2  ">
                        <img
                            src="/Images/uk-bespoke-web.webp"
                            alt="Process Image"
                            className="rounded-lg md:w-4/5 w-full"
                        />
                    </div>
                    <div className="content md:w-1/2 mb-8 md:justify-end items-center">
                        <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-8">
                            <span className='text-[#ED1E3A]'>Dominate the Digital Marketplace with Our
                            </span>
                            {" "} London Web Development Agency
                        </h3>
                        <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-4">
                            WebDev Sphere is a web development agency in London that has built a great reputation for delivering user-first web solutions that clearly produce results. We facilitate our clients with an experienced and skillful developer team to create fully functional websites, aesthetically appealing, and high-performing to serve various business requirements. Being among the top web development companies in London, we concentrate on excellence, easy user experience, and customer satisfaction. Our web solutions align with your objectives and set out to deliver measurable results.

                        </p>
                        <button className="open-popup group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-10 2xl:py-4 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent">
                            Let’s Discuss Your Project
                        </button>
                    </div>


                </div>
            </section>


        </>
    )
}
