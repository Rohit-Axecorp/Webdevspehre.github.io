"use client"
import React from 'react';
import Image from 'next/image';
import Form from '../../Form/Form';


export default function SeoContact() {

  return (
    <>
      <section
        className="bg-gray-100 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/Images/plano.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative">
          < div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4" >
            {/* Left Section */}
            < div className="md:w-3/5 w-full mb-8 md:mb-0" >
              <h1 className="2xl:text-xl text-lg font-bold text-red-500 mb-2">
                LEADING PLANO SEO COMPANY</h1>
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
                Boost Organic Traffic with Our Plano SEO Services              </p>
              <p className="mb-6 2xl:text-lg lg:text-base text-sm text-white">
                Web Dev Sphere is a professional Plano SEO company that works to bring your business to success. We improve your digital presence by growing your local visibility and driving targeted traffic to your website.
              </p>
              <div className="flex items-center my-8">
                <div className="flex items-center mr-4 py-2 rounded-md ">
                  <Image src="/Images/bannerLogo.webp" alt="Clutch 2021" width={500} height={150} />
                </div>
              </div>
              <button className="group mt-6 relative px-6 py-3 border border-white rounded-full text-base 2xl:text-xl flex items-center justify-center gap-2 text-white  transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
                Free Consultation
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div >

            <Form />
          </div >
        </div>
      </section>
    </>
  );
}
