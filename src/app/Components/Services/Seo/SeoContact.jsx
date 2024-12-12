"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function SeoContact() {
  const [status, setStatus] = useState(''); // State for form submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const form = e.target; // Get the form element from the event

    // EmailJS sendForm function
    emailjs
      .sendForm(
        'service_tkgmq1n', // Replace with your EmailJS Service ID
        'template_w3r9t2m', // Replace with your EmailJS Template ID
        form, // Pass the form directly
        'EPC2a3mKlO9EkFTOz' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus(''); // Clear status
          form.reset(); // Reset the form fields after submission

          // Redirect to the thank-you page
          window.location.href = '/thankyou'; // Replace with your thank-you page route
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to submit the form. Please try again.');
        }
      );
  };
  return (
    <>
      <section className='bg-gray-100'>
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
          {/* Left Section */}
          <div className="md:w-3/5 w-full mb-8 md:mb-0">
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-4">
              Dominate Search Rankings by Transforming Clicks into Customers with Our Proven SEO Strategies
            </h2>
            <p className="mb-6 text-sm lg:text-base 2xl:text-lg text-gray-800">
              Optimize your site&apos;s rank with an authority that proves to be sustainable for your business in the long run. From on-page to off-page and local to technical SEO, we&apos;ve done all experiments and cracked the code to gain the top spot on SERP.
            </p>
            <div className="flex items-center my-8 ">
              <div className="flex items-center mr-4 bg-red-600 p-5 rounded-md">
                <Image src="/Images/bannerLogo.webp" alt="Clutch 2021" width={500} height={150} />
              </div>
            </div>
            <p className="text-gray-100 text-base md:text-lg lg:text-xl">62 reviews</p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-2/5 w-full p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="p-6 border-2 rounded-lg space-y-6 border-[#ED1E3A]">
              <p className="text-2xl font-bold text-center text-[#ED1E3A]">Get Free Consultation</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
