"use client"

import React from 'react'
import Image from 'next/image'; // Import if you're using the Next.js Image component

export default function ProfessionalLogo() {
  return (
    <>
      <section className='bg-gray-100'>
        <div className='container py-12'>
          <div className="flex flex-col md:flex-row items-center justify-between p-8">
            {/* First Column */}
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-6xl font-bold text-gray-800">Professional Logo Design Services <span className='text-red-500'>for your Business</span></h1>
              <p className="text-gray-600 text-2xl py-4">
                Our In-House Designers are committed to delivering captivating and unique logo designs.
              </p>
              {/* Icon List */}
              <ul className="space-y-4">
                <li className="flex items-center text-2xl font-bold">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Multiple options to choose from
                </li>
                <li className="flex items-center text-2xl">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  First Concepts in 24 hours
                </li>
                <li className="flex items-center text-2xl">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Full ownership - Digital & print-ready files
                </li>
                <li className="flex items-center text-2xl font-bold">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  100% money-back guarantee
                </li>
                <li className="flex items-center text-2xl">
                  <Image
                    src="/Images/icon-red.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Packages Starting as Low as $49
                </li>
              </ul>
              <div className="flex space-x-4 ">
                <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 mt-8 text-xl">
                GET STARTED NOW
                </button>
                <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 mt-8 shadow-md text-xl">
                SEE HOW IT WORKS
                </button>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/Images/gator-winner-the-logo-boutique-2a.png" // Replace with your image path
                alt="Example Image"
                width={850}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
