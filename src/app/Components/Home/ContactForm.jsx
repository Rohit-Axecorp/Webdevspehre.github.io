"use client";
import React, { useState } from "react";
import "../Home/ContactForm.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState(''); // State for form submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setStatus('Submitting...');

    const form = e.target; // Get the form element from the event

    emailjs
      .sendForm(
        'service_tkgmq1n',
        'template_w3r9t2m',
        form,
        'EPC2a3mKlO9EkFTOz'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus(''); // Clear status
          form.reset(); // Reset the form fields after submission

          window.location.href = '/thankyou'; // Redirect to the thank-you page
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to submit the form. Please try again.');
        }
      );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-red-600 p-6 shadow-lg relative container sm:p-8 w-full lg:w-auto">
        {/* Form Section */}
        <div className="bg-white p-6 shadow-md w-full lg:w-2/5 h-auto sm:p-8">
          <form onSubmit={handleSubmit} className="p-6 border-2 rounded-lg space-y-6 border-[#ED1E3A]">
            <h2 className="text-2xl font-bold text-center text-[#ED1E3A]">Get Free Consultation</h2>

            {/* Input Fields */}
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                placeholder="Enter email here"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 space-x-2 border rounded-md p-3">
                <select
                  name="countryCode"
                  className="border-none focus:outline-none"
                  required
                >
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="w-full placeholder-gray-400 focus:outline-none"
                  placeholder="Phone Num"
                  required
                />
              </div>
              <select
                name="service"
                className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                required
              >
                <option disabled selected>
                  Interested In
                </option>
                <option value="seo">SEO</option>
                <option value="smm">SMM</option>
                <option value="ppc">PPC</option>
                <option value="local-search-marketing">Local Search Marketing</option>
                <option value="website-content">Website Content</option>
                <option value="link-building">Link Building</option>
                <option value="reseller-program">Reseller Program</option>
              </select>
            </div>

            <input
              type="text"
              name="website"
              className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
              placeholder="Enter website"
              required
            />

            <textarea
              name="message"
              className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
              placeholder="Enter message here"
              rows="4"
              required
            ></textarea>

            {/* Checkbox */}
            <div className="text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agreement"
                  className="h-4 w-4 border-gray-300 rounded focus:ring-[#ED1E3A]"
                  required
                />
                <span>
                  Please check the box to communicate via SMS or Email (<a href="#" className="text-blue-500 underline">Terms & Conditions</a> & <a href="#" className="text-blue-500 underline">Privacy Policy</a>).
                  Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ED1E3A] text-white p-3 rounded-md hover:bg-[#ED1E3A] focus:outline-none transition"
            >
              Submit
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-center text-red-500">{status}</p>
          )}
        </div>

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
