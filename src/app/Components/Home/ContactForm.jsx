"use client";
import React from "react";
import "../Home/ContactForm.css";
import Form from "../Form/Form";


export default function ContactForm() {


  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-red-600 shadow-lg relative container p-4 sm:p-8 w-full lg:w-auto">

        <Form />

        {/* Text and Image Section */}
        <div className="relative w-full lg:w-3/5 flex flex-col lg:flex-row items-start lg:items-center">
          <div className="text-white w-full lg:w-2/3 p-4 sm:p-6">
            <p className="2xl:text-lg lg:text-base text-sm font-light">
              <b>No empty promises. Just real results</b>
            </p>
            <p className="2xl:text-lg lg:text-base text-sm font-light">
              Our clients see an impressive 2-3x ROI when they partner with us
              for digital marketing services - and you can, too.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Maximize your online visibility
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Outperform the competition effortlessly
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Drive up conversion rates
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Monitor and optimize with precision
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Lower acquisition costs effectively
              </li>
            </ul>
          </div>

          {/* Girl Image */}
          <div className="relative w-full lg:w-1/3 mt-0">
            <img
              src="/Images/model1.webp" // Use the correct path to your image
              alt="Woman pointing"
              className="h-auto max-w-full lg:block hidden" // Ensure responsive behavior
            />
          </div>
        </div>
      </div>
    </div>
  );
}
