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
            <h6 className="text-lg font-medium text-gray-700 mb-2 uppercase">
              Turn Strategy Into Tangible Success.
            </h6>

            {/* Main Heading */}
            <h6 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] mb-4">
              Claim Your Customized Estimate Today
            </h6>

            {/* Benefits List */}
            <ul className="list-disc ml-5 text-lg text-gray-600 mb-6 space-y-2">
              <li>Amplify Brand Visibility and Customer Trust
              </li>
              <li>Attract More High-Quality Leads
              </li>
              <li>Maximize Conversion Rates for Greater Results
              </li>
              <li>Cultivate a Loyal and Engaged Customer Base
              </li>
              <li>Reduce Your Cost Per Acquisition
              </li>
              <li>Generate a Higher Return on Marketing Investment
              </li>
            </ul>

            {/* Ready to Speak Heading */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Reach out to us directly!
            </h3>

            {/* Phone Number with Icon */}
            <div className="flex items-center text-[#ED1E3A]  text-xl font-bold">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:(312) 847 4286">(312) 847 4286</a>
            </div>
          </div>

          <Form />

        </div>
      </section>
    </>
  )
}
