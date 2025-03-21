import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon
import Form from '../../Form/Form';

export default function SeoQuote() {
  return (
    <>
      <section className='bg-gray-100'>
        <div className="flex flex-col md:flex-row justify-between container mx-auto py-12 gap-10">
          {/* Left Section */}
          <div className="max-w-xl pt-5">
            {/* Subheading */}
            <h2 className="text-lg font-medium text-gray-700 mb-2 uppercase">
              Let&apos;s turn our strategy into real results for your business.
            </h2>

            {/* Main Heading */}
            <h6 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] mb-4">
              Request a Quote Today
            </h6>

            {/* Benefits List */}
            <ul className="list-disc ml-5 text-lg text-gray-600 mb-6 space-y-2">
              <li>Elevate Your Site&apos;s Ranking
              </li>
              <li>Drive a Surge in Qualified Leads</li>
              <li>Optimize Conversion Rates for Maximum Impact
              </li>
              <li>Build a Solid Domain Authority</li>
              <li>Lower Your Cost Per Lead
              </li>
              <li>Achieve Higher ROI on Marketing Efforts</li>
            </ul>

            {/* Ready to Speak Heading */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Ready to have a direct conversation?
            </h3>

            {/* Phone Number with Icon */}
            <div className="flex items-center text-[#ED1E3A]  text-xl font-bold">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:(312) 847 4286">(312) 847 4286</a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <Form />
        </div>
      </section>
    </>
  )
}
