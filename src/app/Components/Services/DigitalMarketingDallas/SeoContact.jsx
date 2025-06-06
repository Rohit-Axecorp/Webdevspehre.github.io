"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Form from '../../Form/Form';

export default function SeoContact() {

  return (
    <>
      <section className='bg-gray-100'>
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
          {/* Left Section */}
          <div className="md:w-3/5 w-full mb-8 md:mb-0">
            {/* New Heading: CHICAGO SEO COMPANY */}
            <h2 className="2xl:text-lg lg:text-base text-sm font-bold text-red-600 mb-2">DIGITAL MARKETING AGENCY DALLAS
            </h2>

            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-4">
              Attain High Revenue with Dallas Digital Marketing Agency
            </h1>
            <p className="mb-6 2xl:text-lg lg:text-base text-sm text-gray-800">
              Web Dev Sphere is a top <a href="/dallas-texas-digital-marketing-agency">digital marketing agency Dallas,</a> dedicated to helping your brand thrive. With a blend of expertise, innovation, and strategic insight, we create campaigns that deliver real results.
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
  );
}
