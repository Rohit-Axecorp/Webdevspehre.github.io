import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon

export default function SeoQuote() {
  return (
    <>
      <section className='bg-gray-100'>
        <div className="flex flex-col md:flex-row justify-between container mx-auto py-12 gap-10">
          {/* Left Section */}
          <div className="max-w-xl pt-5">
            {/* Subheading */}
            <h2 className="text-lg font-medium text-gray-700 mb-2 uppercase">
              We usually deliver a 4.5x ROI for our clients
            </h2>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Request a Quote
            </h1>

            {/* Benefits List */}
            <ul className="list-disc ml-5 text-lg text-gray-600 mb-6 space-y-2">
              <li>Increase brand awareness & loyalty</li>
              <li>Increase your qualified leads</li>
              <li>Elevate your conversion rate</li>
              <li>Foster a repeat customer base</li>
              <li>Decrease cost per lead</li>
              <li>Increase return on marketing investment</li>
            </ul>

            {/* Ready to Speak Heading */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Ready to speak with our Chicago SEO team?
            </h3>

            {/* Phone Number with Icon */}
            <div className="flex items-center text-red-500 text-xl font-bold">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:(312) 847 4286">(312) 847 4286</a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-2/4">
            <form action="#" method="POST">
              <div className="space-y-4">
                {/* First and Last Name in one row */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="w-full">
                    <input
                      id="first-name"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
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

                {/* Textarea for Project Info */}
                <div>
                  <textarea
                    id="project-info"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Please tell us your project information"
                    rows="5"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                >
                  Submit Your Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
