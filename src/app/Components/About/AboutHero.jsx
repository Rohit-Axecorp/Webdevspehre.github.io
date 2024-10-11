import React from 'react'
import Image from 'next/image';

export default function AboutHero() {
  return (
   <>
    <section className="relative bg-gray-100">
      {/* Container with two columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20 px-4 md:px-8">
        {/* Left Column: Content */}
        <div className="relative z-10">
          <h2 className="text-6xl font-bold text-black">
            Our Strategy, Your <span className="text-red-500">Success.</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Why settle for ordinary when your brand can be extraordinary? Our
            dedication vows to pave your way towards digital domination.
          </p>
        </div>

        {/* Right Column: Image with background */}
        <div className="relative">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Images/aboutbanner.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>

          {/* Foreground image (larger) */}
          <div className="relative">
            <Image
              src="/Images/abouthero.webp"
              alt="Foreground Image"
              width={600}
              height={600}
              objectFit="contain"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
