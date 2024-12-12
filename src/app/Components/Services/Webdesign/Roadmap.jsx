import React from 'react'

export default function Roadmap() {
    return (
        <>

            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-6">
                        Precision and Expertise: The Best Web Design Company in Houston
                    </h3>
                    <p className="2xl:text-lg lg:text-base text-sm text-gray-600 w-2/3 mx-auto mb-12">
                        At WebDev Sphere, our streamlined process ensures seamless collaboration and exceptional results. As a premier web design agency Houston, we combine creativity and strategy to deliver innovative solutions tailored to your goals. Trust us for meticulous planning and execution that sets a benchmark in web design in Houston.
                    </p>
                    <div className="relative flex lg:flex-row flex-col items-center lg:gap-0 gap-5">
                        {/* Line Container */}
                        <div className="absolute inset-0 flex items-center z-30 -mt-16">
                            <div className="w-5/6 mx-auto h-[2px] bg-gray-300 hidden lg:block"></div>
                        </div>
                        {/* Steps */}
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-col items-center relative lg:w-1/5 w-1/2 ">
                                <div
                                    className="text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-200 relative z-10">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Custom Headings for Each Step */}
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {index === 0 && "Ideation"}
                                    {index === 1 && "Wireframe"}
                                    {index === 2 && "Core Design"}
                                    {index === 3 && "Design Testing"}
                                    {index === 4 && "Maintenance & Support"}
                                </h3>

                                {/* Paragraphs for Each Step */}
                                <p className="2xl:text-lg lg:text-base text-sm text-gray-500">
                                    {index === 0 && "Brainstorming and conceptualizing the foundation of your design."}
                                    {index === 1 && "Crafting skeletal layouts for enhanced user flow."}
                                    {index === 2 && "Developing the primary design elements and aesthetics."}
                                    {index === 3 && "Ensuring flawless functionality and visual consistency."}
                                    {index === 4 && "Providing continuous updates and reliable assistance"}
                                </p>

                                {/* Dot */}
                                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:w-4 2xl:h-4 w-3 h-3 bg-red-600 rounded-full z-40 -mt-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
