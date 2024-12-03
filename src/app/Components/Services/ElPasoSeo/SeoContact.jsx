import React from 'react';
import Image from 'next/image';

export default function SeoContact() {
  return (
    <>
      <section className='bg-gray-100'>
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {/* New Heading: CHICAGO SEO COMPANY */}
            <h1 className="text-xl font-bold text-red-600 mb-2">El Paso SEO Company
            </h1>

            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Drive Value Through Your Online Presence, Ensure Website Traffic into Potential Leads
            </p>
            <p className="mb-6 text-base md:text-lg text-gray-800">
              Building an online presence is one thing but extracting value through your site in terms of maximum traffic to gain potential leads sustains your brand’s growth. Working with our  <a href="/austin-seo-company">El Paso SEO company</a> will not only help you generate leads but also ensure conversations.
            </p>
            <div className="flex items-center my-8 ">
              <div className="flex items-center mr-4 bg-red-500 p-5 rounded-md">
                <Image src="/Images/bannerLogo.webp" alt="Clutch 2021" width={550} height={150} />
              </div>
            </div>
            <button className="group mt-6 relative px-6 py-3 border border-black rounded-full text-base sm:text-lg flex items-center justify-center gap-2 text-red-500 transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
              Free Consultation
              {/* Inline SVG for the arrow icon */}
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
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-6 text-center">Contact Austin SEO Experts</h5>
            <form action="#" method="POST">
              <div className="space-y-4">
                {/* First and Last Name in one row */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <input
                      id="first-name"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      id="last-name"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Phone"
                    required
                  />
                </div>

                {/* Company Name */}
                <div>
                  <input
                    id="company-name"
                    type="text"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Company Name"
                    required
                  />
                </div>

                {/* Industry */}
                <div>
                  <select
                    id="industry"
                    className="w-full p-3 border rounded-md text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option className="text-gray-400">Industry</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Finance</option>
                    <option>Technology</option>
                  </select>
                </div>

                {/* Help */}
                <div>
                  <select
                    id="help"
                    className="w-full p-3 border rounded-md text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option className="text-gray-400">What can we help you with?</option>
                    <option>SEO Audit</option>
                    <option>Link Building</option>
                    <option>Content Marketing</option>
                    <option>SEO Strategy</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                >
                  Schedule a 30-minute Call Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
