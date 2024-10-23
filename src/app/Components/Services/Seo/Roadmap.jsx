import React from 'react'

export default function Roadmap() {
    return (
        <>

            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Strategic Road Map for Your Mobile App Success
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        As a trusted app development company in San Francisco, we keep our approach flexible to provide personalized solutions that match your unique business needs.
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
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-200 relative z-10">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800">Step {index + 1}</h3>
                                <p className="text-gray-500">
                                    {index === 0 && "Conducting product research and defining the project scope"}
                                    {index === 1 && "Creating interactive UI/UX Design from a branding perspective"}
                                    {index === 2 && "Building the core functionality while incorporating rich features"}
                                    {index === 3 && "Ensuring optimal performance through rigorous testing and validation"}
                                    {index === 4 && "Improvising app functionality or incorporating additional features for scalability"}
                                </p>
                                {/* Dot */}
                                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full z-40 -mt-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
