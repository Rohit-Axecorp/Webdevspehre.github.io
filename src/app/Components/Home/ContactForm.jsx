"use client";
import React from "react";
import "../Home/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center pt-16 pb-8 bg-gray-100 sm:pt-20 sm:pb-12 md:pt-40 md:pb-16">
      <div className="flex flex-col lg:flex-row bg-red-500 p-6 shadow-lg relative container sm:p-8 lg:h-[450px] w-full lg:w-auto">
        {/* Form Section */}
        <div className="bg-white p-6 shadow-md w-full lg:w-2/5 h-auto lg:h-[500px] relative -top-24 sm:top-0 sm:p-8">
          <form className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name*"
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-base sm:text-lg"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-base sm:text-lg"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone*"
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-base sm:text-lg"
              />
            </div>

            {/* Website Field */}
            <div>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Website"
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-base sm:text-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-3/4 sm:w-2/5 bg-red-500 text-lg sm:text-xl rounded-md text-white font-semibold py-3 px-2 hover:bg-red-600 transition"
              >
                Get A Free Quote
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm sm:text-lg text-gray-500 text-center lg:text-left">
            We respect your privacy.
          </p>
        </div>

        {/* Text and Image Section */}
        <div className="relative w-full lg:w-3/5 flex flex-col lg:flex-row items-start lg:items-center">
          <div className="text-white w-full lg:w-2/3 p-4 sm:p-6">
            <p className="text-xl sm:text-2xl font-light">
              No fluff. No BS. Just pure results.
            </p>
            <p className="text-xl sm:text-2xl font-light">
              Our clients achieve an average of{" "}
              <span className="text-black font-semibold">4-5x ROI</span> when
              they employ our digital marketing services – you can too.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li className="text-lg sm:text-xl font-light mb-2">
                Dominate online traffic
              </li>
              <li className="text-lg sm:text-xl font-light mb-2">
                Outperform competitors
              </li>
              <li className="text-lg sm:text-xl font-light mb-2">
                Increase conversions
              </li>
              <li className="text-lg sm:text-xl font-light mb-2">
                Track and monitor results
              </li>
              <li className="text-lg sm:text-xl font-light mb-2">
                Reduce cost per acquisition effectively
              </li>
            </ul>
          </div>

          {/* Girl Image */}
          <div className="relative w-full lg:absolute lg:right-[-50px] lg:bottom-0 lg:w-1/3 mt-6 lg:mt-0">
            <img
              src="/Images/model1.webp" // Use the correct path to your image
              alt="Woman pointing"
              className="h-auto max-w-full"
              style={{ width: "250px", sm: "300px", lg: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
