import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative bg-gray-100 py-12">
      {/* Container with two columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center 2xl:gap-5 gap-10">
        {/* Left Column: Content */}
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black">
            Pioneers in Digital <span className="text-[#ED1E3A]">Transformation.</span>
          </h1>
          <p className="mt-4 2xl:text-lg lg:text-base text-sm">
            Web Dev Sphere is passionate about creating digital experiences that are meaningful, impactful, and tailored just for you.
          </p>
        </div>

        {/* Right Column: Image with background */}
        <div className="relative">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Images/aboutbanner.png"
              alt="Background"
              fill // Use fill instead of layout="fill"
              style={{ objectFit: 'cover' }} // Set object-fit through style
              className="opacity-50"
            />
          </div>

          {/* Foreground image (larger) */}
          <div className="relative">
            <Image
              src="/Images/21.png"
              alt="Foreground Image"
              width={400}
              height={400}
              style={{ objectFit: 'cover' }} // Set object-fit through style
              className="mx-auto p-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
