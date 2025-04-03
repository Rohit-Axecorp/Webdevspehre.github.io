import React from 'react'
import Image from 'next/image';
import Form from '../Form/Form';



export default function PortfolioSection01() {
    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">

                        <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-4">
                            Passion-Fueled Innovation: Where Dreams Become Reality
                        </p>
                        <p className="mb-6 2xl:text-lg lg:text-base text-sm text-gray-800">
                            Web Dev Sphere is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most.
                        </p>
                        <div className="flex items-center my-8">
                            <div className="flex items-center mr-4">
                                <Image src="/Images/Clutch_SEO_Companies_2021.png" alt="Clutch 2021" width={150} height={150} />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Images/upcity-excellence-2022.png" alt="Excellence Award 2022" width={150} height={150} />
                            </div>
                        </div>
                    </div>

                    <Form />

                </div>
            </section>

        </>
    )
}
