import React from 'react';
import Image from 'next/image'; // Import if you're using the Next.js Image component

export default function ProfessionalLogo() {
  return (
    <section className='bg-gray-100'>
      <div className='container mx-auto py-12'>
        <div className="flex flex-col md:flex-row items-center justify-between p-8">
          {/* First Column */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800">
              Professional Logo Design Services <span className='text-[#ED1E3A]'>for your Business</span>
            </h1>
            <p className="text-gray-600 2xl:text-lg lg:text-base text-sm md:text-2xl py-4">
              Our In-House Designers are committed to delivering captivating and unique logo designs.
            </p>
            {/* Icon List */}
            <ul className="space-y-4">
              {[
                "Multiple options to choose from",
                "First Concepts in 24 hours",
                "Full ownership - Digital & print-ready files",
                "100% money-back guarantee",
                "Packages Starting as Low as $49"
              ].map((item, index) => (
                <li key={index} className="flex items-center 2xl:text-lg lg:text-base text-sm md:text-2xl">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <button className="open-popup px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-600 mt-8 2xl:text-lg lg:text-base text-sm cursor-pointer">
                GET STARTED NOW
              </button>
            </div>
          </div>

          {/* Second Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/Images/gator-winner-the-logo-boutique-2a.png" // Replace with your image path
              alt="Example Image"
              width={850}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
