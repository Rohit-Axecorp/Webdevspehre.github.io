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
      <section
        className="bg-gray-100 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/Images/elpaso.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative">
          < div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4" >
            {/* Left Section */}
            < div className="md:w-3/5 w-full mb-8 md:mb-0" >
              <h1 className="2xl:text-xl text-lg font-bold text-red-500 mb-2">
                El Paso SEO Company
              </h1>
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
                Drive Value Through Your Online Presence, Ensure Website Traffic into Potential Leads
              </p>
              <p className="mb-6 2xl:text-lg lg:text-base text-sm text-white">
                Building an online presence is one thing but extracting value through your site in terms of maximum traffic to gain potential leads sustains your brand’s growth. Working with our  <a href="/austin-seo-company">El Paso SEO company</a> will not only help you generate leads but also ensure conversations.
              </p>
              <div className="flex items-center my-8">
                <div className="flex items-center mr-4 py-2 rounded-md ">
                  <Image src="/Images/bannerLogo.webp" alt="Clutch 2021" width={500} height={150} />
                </div>
              </div>
              <button className="group mt-6 relative px-6 py-3 border border-white rounded-full text-base 2xl:text-xl flex items-center justify-center gap-2 text-white  transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
                Free Consultation
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
            </div >

            {/* Right Section: Contact Form */}
            < div className="md:w-2/5 w-full lg:p-6 p-4 bg-white shadow-lg rounded-lg" >
              <form onSubmit={handleSubmit} className="lg:p-6 p-4 border-2 rounded-lg space-y-6 border-[#ED1E3A]">
                <p className="text-2xl font-bold text-center text-[#ED1E3A]">Get Free Consultation</p>
                {/* Input Fields */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Enter your name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Enter email here"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex items-center w-full md:w-1/2 space-x-2 border rounded-md p-3">
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
                    className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
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
            </div >
          </div >
        </div >
      </section >
    </>
  );
}
