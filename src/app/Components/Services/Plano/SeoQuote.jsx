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
              Ready to Grow Your ROI?
            </h6>

            {/* Main Heading */}
            <h6 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] mb-4">
              Request a Quote Now!
            </h6>

            {/* Benefits List */}
            <ul className="list-disc ml-5 text-lg text-gray-600 mb-6 space-y-2">
              <li>Improve Brand Recognition
              </li>
              <li>Achieve quality leads
              </li>
              <li>Grow Your Conversion Rate</li>
              <li>Foster a Loyal User Base
              </li>
              <li>Gather Organic Traffic and Engagement</li>
              <li>Grow Return on Marketing Investment
              </li>
            </ul>

            {/* Ready to Speak Heading */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Speak to Our SEO Team Right Away
            </h3>

            {/* Phone Number with Icon */}
            <div className="flex items-center text-[#ED1E3A] 2xl:text-lg lg:text-base text-sm font-bold">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+44 20 4615 7000">+44 20 4615 7000</a>
            </div>
          </div>

          <Form />
        </div>
      </section>
    </>
  )
}
