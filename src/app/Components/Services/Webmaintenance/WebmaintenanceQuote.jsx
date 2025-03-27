import React from 'react';
import 'react-phone-number-input/style.css';
import Form from '../../Form/Form';

export default function WebmaintenanceQuote() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between container mx-auto py-12">
          {/* Left Section */}
          <div className="pt-5 w-full md:w-1/2 mb-8 md:mb-0">
            {/* Main Heading */}
            <h1 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-6">
              Website Maintenance Services
            </h1>
            <h2 className="text-xl 2xl:text-2xl font-medium text-gray-700 mb-4">
              Say Goodbye to these Web Maintenance Problems!
            </h2>

            {/* Benefits List */}
            <ul className="2xl:text-lg lg:text-base text-sm text-gray-600 mb-6 space-y-2">
              <li>Increase brand awareness & loyalty</li>
              <li>Increase your qualified leads</li>
              <li>Elevate your conversion rate</li>
              <li>Foster a repeat customer base</li>
              <li>Decrease cost per lead</li>
              <li>Increase return on marketing investment</li>
            </ul>

            <button className="scroll-smooth flex items-center justify-center bg-white text-[#ED1E3A] 2xl:text-lg lg:text-base text-sm py-4 px-8 md:py-5 md:px-10 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
              <a href='#vpap'>
              View pricing and plan
                </a>
            </button>
          </div>

          <Form />
        </div>
      </section>
    </>
  );
}
